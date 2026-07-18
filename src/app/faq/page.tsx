import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import FaqAccordionList from "@/components/shared/FaqAccordionList";
import CtaBanner from "@/components/home/CtaBanner";
import Reveal from "@/components/motion/Reveal";
import { faqs } from "@/lib/data";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about bridal bookings, treatments and policies at Lakmia Beauty Parlour, Trikaripur, Kasaragod.",
  alternates: { canonical: "/faq" },
};

const categories = ["General", "Bridal", "Hair & Skin", "Booking"] as const;

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHero
        eyebrow="Need Help?"
        title="Frequently Asked Questions"
        description="Everything clients most often ask us before their first — or fiftieth — visit."
        image="https://images.unsplash.com/photo-1519415943484-9fa1873496d4?q=80&w=1600&auto=format&fit=crop"
      />

      <section className="mx-auto max-w-4xl px-5 py-20 sm:px-8">
        {categories.map((category) => {
          const items = faqs.filter((f) => f.category === category);
          if (items.length === 0) return null;
          return (
            <Reveal key={category} direction="up" distance={24} className="mb-12 last:mb-0">
              <h2 className="font-serif-display text-xl font-semibold text-primary">
                {category}
              </h2>
              <div className="mt-4">
                <FaqAccordionList items={items} />
              </div>
            </Reveal>
          );
        })}
      </section>

      <CtaBanner />
    </>
  );
}
