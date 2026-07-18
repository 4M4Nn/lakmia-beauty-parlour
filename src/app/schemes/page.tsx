import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import PageHero from "@/components/shared/PageHero";
import CtaBanner from "@/components/home/CtaBanner";
import RevealGroup from "@/components/motion/RevealGroup";
import { schemes } from "@/lib/data";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Schemes & Bundle Packages",
  description:
    "Explore Lakmia Beauty Parlour's bridal bundles, groom-ready packages and glow starter offers — designed around every kind of story.",
  alternates: { canonical: "/schemes" },
};

export default function SchemesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "Lakmia Beauty Parlour Bundle Packages",
    itemListElement: schemes.map((scheme) => ({
      "@type": "Offer",
      name: scheme.name,
      description: scheme.description,
      price: scheme.price,
      priceCurrency: "INR",
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHero
        eyebrow="Schemes & Bundles"
        title="A Package for Every Chapter"
        description="From a single glow-up to your full wedding-day bundle, choose the package that matches your story."
        image="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=1600&auto=format&fit=crop"
      />

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <RevealGroup className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {schemes.map((scheme) => (
            <div
              key={scheme.slug}
              id={scheme.slug}
              className={cn(
                "relative flex flex-col rounded-2xl border p-8 shadow-sm",
                scheme.highlight
                  ? "border-primary bg-white shadow-xl shadow-primary/15"
                  : "border-border bg-card"
              )}
            >
              {scheme.badge && (
                <Badge className="absolute -top-3 left-8 bg-primary text-primary-foreground hover:bg-primary">
                  {scheme.badge}
                </Badge>
              )}
              <h2 className="font-serif-display text-2xl font-semibold text-foreground">
                {scheme.name}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                {scheme.description}
              </p>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="font-serif-display text-4xl font-bold text-primary">
                  &#8377;{scheme.price.toLocaleString("en-IN")}
                </span>
                {scheme.originalPrice && (
                  <span className="text-base text-muted-foreground line-through">
                    &#8377;{scheme.originalPrice.toLocaleString("en-IN")}
                  </span>
                )}
              </div>
              <p className="text-xs text-muted-foreground">{scheme.billingNote}</p>

              <ul className="mt-6 flex-1 space-y-3">
                {scheme.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-foreground/90">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "mt-8 w-full rounded-full",
                  scheme.highlight
                    ? "bg-primary hover:bg-primary/90"
                    : "bg-secondary text-primary hover:bg-secondary/80"
                )}
              >
                Enquire About This Plan
              </Link>
            </div>
          ))}
        </RevealGroup>
      </section>

      <CtaBanner />
    </>
  );
}
