import Image from "next/image";
import SectionHeading from "@/components/shared/SectionHeading";
import RevealGroup from "@/components/motion/RevealGroup";
import { teamMembers } from "@/lib/data";

export default function TeamGrid() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
      <SectionHeading
        eyebrow="Meet the Artists"
        title="The Hands Behind Every Transformation"
        description="A team of trained colourists, bridal artists, therapists and groomers united by one philosophy — technique first, story always."
      />

      <RevealGroup className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {teamMembers.map((member) => (
          <div key={member.name} className="text-center">
            <div className="relative mx-auto aspect-square w-full max-w-[220px] overflow-hidden rounded-2xl shadow-md">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
                sizes="220px"
              />
            </div>
            <h3 className="mt-4 font-serif-display text-lg font-semibold text-foreground">
              {member.name}
            </h3>
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">
              {member.role}
            </p>
            <p className="mt-2 text-xs font-medium text-accent">
              {member.specialty}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {member.bio}
            </p>
          </div>
        ))}
      </RevealGroup>
    </section>
  );
}
