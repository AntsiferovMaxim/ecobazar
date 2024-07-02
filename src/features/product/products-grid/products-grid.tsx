import clsx from "clsx";
import { ComponentProps, FC, PropsWithChildren } from "react";
import styles from "./products-grid.module.scss";

export const ProductsGrid: FC<PropsWithChildren<ComponentProps<"div">>> = (
  props,
) => {
  const { children, className, ...rest } = props;

  return (
    <div className={clsx(styles.grid, className)} {...rest}>
      {children}
    </div>
  );
};
