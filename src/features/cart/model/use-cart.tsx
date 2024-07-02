"use client";

import { FC, PropsWithChildren, createContext, use, useState } from "react";
import {
  addProductToCart,
  applyCouponToCart,
  changeProductQuantity,
  removeProductFromCart,
} from "../cart.api";
import { Cart } from "@/entities/cart";

export type CartContextState = {
  value: Cart;
  set: (payload: Cart) => void;
};

export const CartContext = createContext<CartContextState | null>(null);

export const CartProvider: FC<
  PropsWithChildren<{
    value: Cart;
  }>
> = (props) => {
  const [cart, setCart] = useState(props.value);

  return (
    <CartContext.Provider
      value={{
        value: cart,
        set: setCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export function useCart(params?: {
  onUpdated: (payload: Cart) => void | Promise<void>;
}) {
  const cart = use(CartContext);

  if (!cart) {
    throw new Error(
      "To use useCart, please wrap your component in CartProvider",
    );
  }

  const total = cart.value.total;
  const shipping = cart.value.shipping;
  const subtotal = cart.value.subtotal;
  const coupon = cart.value.coupon;
  const discount = cart.value.discount;
  const products = cart.value.products.map((item) => item.productId);

  const updateCart = async (payload: Cart): Promise<Cart> => {
    cart.set(payload);
    params?.onUpdated(payload);
    return payload;
  };

  const addProduct = async (productId: string) => {
    return updateCart(await addProductToCart(productId));
  };
  const removeProduct = async (productId: string) => {
    return updateCart(await removeProductFromCart(productId));
  };
  const incrementQuantity = async (productId: string) => {
    return updateCart(await changeProductQuantity(productId, "increment"));
  };
  const decrementQuantity = async (productId: string) => {
    return updateCart(await changeProductQuantity(productId, "decrement"));
  };
  const applyCoupon = async (coupon: string) => {
    return updateCart(await applyCouponToCart(coupon));
  };
  const removeCoupon = async () => {
    return updateCart(await applyCouponToCart(null));
  };

  return {
    products,
    total,
    subtotal,
    shipping,
    coupon,
    discount,
    applyCoupon,
    removeCoupon,
    addProduct,
    removeProduct,
    incrementQuantity,
    decrementQuantity,
  };
}
