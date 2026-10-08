// src/components/home/Hero.tsx
import { Link } from "react-router";
import heroImg from "../../assets/hero-bg.png";

const stats = [
  { value: "200+", label: "International Brands" },
  { value: "2,000+", label: "High-Quality Products" },
  { value: "30,000+", label: "Happy Customers" },
];

// Mobil: 2 + 1 (uchinchisi pastda o'rtada). sm dan boshlab: bir qatorda
const statClasses = [
  "",
  "border-l border-black/10 sm:pl-8",
  "col-span-2 sm:col-span-1 sm:border-l sm:border-black/10 sm:pl-8",
];

function Sparkle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 0C12.8 7 17 11.2 24 12C17 12.8 12.8 17 12 24C11.2 17 7 12.8 0 12C7 11.2 11.2 7 12 0Z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="overflow-hidden bg-[#F2F0F1]">
      <div className="mx-auto grid max-w-7xl lg:grid-cols-2 lg:items-end">
        {/* Matn qismi */}
        <div className="px-4 pb-6 pt-10 lg:px-10 lg:pb-20 lg:pt-20">
          <h1 className="text-[32px] font-black uppercase leading-[1.05] sm:text-5xl lg:text-6xl">
            Find clothes that matches your style
          </h1>

          <p className="mt-4 max-w-md text-sm leading-relaxed text-black/60 sm:mt-8 sm:text-base">
            Browse through our diverse range of meticulously crafted garments, designed to bring out your
            individuality and cater to your sense of style.
          </p>

          <Link
            to="/shop"
            className="mt-6 block w-full rounded-full bg-black py-4 text-center text-sm font-medium text-white transition hover:bg-black/80 sm:mt-8 sm:inline-block sm:w-auto sm:px-14"
          >
            Shop Now
          </Link>

          {/* Statistika */}
          <div className="mt-8 grid grid-cols-2 gap-y-4 text-center sm:mt-12 sm:flex sm:flex-nowrap sm:items-center sm:text-left">
            {stats.map((s, i) => (
              <div key={s.label} className={`px-2 sm:px-0 sm:pr-8 ${statClasses[i]}`}>
                <p className="text-2xl font-bold sm:text-4xl">{s.value}</p>
                <p className="text-xs text-black/60 sm:text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Rasm qismi: ekran chetigacha */}
        <div className="relative">
          <Sparkle className="absolute right-6 top-4 h-14 w-14 sm:h-20 sm:w-20 lg:right-10 lg:top-16" />
          <Sparkle className="absolute left-4 top-1/3 h-8 w-8 sm:h-11 sm:w-11 lg:left-0" />
          <img
            src={heroImg}
            alt="Models wearing stylish clothes"
            className="relative z-10 mx-auto block w-full object-contain object-bottom"
          />
        </div>
      </div>
    </section>
  );
}