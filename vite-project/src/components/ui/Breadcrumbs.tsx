import { Link } from "react-router";
import { ChevronRight } from "lucide-react";

type Crumb = { label: string; to?: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-sm text-black/60">
      {items.map((item, i) => {
        const last = i === items.length - 1;
        return (
          <span key={item.label} className="flex items-center gap-1.5">
            {item.to && !last ? (
              <Link to={item.to} className="transition hover:text-black">
                {item.label}
              </Link>
            ) : (
              <span className="text-black">{item.label}</span>
            )}
            {!last && <ChevronRight size={14} />}
          </span>
        );
      })}
    </nav>
  );
}