import Image from "next/image";

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
    <section className="relative flex min-h-[42vh] items-end overflow-hidden sm:min-h-[48vh]">
      <Image
        src={image}
        alt={title}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#2b1420]/85 via-[#2b1420]/40 to-[#2b1420]/20" />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-12 pt-24 sm:px-8 sm:pb-16">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
          {eyebrow}
        </span>
        <h1 className="mt-4 max-w-2xl font-serif-display text-4xl font-bold text-white sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/85 sm:text-base">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
