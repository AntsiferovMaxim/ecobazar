import { FC } from "react";
import Image from "next/image";
import { Rating } from "@/ui/rating";
import { Text } from "@/ui/typography";
import { Product } from "@/entities/product";
import { EyeIcon } from "@/ui/icons/eye.icon";
import { HeartIcon } from "@/ui/icons/heart.icon";
import { formatPrice } from "@/shared/format-price";
import { AddProductToCartBtn } from "./add-product-to-cart-btn";
import styles from "./product-card.module.scss";

export type ProductCardProps = {
  product: Product;
};

export const ProductCard: FC<ProductCardProps> = (props) => {
  const { product } = props;

  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <Image
          src={product.image}
          alt={product.title}
          width={254}
          height={230}
          priority={true}
        />
      </div>
      <div className={styles.footer}>
        <div className={styles.description}>
          <Text variant="small" className={styles.title}>
            {product.title}
          </Text>
          <div className={styles.price}>
            <Text as="span" variant="medium" weight="medium">
              {formatPrice(product.price)}
            </Text>
            {product.oldPrice && (
              <Text as="span" variant="medium" className={styles.oldPrice}>
                {formatPrice(product.oldPrice)}
              </Text>
            )}
          </div>
          <Rating value={product.rating} />
        </div>
        <AddProductToCartBtn productId={product.id} />
      </div>
      <div className={styles.btns}>
        <button className={styles.btn} aria-label="Add to favourite">
          <HeartIcon size={20} fill="currentColor" />
        </button>
        <button className={styles.btn} aria-label="Go to product">
          <EyeIcon size={20} fill="currentColor" />
        </button>
      </div>
    </div>
  );
};
