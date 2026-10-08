// src/components/home/TopSelling.tsx
import ProductSection from "./ProductSection";
import { products } from "../../data/product";

export default function TopSelling() {
  return (
    <ProductSection
      title="Top Selling"
      products={products.slice(4, 8)}
      viewAllTo="/shop"
    />
  );
}