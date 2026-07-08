import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import SectionHeading from "@/components/shared/SectionHeading";
import ServiceCard from "@/components/shared/ServiceCard";
import { services } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function ServicesShowcase() {
  const featured = services.filter((s) => s.popular);

  return (
    <section className="bg-secondary/30 py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Signature Services"
          title="Services Told Through Craft, Not Just Categories"
          description="From bridal transformations to everyday self-care, every service at Lakmia is delivered with editorial-level precision and genuine Kerala warmth."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/services"
            className={cn(
              buttonVariants({ size: "lg" }),
              "rounded-full bg-primary px-8 hover:bg-primary/90"
            )}
          >
            View All Services
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
