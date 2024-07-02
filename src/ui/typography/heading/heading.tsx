import clsx from "clsx";
import { FC, PropsWithChildren, ComponentProps } from "react";
import styles from "./heading.module.scss";

export type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5";
export type HeadingWeight = "normal" | "semi-bold";
export type HeadingTextAlign = "left" | "center" | "right";
export type HeadingProps<T extends HeadingLevel = "h3"> = {
  level?: HeadingLevel;
  weight?: HeadingWeight;
  textAlign?: HeadingTextAlign;
} & ComponentProps<T>;

const levelStylesMap: { [key in HeadingLevel]: string } = {
  h1: styles.heading1,
  h2: styles.heading2,
  h3: styles.heading3,
  h4: styles.heading4,
  h5: styles.heading5,
};

const weightStylesMap: { [key in HeadingWeight]: string } = {
  normal: styles.weightNormal,
  "semi-bold": styles.weightSemiBold,
};

const textAlignStylesMap: { [key in HeadingTextAlign]: string } = {
  left: styles.textAlignLeft,
  center: styles.textAlignCenter,
  right: styles.textAlignRight,
};

export const Heading: FC<PropsWithChildren<HeadingProps>> = (props) => {
  const {
    level: Heading = "h3",
    weight = "normal",
    textAlign,
    children,
    className,
    ...rest
  } = props;

  const levelStyle = levelStylesMap[Heading];
  const weightStyle = weightStylesMap[weight];
  const textAlignStyle = textAlign ? textAlignStylesMap[textAlign] : null;

  return (
    <Heading
      className={clsx(levelStyle, weightStyle, className, textAlignStyle)}
      {...rest}
    >
      {children}
    </Heading>
  );
};
