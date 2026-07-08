import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SectionHeading from "@/components/shared/SectionHeading";
import { schemes } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function SchemesPreview() {
  const preview = schemes.slice(0, 3);

  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
      <SectionHeading
        eyebrow="Schemes & Bundles"
        title="Packages Designed Around Your Story"
        description="Whether it's a quick glow-up or your full wedding-day bundle, we have a package that fits."
      />

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {preview.map((scheme) => (
          <div
            key={scheme.slug}
            className={cn(
              "relative flex flex-col rounded-2xl border p-7 shadow-sm",
              scheme.highlight
                ? "border-primary bg-white shadow-xl shadow-primary/15 md:-translate-y-3"
                : "border-border bg-card"
            )}
          >
            {scheme.badge && (
              <Badge className="absolute -top-3 left-6 bg-primary text-primary-foreground hover:bg-primary">
                {scheme.badge}
              </Badge>
            )}
            <h3 className="font-serif-display text-xl font-semibold text-foreground">
              {scheme.name}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {scheme.description}
            </p>
            <div className="mt-5 flex items-baseline gap-2">
              <span className="font-serif-display text-3xl font-bold text-primary">
                &#8377;{scheme.price.toLocaleString("en-IN")}
              </span>
              {scheme.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  &#8377;{scheme.originalPrice.toLocaleString("en-IN")}
                </span>
              )}
            </div>
            <p className="text-xs text-muted-foreground">{scheme.billingNote}</p>

            <ul className="mt-5 flex-1 space-y-2.5">
              {scheme.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-foreground/90">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                  {f}
                </li>
              ))}
            </ul>

            <Link
              href="/schemes"
              className={cn(
                buttonVariants(),
                "mt-6 w-full rounded-full",
                scheme.highlight
                  ? "bg-primary hover:bg-primary/90"
                  : "bg-secondary text-primary hover:bg-secondary/80"
              )}
            >
              Learn More
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Link
          href="/schemes"
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "rounded-full border-primary/30 px-8 text-primary hover:bg-secondary"
          )}
        >
          Compare All Plans
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}
