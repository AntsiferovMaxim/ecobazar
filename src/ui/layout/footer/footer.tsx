import { Logo } from "@/ui/logo";
import { Container } from "../container";
import styles from "./footer.module.scss";
import { Text } from "@/ui/typography";

type NavItem = { title: string; href: string };
type NavBlock = { title: string; nav: NavItem[] };
type Navigation = Array<NavBlock>;

const navigation: Navigation = [
  {
    title: "My Account",
    nav: [
      {
        title: "My Account",
        href: "/",
      },
      {
        title: "Order History",
        href: "/",
      },
      {
        title: "Shoping Cart",
        href: "/",
      },
      {
        title: "Wishlist",
        href: "/",
      },
    ],
  },
  {
    title: "Helps",
    nav: [
      {
        title: "Contact",
        href: "/",
      },
      {
        title: "Faqs",
        href: "/",
      },
      {
        title: "Terms & Condition",
        href: "/",
      },
      {
        title: "Privacy Policy",
        href: "/",
      },
    ],
  },
  {
    title: "Proxy",
    nav: [
      {
        title: "About",
        href: "/",
      },
      {
        title: "Shop",
        href: "/",
      },
      {
        title: "Product",
        href: "/",
      },
      {
        title: "Track Order",
        href: "/",
      },
    ],
  },
  {
    title: "Categories",
    nav: [
      {
        title: "Fruit & Vegetables",
        href: "/",
      },
      {
        title: "Meat & Fish",
        href: "/",
      },
      {
        title: "Bread & Bakery",
        href: "/",
      },
      {
        title: "Beauty & Health",
        href: "/",
      },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container className={styles.container}>
        <div className={styles.header}>
          <Logo variant="light" />
          <Text variant="small" className={styles.description}>
            Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis
            dui, eget bibendum magna congue nec.
          </Text>
          <Text as="span" variant="small" className={styles.email}>
            Proxy@gmail.com
          </Text>
        </div>
        <div className={styles.navigation}>
          {navigation.map((block) => (
            <div key={block.title} className={styles.block}>
              <Text variant="medium">{block.title}</Text>
              <ul className={styles.navList}>
                {block.nav.map((item) => (
                  <li key={item.title}>
                    <a href={item.href} className={styles.navItem}>
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
      <Container>
        <Text variant="small" className={styles.copyright}>
          Ecobazar eCommerce © 2024. All Rights Reserved
        </Text>
      </Container>
    </footer>
  );
};
