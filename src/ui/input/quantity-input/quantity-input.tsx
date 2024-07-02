import { FC } from "react";
import { Text } from "@/ui/typography";
import { PlusIcon } from "@/ui/icons/plus.icon";
import { MinusIcon } from "@/ui/icons/minus.icon";
import styles from "./quantity-input.module.scss";

export type QuantityInputProps = {
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
};

export const QuantityInput: FC<QuantityInputProps> = (props) => {
  return (
    <span className={styles.quantityInput}>
      <button
        className={styles.btn}
        onClick={props.onDecrement}
        disabled={props.value <= 1}
      >
        <MinusIcon />
      </button>
      <Text variant="medium" className={styles.value}>
        {props.value}
      </Text>
      <button className={styles.btn} onClick={props.onIncrement}>
        <PlusIcon />
      </button>
    </span>
  );
};
