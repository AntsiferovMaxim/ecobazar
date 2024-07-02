"use client";

import clsx from "clsx";
import { FC, useState } from "react";
import { BagIcon } from "@/ui/icons/bag.icon";
import { useCart } from "@/features/cart/model/use-cart";
import styles from "./product-card.module.scss";

export const AddProductToCartBtn: FC<{ productId: string }> = (props) => {
  "use client";

  const [loading, setLoading] = useState(false);
  const { products, addProduct, removeProduct } = useCart();

  const isInCart = products.includes(props.productId);

  const handleClick = async () => {
    if (loading) {
      return;
    }

    try {
      isInCart
        ? await removeProduct(props.productId)
        : await addProduct(props.productId);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      className={clsx(
        styles.addToCart,
        isInCart ? styles.productAddedBtn : null,
      )}
      aria-label="Add to cart"
      onClick={handleClick}
    >
      <BagIcon size={20} fill="currentColor" />
    </button>
  );
};
