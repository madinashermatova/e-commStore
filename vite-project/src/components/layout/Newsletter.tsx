import { useState } from "react";
import { Mail } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    console.log("Subscribe:", email); // keyin backendga yuboriladi
    setEmail("");
  };

  return (
    <section className="relative px-4 lg:px-10">
      {/* Footer bilan bir xil fon: blokning pastki yarmi */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[#F0F0F0]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-6 rounded-[20px] bg-black px-6 py-8 sm:gap-8 sm:rounded-[28px] sm:px-16 sm:py-9 lg:grid-cols-[1.4fr_1fr]">
        <h2 className="text-3xl font-black uppercase leading-tight text-white sm:text-4xl">
          Stay upto date about our latest offers
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <label className="flex items-center gap-3 rounded-full bg-white px-4 py-3">
            <Mail size={20} className="text-black/40" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full bg-transparent text-sm outline-none placeholder:text-black/40"
            />
          </label>

          <button
            type="submit"
            className="rounded-full bg-white py-3 text-sm font-medium transition hover:bg-white/80"
          >
            Subscribe to Newsletter
          </button>
        </form>
      </div>
    </section>
  );
}