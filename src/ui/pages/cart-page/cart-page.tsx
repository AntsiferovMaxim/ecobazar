"use client";

import { useRouter } from "next/navigation";
import { Container, Page } from "@/ui/layout";
import { CartList } from "@/features/cart/cart-list";
import { CartTotal } from "@/features/cart/cart-total";
import { useCheckout } from "@/features/cart/model/use-checkout";
import { CartCoupon } from "@/features/cart/cart-coupon/cart-coupon";
import { NewsletterSubscription } from "@/features/newsletter-subscription";
import styles from "./cart-page.module.scss";

export const CartPage = () => {
  const checkout = useCheckout();
  const router = useRouter();

  return (
    <Page title="My Shopping Cart">
      <Container className={styles.container}>
        <div className={styles.products}>
          <CartList
            products={checkout.products}
            onGoToMarket={() => router.push("/")}
            onRemoveProduct={checkout.cart.removeProduct}
            onDecrementQuantity={checkout.cart.decrementQuantity}
            onIncrementQuantity={checkout.cart.incrementQuantity}
          />
          <CartCoupon
            onApply={async (coupon: string) => {
              if (!coupon) {
                return;
              }

              await checkout.cart.applyCoupon(coupon);
            }}
          />
        </div>
        <CartTotal
          disabled={checkout.products.length === 0}
          className={styles.total}
          subtotal={checkout.cart.subtotal}
          total={checkout.cart.total}
          shipping={checkout.cart.shipping}
          coupon={checkout.cart.coupon}
          discount={checkout.cart.discount}
          onRemoveCoupon={checkout.cart.removeCoupon}
        />
      </Container>
      <NewsletterSubscription />
    </Page>
  );
};
