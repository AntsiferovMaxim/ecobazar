import clsx from "clsx";
import { ComponentProps, FC } from "react";
import styles from "./button.module.scss";

export type ButtonVarint = "primary" | "dark" | "gray";
export type ButtonSize = "default" | "small";

export type ButtonProps = ComponentProps<"button"> & {
  variant?: ButtonVarint;
  size?: ButtonSize;
};

const variantStylesMap: { [key in ButtonVarint]: string } = {
  primary: styles.buttonPrimary,
  dark: styles.buttonDark,
  gray: styles.buttonGray,
};

const sizeStylesMap: { [key in ButtonSize]: string } = {
  default: styles.buttonDefaultSize,
  small: styles.buttonSmallSize,
};

export const Button: FC<ButtonProps> = (props) => {
  const {
    size = "default",
    variant = "primary",
    children,
    className,
    ...rest
  } = props;

  const variantStyle = variantStylesMap[variant];
  const sizeStyle = sizeStylesMap[size];

  return (
    <button
      className={clsx(styles.button, variantStyle, sizeStyle, className)}
      {...rest}
    >
      {children}
    </button>
  );
};
