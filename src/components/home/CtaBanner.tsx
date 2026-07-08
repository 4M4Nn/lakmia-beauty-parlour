import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function CtaBanner() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-primary via-[#e2497d] to-accent px-6 py-16 text-center shadow-2xl sm:px-16">
        <div className="pointer-events-none absolute -left-16 -top-16 size-56 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -right-10 size-72 rounded-full bg-white/10 blur-3xl" />

        <h2 className="relative font-serif-display text-3xl font-bold text-white sm:text-4xl">
          Your Story Deserves a Beautiful Chapter
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/85 sm:text-base">
          Whether it&apos;s a wedding, a festival, or a day just for
          yourself — book your appointment at Lakmia Beauty Parlour,
          Thrikaripur, and let us help write it.
        </p>
        <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ size: "lg" }),
              "rounded-full bg-white px-8 text-primary hover:bg-white/90"
            )}
          >
            Book Your Appointment
            <ArrowRight className="size-4" />
          </Link>
          <a
            href={`tel:${siteConfig.phoneHref}`}
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "rounded-full border-white/50 bg-transparent px-8 text-white hover:bg-white/10"
            )}
          >
            <Phone className="size-4" />
            {siteConfig.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
