import { Text } from "@/ui/typography";
import styles from "./cart-coupon.module.scss";
import { RowInput } from "@/ui/input/row-input";
import { FC } from "react";

export const CartCoupon: FC<{
  onApply: (coupon: string) => void | Promise<void>;
}> = (props) => {
  return (
    <div className={styles.coupon}>
      <Text variant="xl">Coupon Code</Text>
      <RowInput
        variant="dark"
        className={styles.input}
        placeholder="Enter code"
        ariaLabel="Apply Coupon"
        onSubmit={props.onApply}
      >
        Apply Coupon
      </RowInput>
    </div>
  );
};
