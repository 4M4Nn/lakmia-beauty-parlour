import Image from "next/image";
import Parallax from "@/components/motion/Parallax";
import Reveal from "@/components/motion/Reveal";
import SplitHeading from "@/components/motion/SplitHeading";

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  image: string;
}) {
  return (
    <section className="relative flex min-h-[48vh] items-end overflow-hidden sm:min-h-[56vh]">
      <Parallax className="absolute inset-0" speed={0.2}>
        <Image
          src={image}
          alt={title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </Parallax>
      <div className="absolute inset-0 bg-gradient-to-t from-[#2b1420]/85 via-[#2b1420]/40 to-[#2b1420]/20" />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-14 pt-24 sm:px-8 sm:pb-20">
        <Reveal direction="up" distance={16} duration={0.6}>
          <span className="glass-dark inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
            {eyebrow}
          </span>
        </Reveal>
        <SplitHeading
          as="h1"
          className="text-display mt-5 max-w-3xl font-serif-display text-5xl font-bold text-white sm:text-6xl lg:text-7xl"
        >
          {title}
        </SplitHeading>
        {description && (
          <Reveal direction="up" distance={20} delay={0.15}>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/85 sm:text-base">
              {description}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
