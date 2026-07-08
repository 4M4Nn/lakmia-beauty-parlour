"use client";

import { useState } from "react";
import Image from "next/image";
import TiltCard from "@/components/ui/TiltCard";
import { cn } from "@/lib/utils";
import type { GalleryItem } from "@/types";

const categories = ["All", "Bridal", "Hair", "Facial", "Nails", "Salon"] as const;

export default function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [active, setActive] = useState<(typeof categories)[number]>("All");

  const filtered =
    active === "All" ? items : items.filter((i) => i.category === active);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={cn(
              "rounded-full border px-5 py-2 text-sm font-medium transition-colors",
              active === cat
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-white text-foreground/80 hover:bg-secondary"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-10 columns-2 gap-4 sm:columns-3 sm:gap-6">
        {filtered.map((item) => (
          <TiltCard
            key={item.image}
            intensity={6}
            className="mb-4 break-inside-avoid sm:mb-6"
          >
            <div className="relative w-full overflow-hidden rounded-2xl shadow-md">
              <Image
                src={item.image}
                alt={item.alt}
                width={600}
                height={750}
                className="h-auto w-full object-cover transition-transform duration-500 hover:scale-110"
              />
              <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-primary">
                {item.category}
              </span>
            </div>
          </TiltCard>
        ))}
      </div>
    </div>
  );
}
