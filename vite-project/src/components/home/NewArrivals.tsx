// src/components/home/NewArrivals.tsx
import ProductSection from "./ProductSection";
import { products } from "../../data/product";

export default function NewArrivals() {
  return (
    <ProductSection
      title="New Arrivals"
      products={products.slice(0, 4)}
      viewAllTo="/new-arrivals"
    />
  );
}
