import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import SectionHeading from "@/components/shared/SectionHeading";
import TiltCard from "@/components/ui/TiltCard";
import { galleryItems } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function GalleryPreview() {
  const preview = galleryItems.slice(0, 6);

  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
      <SectionHeading
        eyebrow="Moments We&apos;ve Crafted"
        title="A Glimpse Into Our World"
        description="Every frame is a story — a bride's first glance in the mirror, a fresh cut catching the light, a moment of quiet calm."
      />

      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
        {preview.map((item, i) => (
          <TiltCard
            key={item.image}
            intensity={8}
            className={cn(
              "aspect-square",
              i === 0 && "col-span-2 row-span-2 aspect-auto sm:col-span-1 sm:row-span-2 sm:aspect-[1/2.05]"
            )}
          >
            <div className="relative h-full w-full overflow-hidden rounded-2xl shadow-md">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-500 hover:scale-110"
                sizes="(min-width: 1024px) 380px, 45vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity hover:opacity-100" />
              <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-primary opacity-0 transition-opacity hover:opacity-100">
                {item.category}
              </span>
            </div>
          </TiltCard>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Link
          href="/gallery"
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "rounded-full border-primary/30 px-8 text-primary hover:bg-secondary"
          )}
        >
          View Full Gallery
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}
