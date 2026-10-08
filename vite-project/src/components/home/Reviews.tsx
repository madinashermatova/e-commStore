import { useRef } from "react";
import { ArrowLeft, ArrowRight, CircleCheck } from "lucide-react";
import StarRating from "../ui/StarRating";
import { reviews } from "../../data/reviews";

const gutter = "px-4 lg:px-[max(2.5rem,calc((100%-80rem)/2+2.5rem))]";
const scrollGutter =
  "scroll-pl-4 lg:scroll-pl-[max(2.5rem,calc((100%-80rem)/2+2.5rem))]";

export default function Reviews() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    trackRef.current?.scrollBy({ left: dir * 340, behavior: "smooth" });
  };

  return (
    <section className="overflow-hidden py-12 lg:py-16">
      {/* Sarlavha va strelkalar: konteyner ichida */}
      <div className="mx-auto flex max-w-7xl items-end justify-between px-4 lg:px-10">
        <h2 className="text-3xl font-black uppercase sm:text-5xl">
          Our happy customers
        </h2>

        <div className="flex gap-4">
          <button
            onClick={() => scroll(-1)}
            aria-label="Previous"
            className="transition hover:opacity-60"
          >
            <ArrowLeft size={24} />
          </button>
          <button
            onClick={() => scroll(1)}
            aria-label="Next"
            className="transition hover:opacity-60"
          >
            <ArrowRight size={24} />
          </button>
        </div>
      </div>

      {/* Kartalar: ekranning to'liq kengligida */}
      <div
        ref={trackRef}
        className={`mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 sm:mt-10 sm:gap-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)] ${gutter} ${scrollGutter}`}
      >
        {reviews.map((r) => (
          <article
            key={r.id}
            className="w-[290px] shrink-0 snap-start rounded-[20px] border border-black/10 bg-white p-6 sm:w-[400px] sm:p-8"
          >
            <StarRating rating={r.rating} size={20} />

            <div className="mt-3 flex items-center gap-1.5">
              <h3 className="text-lg font-bold sm:text-xl">{r.name}</h3>
              <CircleCheck
                size={22}
                className="fill-[#01AB31] text-white"
                aria-label="Verified customer"
              />
            </div>

            <p className="mt-2 text-sm leading-relaxed text-black/60 sm:text-base">
              "{r.text}"
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
