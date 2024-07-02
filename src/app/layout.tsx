import "@/styles/index.css";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { CartProvider } from "@/features/cart/model/use-cart";
import { getOrCreateCart } from "@/features/cart/cart.api";

const font = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ecobazar",
  description:
    "EcoBazar is an online store offering eco-friendly products for a sustainable lifestyle.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cart = await getOrCreateCart();

  return (
    <html lang="en">
      <body className={font.className}>
        <CartProvider value={cart}>{children}</CartProvider>
      </body>
    </html>
  );
}
