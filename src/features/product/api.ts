"use server";

const products = [
  {
    id: "1",
    title: "Green Apple",
    price: 14.99,
    oldPrice: 20.99,
    rating: 3,
    image: "/products/green-apple.png",
  },
  {
    id: "2",
    title: "Fresh Indian Malta",
    price: 20.0,
    oldPrice: null,
    rating: 1,
    image: "/products/oranges.png",
  },
  {
    id: "3",
    title: "Chinese cabbage",
    price: 12.0,
    oldPrice: null,
    rating: 4,
    image: "/products/cabbage.png",
  },
  {
    id: "4",
    title: "Green Lettuce",
    price: 9.0,
    oldPrice: null,
    rating: 4,
    image: "/products/lettuce.png",
  },
  {
    id: "5",
    title: "Eggplant",
    price: 34.0,
    oldPrice: null,
    rating: 5,
    image: "/products/eggplant.png",
  },
  {
    id: "6",
    title: "Big Potatoes",
    price: 20.0,
    oldPrice: null,
    rating: 5,
    image: "/products/potatoes.png",
  },
  {
    id: "7",
    title: "Corn",
    price: 20.0,
    oldPrice: null,
    rating: 4,
    image: "/products/corn.png",
  },
  {
    id: "8",
    title: "Fresh Cauliflower",
    price: 12.0,
    oldPrice: null,
    rating: 5,
    image: "/products/cauliflower.png",
  },
  {
    id: "9",
    title: "Green Capsicum",
    price: 9.0,
    oldPrice: 20.99,
    rating: 3,
    image: "/products/capsicum.png",
  },
  {
    id: "10",
    title: "Green Chili",
    price: 34.0,
    oldPrice: null,
    rating: 3,
    image: "/products/chili.png",
  },
];

export async function getProducts() {
  return products;
}

export async function getProductsByIds(ids: string[]) {
  return products.filter((item) => ids.includes(item.id));
}
