import { Container, Page } from "@/ui/layout";
import { ProductsGrid } from "@/features/product/products-grid";
import { ProductCard } from "@/features/product/product-card/product-card";
import { NewsletterSubscription } from "@/features/newsletter-subscription";
import styles from "./home-page.module.scss";
import { getProducts } from "@/features/product/api";

export const HomePage = async () => {
  const products = await getProducts();

  return (
    <Page title="Popular Products">
      <Container>
        <ProductsGrid className={styles.productsGrid}>
          {products.map((item) => (
            <ProductCard product={item} key={item.id} />
          ))}
        </ProductsGrid>
      </Container>
      <NewsletterSubscription />
    </Page>
  );
};
