import Link from "next/link";
import { BagIcon } from "@/ui/icons/bag.icon";
import styles from "./cart-summary.module.scss";
import { FC, PropsWithChildren } from "react";

const CountBadge: FC<PropsWithChildren<{ count: number }>> = (props) => {
  return (
    <div className={styles.countBadge}>
      {props.children}
      <div className={styles.count}>{props.count}</div>
    </div>
  );
};

export const CartSummary: FC<{ items: number; total: string }> = (props) => {
  return (
    <Link href={"/cart"} className={styles.container}>
      <CountBadge count={props.items}>
        <BagIcon />
      </CountBadge>
      <div className={styles.summary}>
        <div className={styles.title}>Shopping cart:</div>
        <div className={styles.total}>{props.total}</div>
      </div>
    </Link>
  );
};
