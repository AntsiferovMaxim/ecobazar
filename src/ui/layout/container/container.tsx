import clsx from "clsx";
import styles from "./container.module.scss";
import { ComponentProps, FC } from "react";

export const Container: FC<ComponentProps<"div">> = (props) => {
  const { className, children, ...rest } = props;

  return (
    <div className={clsx(styles.container, className)} {...rest}>
      {children}
    </div>
  );
};
