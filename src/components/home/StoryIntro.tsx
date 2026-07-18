import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Heart } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import Reveal from "@/components/motion/Reveal";
import Parallax from "@/components/motion/Parallax";
import SplitHeading from "@/components/motion/SplitHeading";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/data";

export default function StoryIntro() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <Reveal direction="left" className="relative order-2 lg:order-1">
          <Parallax
            className="relative aspect-[5/4] w-full rounded-[2rem] shadow-xl"
            speed={0.12}
          >
            <Image
              src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=1000&auto=format&fit=crop"
              alt="Inside Lakmia Beauty Lounge studio in Trikaripur"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 560px, 90vw"
            />
          </Parallax>
          <div className="glass-card absolute -bottom-8 -right-6 max-w-[220px] rounded-2xl p-5 sm:-right-10">
            <Heart className="size-6 text-primary" />
            <p className="mt-2 font-serif-display text-sm font-semibold text-foreground">
              &ldquo;Every client walks in carrying a story.&rdquo;
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              — {siteConfig.founderName}, Founder
            </p>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal direction="right" distance={16} duration={0.6}>
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              Our Story
            </span>
          </Reveal>
          <SplitHeading
            as="h2"
            className="text-display mt-5 font-serif-display text-4xl font-bold text-foreground sm:text-5xl"
          >
            A Certified Studio, Built for Trikaripur
          </SplitHeading>
          <Reveal direction="right" distance={24} delay={0.15}>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Lakmia Beauty Lounge was founded by {siteConfig.founderName}, a
              certified makeup artist and hairstylist, with a simple belief —
              that world-class bridal and beauty artistry shouldn&apos;t
              require leaving home to access.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Today, the studio carries that same promise forward — for every
              bride, every groom, and every ordinary Tuesday that deserves to
              feel extraordinary.
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
          </Reveal>
        </div>
      </div>
    </section>
  );
}
