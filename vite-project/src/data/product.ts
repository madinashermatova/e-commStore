  import type { Product } from "../types/product";

import img1 from "../assets/product/1.png";
import img2 from "../assets/product/2.png";
import img3 from "../assets/product/3.png";
import img4 from "../assets/product/4.png";
import img5 from "../assets/product/5.png";
import img6 from "../assets/product/6.png";
import img7 from "../assets/product/7.png";
import img8 from "../assets/product/8.png";

export const products: Product[] = [
  {
    id: 1,
    name: "T-shirt with Tape Details",
    image: img1,
    price: 120,
    rating: 4.5,
  },
  {
    id: 2,
    name: "Skinny Fit Jeans",
    image: img2,
    price: 240,
    oldPrice: 260,
    discount: 20,
    rating: 3.5,
  },
  { id: 3, name: "Checkered Shirt", image: img3, price: 180, rating: 4.5 },
  {
    id: 4,
    name: "Sleeve Striped T-shirt",
    image: img4,
    price: 130,
    oldPrice: 160,
    discount: 30,
    rating: 4.5,
  },
  {
    id: 5,
    name: "Vertical Striped Shirt",
    image: img5,
    price: 212,
    oldPrice: 232,
    discount: 20,
    rating: 5,
  },
  {
    id: 6,
    name: "Courage Graphic T-shirt",
    image: img6,
    price: 145,
    rating: 4,
  },
  {
    id: 7,
    name: "Loose Fit Bermuda Shorts",
    image: img7,
    price: 80,
    rating: 3,
  },
  { id: 8, name: "Faded Skinny Jeans", image: img8, price: 210, rating: 4.5 },
];
