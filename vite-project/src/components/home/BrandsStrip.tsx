const brands = [
  { name: "VERSACE", className: "font-serif tracking-wide text-2xl" },
  { name: "ZARA", className: "font-serif text-2xl tracking-widest" },
  { name: "GUCCI", className: "font-serif text-2xl tracking-[0.15em]" },
  { name: "PRADA", className: "font-serif text-2xl font-bold tracking-widest" },
  { name: "Calvin Klein", className: "font-sans text-xl font-light" },
];

export default function BrandsStrip() {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-5 px-4 py-8 sm:justify-between lg:px-10">
        {brands.map((b) => (
          <span key={b.name} className={b.className}>
            {b.name}
          </span>
        ))}
      </div>
    </section>
  );
}
