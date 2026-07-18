import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/shared/PageHero";
import StoryTimeline from "@/components/home/StoryTimeline";
import TeamGrid from "@/components/about/TeamGrid";
import ValuesGrid from "@/components/about/ValuesGrid";
import ShopVideoSection from "@/components/shared/ShopVideoSection";
import CtaBanner from "@/components/home/CtaBanner";
import Reveal from "@/components/motion/Reveal";
import RevealGroup from "@/components/motion/RevealGroup";
import Parallax from "@/components/motion/Parallax";
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
        image="/media/inauguration/lakmia-lamp-lighting.jpeg"
      />

      <section className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1.2fr]">
          <Reveal direction="left">
            <Parallax
              className="relative aspect-[4/5] w-full rounded-[2rem] shadow-xl"
              speed={0.12}
            >
              <Image
                src="/media/inauguration/lakmia-ribbon-cutting-1.jpeg"
                alt="The ribbon-cutting ceremony at Lakmia Beauty Lounge's inauguration in Trikaripur"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 420px, 90vw"
              />
            </Parallax>
          </Reveal>
          <Reveal direction="right">
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
          </Reveal>
        </div>

        <RevealGroup className="mt-16 grid grid-cols-2 gap-6 rounded-2xl border border-border bg-secondary/30 p-8 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-serif-display text-2xl font-bold text-primary sm:text-3xl">
                {s.value.toLocaleString("en-IN")}
                {s.suffix}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </RevealGroup>

        <div className="mt-16">
          <h3 className="text-center font-serif-display text-2xl font-bold text-foreground">
            Opening Day at Lakmia Beauty Lounge
          </h3>
          <RevealGroup
            stagger={0.08}
            className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4"
          >
            {[
              {
                src: "/media/inauguration/lakmia-family-portrait.jpeg",
                alt: "The Korambath family inside Lakmia Beauty Lounge on opening day",
              },
              {
                src: "/media/inauguration/lakmia-family-group.jpeg",
                alt: "Family and guests celebrating the launch of Lakmia Beauty Lounge",
              },
              {
                src: "/media/inauguration/lakmia-team-portrait.jpeg",
                alt: "Portrait inside the newly opened Lakmia Beauty Lounge studio",
              },
              {
                src: "/media/inauguration/lakmia-inauguration-guests.jpeg",
                alt: "Guests at the Lakmia Beauty Lounge inauguration ceremony",
              },
            ].map((photo) => (
              <div
                key={photo.src}
                className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-md"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 640px) 25vw, 45vw"
                />
              </div>
            ))}
          </RevealGroup>
        </div>
      </section>

      <ShopVideoSection />
      <StoryTimeline />
      <ValuesGrid />
      <TeamGrid />
      <CtaBanner />
    </>
  );
}
