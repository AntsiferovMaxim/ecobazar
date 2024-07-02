import clsx from "clsx";
import { ComponentProps, FC } from "react";
import { range } from "@/shared/range";
import { StarIcon } from "@/ui/icons/star.icon";
import styles from "./rating.module.scss";

export type RatingProps = { value: number };

const ratingRange = range(1, 5);

export const Rating: FC<
  RatingProps & Omit<ComponentProps<"div">, "children">
> = (props) => {
  const { value, className } = props;

  return (
    <div className={clsx(styles.rating, className)}>
      {ratingRange.map((index) => (
        <StarIcon
          key={index}
          fill={value >= index ? "var(--warning)" : "var(--gray-200)"}
        />
      ))}
    </div>
  );
};
