"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Sparkles, Star } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import TiltCard from "@/components/ui/TiltCard";
import { cn } from "@/lib/utils";
import { stats } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero-glow pb-16 pt-14 sm:pb-24 sm:pt-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary shadow-sm">
            <Sparkles className="size-3.5" />
            Thrikaripur&apos;s Premier Beauty Destination
          </span>

          <h1 className="mt-6 font-serif-display text-4xl font-bold leading-[1.1] text-foreground sm:text-5xl lg:text-6xl">
            Every Bride, Every Story,{" "}
            <span className="text-gradient-pink">Beautifully Told</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Lakmia Beauty Parlour turns Trikaripur&apos;s biggest moments —
            weddings, festivals, first days, quiet Tuesdays — into stories
            worth remembering. Certified bridal artistry, hair, facial and
            nail care, crafted with precision and genuine warmth.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ size: "lg" }),
                "rounded-full bg-primary px-8 text-base hover:bg-primary/90"
              )}
            >
              Book Your Appointment
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/services"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "rounded-full border-primary/30 px-8 text-base text-primary hover:bg-secondary"
              )}
            >
              Explore Services
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-serif-display text-2xl font-bold text-primary sm:text-3xl">
                  {s.value.toLocaleString("en-IN")}
                  {s.suffix}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <TiltCard className="aspect-[4/5] w-full">
            <div className="relative h-full w-full overflow-hidden rounded-[2rem] shadow-2xl shadow-primary/20 ring-1 ring-white/60">
              <Image
                src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=1000&auto=format&fit=crop"
                alt="Lakmia bridal artistry in Thrikaripur"
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 480px, 90vw"
              />
            </div>
          </TiltCard>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="animate-float absolute -bottom-6 -left-6 flex items-center gap-3 rounded-2xl border border-border bg-white/95 p-4 shadow-xl backdrop-blur sm:-left-10"
          >
            <div className="flex -space-x-2">
              {[
                "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=100&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=100&auto=format&fit=crop",
              ].map((src) => (
                <div
                  key={src}
                  className="relative size-9 overflow-hidden rounded-full ring-2 ring-white"
                >
                  <Image src={src} alt="Happy client" fill className="object-cover" sizes="36px" />
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-0.5 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-3.5 fill-current" />
                ))}
              </div>
              <p className="text-xs font-medium text-foreground">
                Loved by Our Clients
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="animate-float absolute -right-4 -top-6 rounded-2xl border border-border bg-white/95 px-5 py-3 shadow-xl backdrop-blur sm:-right-8"
            style={{ animationDelay: "1.5s" }}
          >
            <p className="font-serif-display text-xl font-bold text-primary">30+</p>
            <p className="text-[11px] text-muted-foreground">Beauty & Bridal Services</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
