import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/shared/PageHero";
import StoryTimeline from "@/components/home/StoryTimeline";
import TeamGrid from "@/components/about/TeamGrid";
import ValuesGrid from "@/components/about/ValuesGrid";
import CtaBanner from "@/components/home/CtaBanner";
import { stats, siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Story — Certified Bridal Artistry in Trikaripur",
  description:
    "Meet Jisha Korambath, certified makeup artist and hairstylist, and discover the story, values and services behind Lakmia Beauty Parlour, Trikaripur.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="A Homegrown Studio, Built on Certified Craft"
        description="Lakmia Beauty Lounge was founded in Trikaripur to bring genuinely certified, professional beauty expertise to the local community — without anyone needing to travel elsewhere for it."
        image="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=1600&auto=format&fit=crop"
      />

      <section className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=900&auto=format&fit=crop"
              alt={`${siteConfig.founderName}, Founder of Lakmia Beauty Parlour`}
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
              &ldquo;Certification matters — clients deserve to know their
              artist actually knows the craft.&rdquo;
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              I&apos;m Jisha Korambath, a certified makeup artist and
              hairstylist, and I started Lakmia Beauty Lounge right here in
              Trikaripur with one conviction: the brides, families and
              everyday clients of this town deserved genuinely certified,
              professional beauty expertise close to home.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              What began with the essentials — haircuts and hair spa — has
              grown into a full menu covering bridal makeup, protein
              treatments, facials, waxing and nail care. But the belief
              hasn&apos;t changed — every client who walks through our door
              is carrying a story, and my job is to listen before I lift a
              single brush or comb.
            </p>
            <p className="mt-6 font-serif-display text-lg font-semibold text-primary">
              — {siteConfig.founderName}, {siteConfig.founderTitle}
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
