import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function StoryIntro() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="relative order-2 lg:order-1">
          <div className="relative aspect-[5/4] w-full overflow-hidden rounded-[2rem] shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=1000&auto=format&fit=crop"
              alt="Inside Lakmia Beauty Parlour studio in Thrikaripur"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 560px, 90vw"
            />
          </div>
          <div className="absolute -bottom-8 -right-6 max-w-[220px] rounded-2xl border border-border bg-white p-5 shadow-xl sm:-right-10">
            <Heart className="size-6 text-primary" />
            <p className="mt-2 font-serif-display text-sm font-semibold text-foreground">
              &ldquo;Every client walks in carrying a story.&rdquo;
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              — Lakshmi Menon, Founder
            </p>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            Our Story
          </span>
          <h2 className="mt-4 font-serif-display text-3xl font-bold text-foreground sm:text-4xl">
            From a Two-Chair Studio to Kannur&apos;s Bridal Landmark
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            In 2013, Lakmia opened its doors in Thrikaripur with a simple
            belief — that world-class bridal artistry shouldn&apos;t require
            leaving home to access. Founder Lakshmi Menon, trained in
            Bangalore and Dubai, returned to build a studio that could hold
            its own against any metro salon, while never losing its
            understanding of a true Kerala wedding.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Today, a 20-member team of colourists, bridal artists, therapists
            and groomers carries that same promise forward — for every bride,
            every groom, and every ordinary Tuesday that deserves to feel
            extraordinary.
          </p>
          <Link
            href="/about"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "mt-7 rounded-full border-primary/30 text-primary hover:bg-secondary"
            )}
          >
            Read Our Full Story
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
