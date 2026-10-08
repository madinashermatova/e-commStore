import { Link, NavLink } from "react-router";
import { ChevronDown, Search, ShoppingCart, CircleUserRound } from "lucide-react";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `text-sm transition hover:text-black ${isActive ? "font-semibold text-black" : "text-black/80"}`;

export default function Header() {
  return (
    <header className="bg-white">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center gap-6 px-4 lg:gap-10 lg:px-10">
        {/* Logo */}
        <Link to="/" className="text-2xl font-black tracking-tight lg:text-3xl">
          SHOP.CO
        </Link>

        {/* Navigatsiya */}
        <nav className="hidden items-center gap-6 md:flex">
          <div className="group relative">
            <NavLink to="/shop" className={(s) => `${navLinkClass(s)} flex items-center gap-1`}>
              Shop <ChevronDown size={14} />
            </NavLink>

            {/* Dropdown (hover bilan chiqadi) */}
            <div className="invisible absolute left-0 top-full z-20 w-44 rounded-xl border border-black/10 bg-white p-2 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100">
              <Link to="/shop?category=men" className="block rounded-lg px-3 py-2 text-sm hover:bg-neutral-100">
                Men
              </Link>
              <Link to="/shop?category=women" className="block rounded-lg px-3 py-2 text-sm hover:bg-neutral-100">
                Women
              </Link>
              <Link to="/shop?category=kids" className="block rounded-lg px-3 py-2 text-sm hover:bg-neutral-100">
                Kids
              </Link>
            </div>
          </div>

          <NavLink to="/on-sale" className={navLinkClass}>On Sale</NavLink>
          <NavLink to="/new-arrivals" className={navLinkClass}>New Arrivals</NavLink>
          <NavLink to="/brands" className={navLinkClass}>Brands</NavLink>
        </nav>

        {/* Qidiruv */}
        <div className="hidden flex-1 items-center gap-3 rounded-full bg-[#F0F0F0] px-4 py-3 md:flex">
          <Search size={20} className="text-black/40" />
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full bg-transparent text-sm outline-none placeholder:text-black/40"
          />
        </div>

        {/* O'ng tomon: savat va profil */}
        <div className="ml-auto flex items-center gap-4 md:ml-0">
          <button className="md:hidden" aria-label="Search">
            <Search size={22} />
          </button>
          <Link to="/cart" aria-label="Cart">
            <ShoppingCart size={22} />
          </Link>
          <Link to="/profile" aria-label="Account">
            <CircleUserRound size={22} />
          </Link>
        </div>
      </div>
    </header>
  );
}