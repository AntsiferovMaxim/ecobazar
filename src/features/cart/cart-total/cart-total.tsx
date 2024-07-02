import clsx from "clsx";
import { FC } from "react";
import { Button } from "@/ui/button";
import { Text } from "@/ui/typography";
import { CloseIcon } from "@/ui/icons/close.icon";
import { formatPrice } from "@/shared/format-price";
import styles from "./cart-total.module.scss";

export const CartTotal: FC<{
  disabled: boolean;
  className?: string;
  subtotal: number;
  shipping: number;
  total: number;
  coupon: { name: string; percent: number } | null;
  discount: number;
  onRemoveCoupon: () => void;
}> = (props) => {
  return (
    <div className={clsx(styles.cartTotal, props.className)}>
      <Text variant="xl" weight="medium">
        Cart Total
      </Text>
      <div className={styles.line}>
        <Text variant="small">Subtotal:</Text>
        <Text variant="small" weight="medium">
          {formatPrice(props.subtotal)}
        </Text>
      </div>
      <div className={styles.line}>
        <Text variant="small">Shipping:</Text>
        <Text variant="small" weight="medium">
          {props.shipping === 0 ? "Free" : formatPrice(props.shipping)}
        </Text>
      </div>
      {props.coupon && (
        <div className={styles.line}>
          <Text variant="small">Coupon:</Text>
          <Text variant="small" weight="medium" className={styles.discount}>
            <button
              className={styles.removeCoupon}
              onClick={props.onRemoveCoupon}
            >
              <CloseIcon />
            </button>
            -{props.coupon.percent}%
          </Text>
        </div>
      )}
      <div className={styles.line} data-border="false">
        <Text variant="medium">Total:</Text>
        <Text variant="medium" weight="medium">
          {props.discount === 0 ? (
            formatPrice(props.total)
          ) : (
            <>{formatPrice(props.total)}</>
          )}
        </Text>
      </div>
      <Button className={styles.button} disabled={props.disabled}>
        Proceed to checkout
      </Button>
    </div>
  );
};
