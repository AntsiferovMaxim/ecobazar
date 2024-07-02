import { getCartProducts, getOrCreateCart } from "@/features/cart/cart.api";
import { CheckoutProvider } from "@/features/cart/model/use-checkout";
import { CartPage } from "@/ui/pages/cart-page/cart-page";

export default async function Cart() {
  const cart = await getOrCreateCart();
  const products = await getCartProducts(cart);

  return (
    <CheckoutProvider value={{ products }}>
      <CartPage />
    </CheckoutProvider>
  );
}
