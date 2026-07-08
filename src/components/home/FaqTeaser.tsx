import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import SectionHeading from "@/components/shared/SectionHeading";
import FaqAccordionList from "@/components/shared/FaqAccordionList";
import { faqs } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function FaqTeaser() {
  const preview = faqs.slice(0, 5);

  return (
    <section className="mx-auto max-w-4xl px-5 py-20 sm:px-8">
      <SectionHeading
        eyebrow="Frequently Asked"
        title="Questions Brides & Clients Ask Us Most"
      />

      <div className="mt-10">
        <FaqAccordionList items={preview} />
      </div>

      <div className="mt-10 flex justify-center">
        <Link
          href="/faq"
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "rounded-full border-primary/30 px-8 text-primary hover:bg-secondary"
          )}
        >
          View All FAQs
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}
