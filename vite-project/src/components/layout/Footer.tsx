import { Link } from "react-router";
import type { ReactNode } from "react";

const columns = [
  {
    title: "COMPANY",
    links: [
      { label: "About", to: "/about" },
      { label: "Features", to: "/features" },
      { label: "Works", to: "/works" },
      { label: "Career", to: "/career" },
    ],
  },
  {
    title: "HELP",
    links: [
      { label: "Customer Support", to: "/support" },
      { label: "Delivery Details", to: "/delivery" },
      { label: "Terms & Conditions", to: "/terms" },
      { label: "Privacy Policy", to: "/privacy" },
    ],
  },
  {
    title: "FAQ",
    links: [
      { label: "Account", to: "/faq/account" },
      { label: "Manage Deliveries", to: "/faq/deliveries" },
      { label: "Orders", to: "/faq/orders" },
      { label: "Payments", to: "/faq/payments" },
    ],
  },
  {
    title: "RESOURCES",
    links: [
      { label: "Free eBooks", to: "/resources/ebooks" },
      { label: "Development Tutorial", to: "/resources/tutorial" },
      { label: "How to - Blog", to: "/blog" },
      { label: "Youtube Playlist", to: "/resources/youtube" },
    ],
  },
];

const socials: { name: string; href: string; icon: ReactNode }[] = [
  {
    name: "Twitter",
    href: "https://twitter.com",
    icon: <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />,
  },
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />,
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: (
      <>
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </>
    ),
  },
  {
    name: "GitHub",
    href: "https://github.com",
    icon: (
      <>
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </>
    ),
  },
];

const payments = ["VISA", "Mastercard", "PayPal", "Apple Pay", "G Pay"];

export default function Footer() {
  return (
    <footer className="bg-[#F0F0F0]">
      <div className="mx-auto max-w-7xl px-4 pb-10 pt-12 lg:px-10">
        {/* Yuqori qism */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.6fr_repeat(4,1fr)]">
          {/* Brend */}
          <div className="max-w-[250px]">
            <Link to="/" className="text-3xl font-black tracking-tight">
              SHOP.CO
            </Link>
            <p className="mt-6 text-sm leading-relaxed text-black/60">
              We have clothes that suits your style and which you're proud to wear. From women to men.
            </p>

            <div className="mt-8 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.name}
                  className="flex h-7 w-7 items-center justify-center rounded-full border border-black/20 bg-white text-black transition hover:bg-black hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {s.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Ustunlar */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-medium tracking-[0.2em]">{col.title}</h4>
              <ul className="mt-6 space-y-4">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-sm text-black/60 transition hover:text-black">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Chiziq */}
        <hr className="mt-12 border-black/10" />

        {/* Pastki qism */}
        <div className="mt-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-black/60">Shop.co © 2000-2026, All Rights Reserved</p>

          <div className="flex flex-wrap justify-center gap-3">
            {payments.map((name) => (
              <span
                key={name}
                className="flex h-[30px] min-w-[46px] items-center justify-center rounded-md border border-black/10 bg-white px-2 text-[11px] font-semibold text-black/70"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}