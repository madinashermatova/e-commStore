import ProductSection from "../home/ProductSection";
import { products } from "../../data/product";

export default function RelatedProducts({ currentId }: { currentId: number }) {
  const related = products.filter((p) => p.id !== currentId).slice(0, 4);

  return <ProductSection title="You might also like" products={related} />;
}