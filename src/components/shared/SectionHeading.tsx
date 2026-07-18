import { cn } from "@/lib/utils";
import Reveal from "@/components/motion/Reveal";
import SplitHeading from "@/components/motion/SplitHeading";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      <Reveal direction="up" distance={16} duration={0.6}>
        <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
          {eyebrow}
        </span>
      </Reveal>
      <SplitHeading
        as="h2"
        className="text-display mt-5 font-serif-display text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl"
      >
        {title}
      </SplitHeading>
      {description && (
        <Reveal direction="up" distance={20} delay={0.15}>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
