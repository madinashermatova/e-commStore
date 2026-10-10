// src/components/product/ProductTabs.tsx
import { useState } from "react";
import { CircleCheck, SlidersHorizontal } from "lucide-react";
import StarRating from "../ui/StarRating";
import { reviews } from "../../data/reviews";

const tabs = [
  { id: "details", label: "Product Details" },
  { id: "reviews", label: "Rating & Reviews" },
  { id: "faqs", label: "FAQs" },
] as const;

type TabId = (typeof tabs)[number]["id"];
type Sort = "latest" | "oldest" | "highest";

const PAGE_SIZE = 4;

const time = (date: string) => new Date(date).getTime();

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });

export default function ProductTabs({ description }: { description?: string }) {
  const [active, setActive] = useState<TabId>("reviews");
  const [sort, setSort] = useState<Sort>("latest");
  const [visible, setVisible] = useState(PAGE_SIZE);

  const sorted = [...reviews].sort((a, b) => {
    if (sort === "latest") return time(b.date) - time(a.date) || b.id - a.id;
    if (sort === "oldest") return time(a.date) - time(b.date) || a.id - b.id;
    return b.rating - a.rating;
  });

  return (
    <section>
      {/* Tablar */}
      <div className="flex border-b border-black/10">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setActive(t.id)}
            className={`-mb-px flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-sm transition sm:text-lg ${
              active === t.id ? "border-black font-medium text-black" : "border-transparent text-black/60 hover:text-black"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="mt-6 sm:mt-8">
        {active === "details" && (
          <p className="max-w-3xl leading-relaxed text-black/60">
            {description ?? "Product details will be shown here."}
          </p>
        )}

        {active === "reviews" && (
          <>
            {/* Sarlavha, filtr, saralash, yangi sharh */}
            <div className="flex items-center justify-between gap-2">
              <h2 className="text-xl font-bold sm:text-2xl">
                All Reviews <span className="text-sm font-normal text-black/60 sm:text-base">({reviews.length})</span>
              </h2>

              <div className="flex items-center gap-2 sm:gap-3">
                <button
                  aria-label="Filter reviews"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F0F0F0] transition hover:bg-black/10 sm:h-11 sm:w-11"
                >
                  <SlidersHorizontal size={20} />
                </button>

                {/* Mobilda yashirin */}
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value as Sort)}
                  aria-label="Sort reviews"
                  className="hidden h-11 rounded-full bg-[#F0F0F0] px-5 text-sm outline-none sm:block"
                >
                  <option value="latest">Latest</option>
                  <option value="oldest">Oldest</option>
                  <option value="highest">Highest rated</option>
                </select>

                <button className="h-10 whitespace-nowrap rounded-full bg-black px-4 text-xs font-medium text-white transition hover:bg-black/80 sm:h-11 sm:px-6 sm:text-sm">
                  Write a Review
                </button>
              </div>
            </div>

            {/* Sharhlar */}
            <div className="mt-5 grid gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-5">
              {sorted.slice(0, visible).map((r) => (
                <article key={r.id} className="rounded-[20px] border border-black/10 p-5 sm:p-8">
                  <StarRating rating={r.rating} size={20} />
                  <div className="mt-3 flex items-center gap-1.5">
                    <h3 className="text-lg font-bold sm:text-xl">{r.name}</h3>
                    <CircleCheck size={22} className="fill-[#01AB31] text-white" aria-label="Verified customer" />
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-black/60 sm:text-base">"{r.text}"</p>
                  <p className="mt-4 text-sm font-medium text-black/60 sm:mt-6 sm:text-base">
                    Posted on {formatDate(r.date)}
                  </p>
                </article>
              ))}
            </div>

            {/* Load More */}
            {visible < sorted.length && (
              <div className="mt-6 text-center sm:mt-8">
                <button
                  onClick={() => setVisible((v) => v + PAGE_SIZE)}
                  className="w-full rounded-full border border-black/10 px-14 py-3 text-sm font-medium transition hover:bg-black hover:text-white sm:w-auto"
                >
                  Load More Reviews
                </button>
              </div>
            )}
          </>
        )}

        {active === "faqs" && <p className="text-black/60">Frequently asked questions will be shown here.</p>}
      </div>
    </section>
  );
}