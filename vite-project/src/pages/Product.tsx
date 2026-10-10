// src/pages/Product.tsx
import { Link, useParams } from "react-router";
import Breadcrumbs from "../components/ui/Breadcrumbs";
import ProductGallery from "../components/product/ProductGallery";
import ProductInfo from "../components/product/ProductInfo";
import ProductTabs from "../components/product/ProductTabs";
import RelatedProducts from "../components/product/RelatedProducts";
import { products } from "../data/product";

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <section className="mx-auto max-w-7xl px-4 py-24 text-center lg:px-10">
        <h1 className="text-3xl font-black uppercase">Product not found</h1>
        <Link to="/shop" className="mt-6 inline-block rounded-full bg-black px-10 py-3 text-sm text-white">
          Back to shop
        </Link>
      </section>
    );
  }

  const crumbs = [
    { label: "Home", to: "/" },
    { label: "Shop", to: "/shop" },
    ...(product.category ?? []).map((c) => ({ label: c, to: `/shop?category=${c.toLowerCase()}` })),
    { label: product.name },
  ];

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 lg:px-10">
        <div className="border-t border-black/10 py-5">
          <Breadcrumbs items={crumbs} />
        </div>

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
          {/* key: mahsulot almashganda galereya va tanlovlar holati tozalanadi */}
          <ProductGallery key={`gallery-${product.id}`} images={product.images ?? [product.image]} alt={product.name} />
          <ProductInfo key={`info-${product.id}`} product={product} />
        </div>

        <div className="mt-12 sm:mt-16">
          <ProductTabs key={`tabs-${product.id}`} description={product.description} />
        </div>
      </div>

      {/* Konteynerdan tashqarida: o'zining padding'i bor */}
      <RelatedProducts currentId={product.id} />
    </>
  );
}