import { Link } from "react-router";
import StarRating from "../ui/StarRating";
import type { Product } from "../../types/product";

export default function ProductCard({ product }: { product: Product }) {
  const { id, name, image, price, oldPrice, discount, rating } = product;

  return (
    <Link to={`/products/${id}`} className="block">
      <div className="aspect-square overflow-hidden rounded-[20px] bg-[#F0EEED]">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-contain p-4 transition duration-300 hover:scale-105"
        />
      </div>

      <h3 className="mt-3 truncate text-base font-bold lg:text-lg">{name}</h3>

      <div className="mt-1 flex items-center gap-2">
        <StarRating rating={rating} size={16} />
        <span className="text-xs text-black/60 sm:text-sm">
          <span className="text-black">{rating.toFixed(1)}</span>/5
        </span>
      </div>

      <div className="mt-1 flex items-center gap-2">
        <span className="text-xl font-bold lg:text-2xl">${price}</span>
        {oldPrice && <span className="text-xl font-bold text-black/30 line-through lg:text-2xl">${oldPrice}</span>}
        {discount && (
          <span className="rounded-full bg-[#FF3333]/10 px-3 py-1 text-xs font-medium text-[#FF3333]">
            -{discount}%
          </span>
        )}
      </div>
    </Link>
  );
}