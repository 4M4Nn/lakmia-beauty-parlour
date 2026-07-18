import { Heart, Sparkles, Leaf, Award } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import RevealGroup from "@/components/motion/RevealGroup";

const values = [
  {
    icon: Heart,
    title: "Listen First",
    description:
      "Every consultation starts with understanding your story, not our service menu.",
  },
  {
    icon: Sparkles,
    title: "Technique Over Trend",
    description:
      "We train continuously in global techniques, then adapt them thoughtfully for you.",
  },
  {
    icon: Leaf,
    title: "Rooted in Kerala",
    description:
      "Ayurvedic wisdom and local understanding, blended with international artistry.",
  },
  {
    icon: Award,
    title: "Earned Trust",
    description:
      "12 years, thousands of transformations, and a reputation built visit by visit.",
  },
];

export default function ValuesGrid() {
  return (
    <section className="bg-secondary/30 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="What Guides Us"
          title="The Values Behind Every Appointment"
        />

        <RevealGroup className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm"
            >
              <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-secondary text-primary">
                <v.icon className="size-6" />
              </div>
              <h3 className="mt-4 font-serif-display text-lg font-semibold text-foreground">
                {v.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {v.description}
              </p>
            </div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
