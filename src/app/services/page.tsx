import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import ServicesTabs from "@/components/services/ServicesTabs";
import CtaBanner from "@/components/home/CtaBanner";
import { serviceCategories } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Services — Bridal, Hair, Skin & Spa",
  description:
    "Explore Lakmia Beauty Parlour's full service menu in Thrikaripur, Kannur — bridal makeovers, haircuts, colour, keratin, facials, spa rituals, grooming and nail art.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title="Services Crafted Around Your Story"
        description="Every treatment at Lakmia is delivered with editorial precision — because your story deserves more than a routine appointment."
        image="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1600&auto=format&fit=crop"
      />

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <ServicesTabs groups={serviceCategories} />
      </section>

      <CtaBanner />
    </>
  );
}
