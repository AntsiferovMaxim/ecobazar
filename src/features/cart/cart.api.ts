"use server";

import { Cart, CartProduct, getInitialCart } from "@/entities/cart";
import { getUserFromCookieOrFail } from "@/server/cookie";
import { kv } from "@vercel/kv";
import { getProductsByIds } from "../product/api";
import { Product } from "@/entities/product";

const coupons = [{ name: "HEALTH20", percent: 20 }];

export async function getCartProducts(cart: Cart): Promise<CartProduct[]> {
  const ids = cart.products.map((item) => item.productId);
  const productsMap = await getProductsByIds(ids).then((payload) =>
    payload.reduce<Record<string, Product>>(
      (acc, item) => ({ ...acc, [item.id]: item }),
      {},
    ),
  );

  return cart.products.map(
    (item): CartProduct => ({
      productId: item.productId,
      quantity: item.quantity,
      product: productsMap[item.productId],
    }),
  );
}

export async function getOrCreateCart(): Promise<Cart> {
  const user = getUserFromCookieOrFail();

  const cart = await kv.get<Cart>(getCartKey(user));
  if (cart) {
    return cart;
  }

  const initialCart = getInitialCart();
  await kv.set(getCartKey(user), initialCart);
  return initialCart;
}

export async function addProductToCart(productId: string): Promise<Cart> {
  const user = getUserFromCookieOrFail();
  const cart = await getCartOrFail(user);
  cart.products.push({ productId: productId, quantity: 1 });

  return await updateCart(user, cart);
}

export async function removeProductFromCart(productId: string): Promise<Cart> {
  const user = getUserFromCookieOrFail();
  const cart = await getCartOrFail(user);
  cart.products = cart.products.filter((item) => item.productId !== productId);

  return updateCart(user, cart);
}

export async function applyCouponToCart(couponName: string | null) {
  const user = getUserFromCookieOrFail();
  const cart = await getCartOrFail(user);

  if (couponName === null) {
    cart.coupon = null;
    return updateCart(user, cart);
  }

  const coupon = coupons.find((item) => item.name === couponName);

  if (!coupon) {
    return cart;
  }

  cart.coupon = coupon;
  return updateCart(user, cart);
}

export async function changeProductQuantity(
  productId: string,
  action: "increment" | "decrement",
): Promise<Cart> {
  const user = getUserFromCookieOrFail();
  const cart = await getCartOrFail(user);
  cart.products = cart.products.map((item) => {
    if (item.productId !== productId) {
      return item;
    }

    if (action === "increment") {
      item.quantity = item.quantity + 1;
    }
    if (action === "decrement" && item.quantity > 1) {
      item.quantity = item.quantity - 1;
    }

    return item;
  });

  return updateCart(user, cart);
}

function getCartKey(user: string) {
  return `${user}.cart`;
}

async function getCartOrFail(user: string): Promise<Cart> {
  const cart = await kv.get<Cart>(getCartKey(user));

  if (!cart) {
    throw new Error("Cart not found");
  }

  return cart;
}

async function updateCart(user: string, cart: Cart): Promise<Cart> {
  const products = await getCartProducts(cart);
  const calculatedCart = await calculateCart(cart, products);

  await kv.set(getCartKey(user), calculatedCart);
  return calculatedCart;
}

async function calculateCart(
  cart: Cart,
  products: CartProduct[],
): Promise<Cart> {
  const coupon =
    cart.coupon !== null
      ? coupons.find((item) => item.name === cart.coupon?.name) ?? null
      : null;
  const subtotal = products.reduce((acc, item) => {
    return acc + item.product.price * item.quantity;
  }, 0);
  const discount = coupon ? (subtotal * coupon.percent) / 100 : 0;
  const total = subtotal - discount + cart.shipping;

  return {
    ...cart,
    subtotal,
    discount,
    total,
  };
}
