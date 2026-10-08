import { Link } from "react-router";
import ProductCard from "../product/ProductCard";
import type { Product } from "../../types/product";

type Props = {
  title: string;
  products: Product[];
  viewAllTo: string;
};

export default function ProductSection({ title, products, viewAllTo }: Props) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 lg:px-10 lg:py-16">
      <h2 className="text-center text-3xl font-black uppercase sm:text-5xl">{title}</h2>

      <div className="-mx-4 mt-8 flex gap-4 overflow-x-auto px-4 pb-2 lg:mx-0 lg:mt-14 lg:grid lg:grid-cols-4 lg:gap-5 lg:overflow-visible lg:px-0">
        {products.map((p) => (
          <div key={p.id} className="w-[200px] shrink-0 sm:w-[260px] lg:w-auto">
            <ProductCard product={p} />
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link
          to={viewAllTo}
          className="inline-block w-full rounded-full border border-black/10 px-14 py-3 text-sm font-medium transition hover:bg-black hover:text-white sm:w-auto"
        >
          View All
        </Link>
      </div>
    </section>
  );
}