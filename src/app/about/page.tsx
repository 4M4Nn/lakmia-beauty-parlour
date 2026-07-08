import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/shared/PageHero";
import StoryTimeline from "@/components/home/StoryTimeline";
import TeamGrid from "@/components/about/TeamGrid";
import ValuesGrid from "@/components/about/ValuesGrid";
import CtaBanner from "@/components/home/CtaBanner";
import { stats } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Story — 12 Years of Bridal Artistry in Thrikaripur",
  description:
    "From a two-chair studio in 2013 to Kannur's most trusted bridal beauty destination — discover the story, values and team behind Lakmia Beauty Parlour.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="A Homegrown Dream, Told Through Every Client"
        description="Founded in 2013 in Thrikaripur, Kannur, Lakmia set out to prove that world-class bridal artistry didn't need to be found in a metro city — it could be built right here."
        image="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=1600&auto=format&fit=crop"
      />

      <section className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=900&auto=format&fit=crop"
              alt="Lakshmi Menon, Founder of Lakmia Beauty Parlour"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 420px, 90vw"
            />
          </div>
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              A Note From Our Founder
            </span>
            <h2 className="mt-4 font-serif-display text-2xl font-bold text-foreground sm:text-3xl">
              &ldquo;I didn&apos;t want my hometown to be an afterthought.&rdquo;
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              After years of training under celebrity stylists in Bangalore
              and Dubai, I came home to Thrikaripur with one conviction:
              the brides, families and everyday clients of Kannur deserved
              the same calibre of artistry I&apos;d seen practiced anywhere
              else in the world — without having to travel for it.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              What began as a two-chair studio in 2013 has grown into a
              20-member team and a full bridal, hair, skin and spa studio.
              But the belief hasn&apos;t changed — every client who walks
              through our door is carrying a story, and our job is to
              listen before we lift a single brush or scissor.
            </p>
            <p className="mt-6 font-serif-display text-lg font-semibold text-primary">
              — Lakshmi Menon, Founder & Creative Director
            </p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 rounded-2xl border border-border bg-secondary/30 p-8 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-serif-display text-2xl font-bold text-primary sm:text-3xl">
                {s.value.toLocaleString("en-IN")}
                {s.suffix}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <StoryTimeline />
      <ValuesGrid />
      <TeamGrid />
      <CtaBanner />
    </>
  );
}
