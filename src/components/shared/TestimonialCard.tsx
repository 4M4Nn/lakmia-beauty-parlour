import Image from "next/image";
import { Quote, Star } from "lucide-react";
import type { Testimonial } from "@/types";

export default function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm">
      <Quote className="size-8 text-primary/20" />
      <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/90">
        &ldquo;{item.quote}&rdquo;
      </p>
      <div className="mt-5 flex items-center gap-1 text-accent">
        {Array.from({ length: item.rating }).map((_, i) => (
          <Star key={i} className="size-3.5 fill-current" />
        ))}
      </div>
      <div className="mt-4 flex items-center gap-3 border-t border-border pt-4">
        <div className="relative size-11 shrink-0 overflow-hidden rounded-full">
          <Image src={item.image} alt={item.name} fill className="object-cover" sizes="44px" />
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">{item.name}</p>
          <p className="text-xs text-muted-foreground">
            {item.location} &middot; {item.service}
          </p>
        </div>
      </div>
    </div>
  );
}
