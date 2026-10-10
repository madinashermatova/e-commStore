import { useState } from "react";

export default function ProductGallery({ images, alt }: { images: string[]; alt: string }) {
  const [active, setActive] = useState(0);
  const multiple = images.length > 1;

  return (
    <div className="flex flex-col-reverse gap-3 lg:flex-row lg:gap-3.5">
      {/* Kichik rasmlar: har doim ko'rinadi, o'lchami qat'iy */}
      <div className="flex gap-3 lg:w-[152px] lg:shrink-0 lg:flex-col lg:gap-3.5">
        {images.map((src, i) => (
          <button
            key={src}
            onClick={() => setActive(i)}
            aria-label={`Show image ${i + 1}`}
            className={`aspect-square w-[calc((100%-1.5rem)/3)] shrink-0 overflow-hidden rounded-[20px] border bg-[#F0EEED] lg:w-full ${
              i === active ? "border-black" : "border-transparent"
            }`}
          >
            <img src={src} alt={`${alt} ${i + 1}`} className="h-full w-full object-cover" />
          </button>
        ))}
      </div>

      {/* Asosiy rasm: relative bo'lishi SHART, ichidagi rasm absolute */}
      <div className="relative aspect-[5/4] overflow-hidden rounded-[20px] bg-[#F0EEED] sm:aspect-square lg:aspect-auto lg:min-h-[420px] lg:flex-1">
        <img
          src={images[active]}
          alt={alt}
          className={`absolute inset-0 h-full w-full ${multiple ? "object-cover" : "object-contain p-4"}`}
        />
      </div>
    </div>
  );
}