import { FC, PropsWithChildren, ReactNode } from "react";
import { Footer } from "@/ui/layout/footer";
import { Header } from "@/ui/layout/header";
import { Heading } from "@/ui/typography";
import styles from "./page.module.scss";

export const Page: FC<PropsWithChildren<{ title?: ReactNode }>> = (props) => {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.content}>
        {props.title && (
          <Heading
            level="h5"
            weight="semi-bold"
            textAlign="center"
            className={styles.title}
          >
            {props.title}
          </Heading>
        )}
        {props.children}
      </main>
      <Footer />
    </div>
  );
};
