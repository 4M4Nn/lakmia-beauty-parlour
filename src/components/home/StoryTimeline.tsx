import SectionHeading from "@/components/shared/SectionHeading";
import Reveal from "@/components/motion/Reveal";
import { milestones } from "@/lib/data";

export default function StoryTimeline() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-28">
      <SectionHeading
        eyebrow="12 Years in the Making"
        title="The Lakmia Journey"
        description="A timeline of trust, built one transformation at a time."
      />

      <div className="relative mt-14">
        <div className="absolute left-4 top-0 h-full w-px bg-border sm:left-1/2" />
        <ol className="space-y-12">
          {milestones.map((m, i) => (
            <li
              key={m.year}
              className="relative grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-10"
            >
              <Reveal
                direction={i % 2 === 0 ? "left" : "right"}
                distance={32}
                className={
                  i % 2 === 0
                    ? "sm:order-1 sm:pr-10 sm:text-right"
                    : "sm:order-2 sm:pl-10"
                }
              >
                <span className="font-serif-display text-2xl font-bold text-primary">
                  {m.year}
                </span>
                <h3 className="mt-1 font-serif-display text-lg font-semibold text-foreground">
                  {m.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {m.description}
                </p>
              </Reveal>
              <div className={i % 2 === 0 ? "sm:order-2" : "sm:order-1"} />
              <span className="absolute left-4 top-1.5 size-3 -translate-x-1/2 rounded-full border-2 border-primary bg-white sm:left-1/2" />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
