"use client";

import { Logo } from "@/ui/logo/logo";
import { HeartIcon } from "@/ui/icons/heart.icon";
import { Container } from "@/ui/layout/container";
import { formatPrice } from "@/shared/format-price";
import { useCart } from "@/features/cart/model/use-cart";
import { CartSummary } from "@/features/cart/cart-summary";
import styles from "./header.module.scss";

export const Header = () => {
  const { products, total } = useCart();

  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <a href="/">
          <Logo variant={"dark"} />
        </a>
        <div className={styles.right}>
          <HeartIcon />
          <div className={styles.divider} />
          <CartSummary items={products.length} total={formatPrice(total)} />
        </div>
      </Container>
    </header>
  );
};
