import { Star } from "lucide-react";

export default function StarRating({ rating, size = 18 }: { rating: number; size?: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5`}>
      {[0, 1, 2, 3, 4].map((i) => {
        const fill = Math.min(Math.max(rating - i, 0), 1) * 100;
        return (
          <span key={i} className="relative inline-block" style={{ width: size, height: size }}>
            <Star size={size} className="fill-black/10 text-transparent" />
            <span className="absolute inset-0 overflow-hidden" style={{ width: `${fill}%` }}>
              <Star size={size} className="fill-[#FFC633] text-transparent" />
            </span>
          </span>
        );
      })}
    </div>
  );
}