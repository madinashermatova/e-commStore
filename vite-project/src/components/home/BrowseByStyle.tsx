import { Link } from "react-router";

import casualImg from "../../assets/styles/casual.png";
import formalImg from "../../assets/styles/formal.png";
import partyImg from "../../assets/styles/party.png";
import gymImg from "../../assets/styles/gym.png";

const styles = [
  { name: "Casual", slug: "casual", image: casualImg, wide: false },
  { name: "Formal", slug: "formal", image: formalImg, wide: true },
  { name: "Party", slug: "party", image: partyImg, wide: true },
  { name: "Gym", slug: "gym", image: gymImg, wide: false },
];

export default function BrowseByStyle() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 lg:px-10 lg:py-16">
      <div className="rounded-[24px] bg-[#F0F0F0] px-5 py-10 sm:rounded-[40px] sm:px-16 sm:py-16">
        <h2 className="text-center text-3xl font-black uppercase sm:text-5xl">
          Browse by dress style
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-16 sm:grid-cols-3 sm:gap-5">
          {styles.map((s) => (
            <Link
              key={s.slug}
              to={`/shop?style=${s.slug}`}
              className={`group relative block h-[190px] overflow-hidden rounded-[20px] bg-white sm:h-[289px] ${
                s.wide ? "sm:col-span-2" : "sm:col-span-1"
              }`}
            >
              <h3 className="absolute left-6 top-4 z-10 text-2xl font-bold sm:left-9 sm:top-6 sm:text-4xl">
                {s.name}
              </h3>
              <img
                src={s.image}
                alt={s.name}
                className="absolute inset-0 h-full w-full object-cover object-right transition duration-300 group-hover:scale-105"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
