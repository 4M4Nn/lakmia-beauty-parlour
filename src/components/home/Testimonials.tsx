import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import SectionHeading from "@/components/shared/SectionHeading";
import TestimonialCard from "@/components/shared/TestimonialCard";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="bg-secondary/30 py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Client Stories"
          title="Real Stories, Real Transformations"
          description="Nothing tells our story better than the people who've trusted us with theirs."
        />

        <Carousel
          opts={{ align: "start", loop: true }}
          className="mt-12 w-full"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((t) => (
              <CarouselItem
                key={t.name}
                className="pl-4 sm:basis-1/2 lg:basis-1/3"
              >
                <TestimonialCard item={t} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-8 flex justify-center gap-3">
            <CarouselPrevious className="static translate-y-0 border-primary/30 text-primary hover:bg-secondary" />
            <CarouselNext className="static translate-y-0 border-primary/30 text-primary hover:bg-secondary" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
