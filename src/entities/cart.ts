import { Product } from "./product";

export type CartSummary = {
  products: string[];
};

export type CartProduct = {
  productId: string;
  product: Product;
  quantity: number;
};

export type Cart = {
  products: Array<{ productId: string; quantity: number }>;
  total: number;
  subtotal: number;
  coupon: { name: string; percent: number } | null;
  shipping: number;
  discount: number;
};

export function getInitialCart(): Cart {
  return {
    products: [],
    coupon: null,
    total: 0,
    subtotal: 0,
    shipping: 0,
    discount: 0,
  };
}
