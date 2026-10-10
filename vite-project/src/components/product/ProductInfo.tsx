import { useState } from "react";
import { Check, Minus, Plus } from "lucide-react";
import StarRating from "../ui/StarRating";
import type { ProductDetails } from "../../types/product";

const defaultSizes = ["Small", "Medium", "Large", "X-Large"];

export default function ProductInfo({ product }: { product: ProductDetails }) {
  const { name, price, oldPrice, discount, rating, description } = product;
  const colors = product.colors ?? [];
  const sizes = product.sizes ?? defaultSizes;

  const [color, setColor] = useState(colors[0]);
  const [size, setSize] = useState(sizes[Math.min(2, sizes.length - 1)]);
  const [qty, setQty] = useState(1);

  const handleAdd = () => {
    // Zustand savati tayyor bo'lgach shu yerda store'ga qo'shiladi
    console.log("Add to cart:", { id: product.id, color, size, qty });
  };

  return (
    <div>
      <h1 className="text-2xl font-black uppercase leading-tight sm:text-4xl">
        {name}
      </h1>

      <div className="mt-3 flex items-center gap-3">
        <StarRating rating={rating} size={22} />
        <span className="text-sm">
          {rating.toFixed(1)}
          <span className="text-black/60">/5</span>
        </span>
      </div>

      <div className="mt-3 flex items-center gap-3">
        <span className="text-2xl font-bold sm:text-3xl">${price}</span>
        {oldPrice && (
          <span className="text-2xl font-bold text-black/30 line-through sm:text-3xl">
            ${oldPrice}
          </span>
        )}
        {discount && (
          <span className="rounded-full bg-[#FF3333]/10 px-3 py-1 text-xs font-medium text-[#FF3333] sm:px-3.5 sm:py-1.5 sm:text-sm">
            -{discount}%
          </span>
        )}
      </div>

      <p className="mt-5 text-sm leading-relaxed text-black/60 sm:text-base">
        {description ??
          "A comfortable, well-made piece that fits any occasion."}
      </p>

      {/* Ranglar */}
      {colors.length > 0 && (
        <div className="mt-6 border-t border-black/10 pt-6">
          <p className="text-sm text-black/60 sm:text-base">Select Colors</p>
          <div className="mt-4 flex gap-3">
            {colors.map((c) => (
              <button
                key={c}
                onClick={() => setColor(c)}
                aria-label={`Color ${c}`}
                aria-pressed={c === color}
                style={{ backgroundColor: c }}
                className="flex h-9 w-9 items-center justify-center rounded-full text-white sm:h-10 sm:w-10"
              >
                {c === color && <Check size={18} />}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* O'lchamlar */}
      <div className="mt-6 border-t border-black/10 pt-6">
        <p className="text-sm text-black/60 sm:text-base">Choose Size</p>
        <div className="mt-4 flex flex-wrap gap-2 sm:gap-3">
          {sizes.map((s) => (
            <button
              key={s}
              onClick={() => setSize(s)}
              aria-pressed={s === size}
              className={`rounded-full px-5 py-2.5 text-sm transition sm:px-6 sm:py-3 sm:text-base ${
                s === size
                  ? "bg-black text-white"
                  : "bg-[#F0F0F0] text-black/60 hover:bg-black/10"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Soni va savatga qo'shish */}
      <div className="mt-6 flex gap-3 border-t border-black/10 pt-6 sm:gap-5">
        <div className="flex w-[110px] items-center justify-between rounded-full bg-[#F0F0F0] px-4 py-3 sm:w-[170px] sm:px-5 sm:py-4">
          <button
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            aria-label="Decrease quantity"
          >
            <Minus size={20} />
          </button>
          <span className="text-sm font-medium sm:text-base">{qty}</span>
          <button
            onClick={() => setQty((q) => q + 1)}
            aria-label="Increase quantity"
          >
            <Plus size={20} />
          </button>
        </div>

        <button
          onClick={handleAdd}
          className="flex-1 rounded-full bg-black py-3 text-sm font-medium text-white transition hover:bg-black/80 sm:py-4 sm:text-base"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
