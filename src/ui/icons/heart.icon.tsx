import { FC } from "react";

export const HeartIcon: FC<{ size?: number; fill?: string }> = ({
  size = 33,
  fill = "#1A1A1A",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.9995 28.5722C-10.6667 13.8333 7.99999 -2.16666 15.9995 7.95074C24 -2.16667 42.6666 13.8333 15.9995 28.5722Z"
      stroke={fill}
      strokeWidth="1.5"
    />
  </svg>
);
