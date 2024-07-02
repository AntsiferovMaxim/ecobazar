import { FC } from "react";
import Image from "next/image";
import { Button } from "@/ui/button";
import { Text } from "@/ui/typography";
import { CartProduct } from "@/entities/cart";
import { CloseIcon } from "@/ui/icons/close.icon";
import { formatPrice } from "@/shared/format-price";
import { QuantityInput } from "@/ui/input/quantity-input";
import styles from "./cart-list.module.scss";

export type CartListProps = {
  products: CartProduct[];
  onGoToMarket: () => void;
  onRemoveProduct: (productId: string) => void;
  onIncrementQuantity: (productId: string) => void;
  onDecrementQuantity: (productId: string) => void;
};

export const CartList: FC<CartListProps> = (props) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Subtotal</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {props.products.map((item) => (
          <tr key={item.productId}>
            <td>
              <div className={styles.product}>
                <div className={styles.image}>
                  <Image
                    src={item.product.image}
                    alt="Green Capsicum"
                    width={100}
                    height={100}
                  />
                </div>
                <Text as="span" variant="medium">
                  {item.product.title}
                </Text>
              </div>
            </td>
            <td>
              <Text as="span" variant="medium">
                {formatPrice(item.product.price)}
              </Text>
            </td>
            <td>
              <QuantityInput
                value={item.quantity}
                onDecrement={() => props.onDecrementQuantity(item.productId)}
                onIncrement={() => props.onIncrementQuantity(item.productId)}
              />
            </td>
            <td>
              <Text as="span" variant="medium">
                {formatPrice(item.product.price * item.quantity)}
              </Text>
            </td>
            <td>
              <button
                className={styles.remove}
                onClick={() => props.onRemoveProduct(item.productId)}
              >
                <CloseIcon />
              </button>
            </td>
          </tr>
        ))}
        <tr>
          <th colSpan={4}>
            <Button
              variant="gray"
              size="small"
              className={styles.backToShop}
              onClick={props.onGoToMarket}
            >
              Return to shop
            </Button>
          </th>
        </tr>
      </tbody>
    </table>
  );
};
