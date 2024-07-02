import clsx from "clsx";
import { ComponentProps, FC } from "react";
import styles from "./text.module.scss";

export type TextComponent = "span" | "p" | "div";
export type TextVariant = "xxl" | "xl" | "large" | "medium" | "small" | "tiny";
export type TextWeight = "normal" | "medium" | "semi-bold";

export type TextProps<T extends TextComponent = "div"> = {
  as?: TextComponent;
  variant?: TextVariant;
  weight?: TextWeight;
} & ComponentProps<T>;

const variantStylesMap: { [key in TextVariant]: string } = {
  xxl: styles.xxl,
  xl: styles.xl,
  large: styles.large,
  medium: styles.medium,
  small: styles.small,
  tiny: styles.tiny,
};

const weightStylesMap: { [key in TextWeight]: string } = {
  normal: styles.weightNormal,
  medium: styles.weightMedium,
  ["semi-bold"]: styles.weightSemiBold,
};

export const Text: FC<TextProps> = (props) => {
  const {
    as: As = "div",
    variant = "medium",
    weight = "normal",
    className,
    children,
    ...rest
  } = props;

  const varaintStyle = variantStylesMap[variant];
  const weightStyle = weightStylesMap[weight];

  return (
    <As className={clsx(varaintStyle, weightStyle, className)} {...rest}>
      {children}
    </As>
  );
};
