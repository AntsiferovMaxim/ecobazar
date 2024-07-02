"use client";

import clsx from "clsx";
import { FC, PropsWithChildren, useState } from "react";
import { Button, ButtonVarint } from "@/ui/button";
import styles from "./row-input.module.scss";

export type RowInputProps = PropsWithChildren<{
  className?: string;
  variant?: ButtonVarint;
  placeholder: string;
  ariaLabel?: string;
  onSubmit?: (value: string) => void | Promise<void>;
}>;

export const RowInput: FC<RowInputProps> = (props) => {
  const { className, variant, ariaLabel, placeholder, children } = props;

  const [value, setValue] = useState("");

  return (
    <div className={clsx(styles.form, className)}>
      <input
        className={styles.input}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button
        variant={variant}
        aria-label={ariaLabel}
        className={clsx(styles.button)}
        onClick={async () => {
          await props.onSubmit?.(value);
          setValue("");
        }}
      >
        {children}
      </Button>
    </div>
  );
};
