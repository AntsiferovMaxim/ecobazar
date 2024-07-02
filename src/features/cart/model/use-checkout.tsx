"use client";

import { FC, PropsWithChildren, createContext, use, useState } from "react";
import { Checkout } from "@/entities/checkout";
import { useCart } from "./use-cart";
import { getCartProducts } from "../cart.api";

export type CheckoutContextState = {
  value: Checkout;
  set: (payload: Checkout) => void;
};

export const CheckoutContext = createContext<CheckoutContextState | null>(null);

export const CheckoutProvider: FC<PropsWithChildren<{ value: Checkout }>> = (
  props,
) => {
  const [value, set] = useState(props.value);

  return (
    <CheckoutContext.Provider value={{ value, set }}>
      {props.children}
    </CheckoutContext.Provider>
  );
};

export function useCheckout() {
  const checkout = use(CheckoutContext);
  const cart = useCart({
    async onUpdated(payload) {
      const products = await getCartProducts(payload);
      checkout?.set({ products });
    },
  });

  if (!checkout) {
    throw new Error(
      "To use useCheckout, please wrap your component in CartProvider",
    );
  }

  return {
    cart,
    products: checkout.value.products,
  };
}
