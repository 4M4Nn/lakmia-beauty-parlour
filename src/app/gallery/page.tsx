import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import CtaBanner from "@/components/home/CtaBanner";
import { galleryItems } from "@/lib/data";

export const metadata: Metadata = {
  title: "Gallery — Bridal, Hair & Spa Portfolio",
  description:
    "Browse real transformations from Lakmia Beauty Parlour, Thrikaripur — bridal makeovers, hair styling, facials, spa rituals and our Kannur studio.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Portfolio"
        title="Every Frame Tells a Story"
        description="A curated look into the transformations, moments and craft that define Lakmia Beauty Parlour."
        image="https://images.unsplash.com/photo-1610992015732-2449b76344bc?q=80&w=1600&auto=format&fit=crop"
      />

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <GalleryGrid items={galleryItems} />
      </section>

      <CtaBanner />
    </>
  );
}
