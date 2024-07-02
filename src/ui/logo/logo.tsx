import { FC } from "react";
import Image from "next/image";
import logoLight from "./imgs/logo-light.svg";
import logoDark from "./imgs/logo-dark.svg";
import styles from "./logo.module.scss";

export type LogoProps = {
  variant: "light" | "dark";
};

const logoVariantMap: { [key in LogoProps["variant"]]: string } = {
  light: logoLight,
  dark: logoDark,
};

export const Logo: FC<LogoProps> = (props) => {
  const { variant } = props;

  const img = logoVariantMap[variant];

  return <Image src={img} alt="Ecobazar logo" className={styles.logo} />;
};
