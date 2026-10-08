// src/components/layout/AnnouncementBar.tsx
import { useState } from "react";
import { Link } from "react-router";
import { X } from "lucide-react";

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="relative bg-black px-10 py-2 text-center text-xs text-white sm:text-sm">
      <p>
        Sign up and get 20% off to your first order.{" "}
        <Link to="/signup" className="underline underline-offset-2">
          Sign Up Now
        </Link>
      </p>
      <button
        onClick={() => setVisible(false)}
        aria-label="Close banner"
        className="absolute right-4 top-1/2 hidden -translate-y-1/2 sm:block"
      >
        <X size={16} />
      </button>
    </div>
  );
}