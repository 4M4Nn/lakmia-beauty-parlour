import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/types";
import { Badge } from "@/components/ui/badge";
import { formatServicePrice } from "@/lib/utils";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services#${service.slug}`}
      id={service.slug}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={service.image}
          alt={service.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(min-width: 1024px) 380px, (min-width: 640px) 45vw, 90vw"
        />
        {service.popular && (
          <Badge className="absolute left-3 top-3 bg-accent text-accent-foreground hover:bg-accent">
            Popular
          </Badge>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <span className="text-xs font-semibold uppercase tracking-wide text-primary">
          {service.category}
        </span>
        <h3 className="mt-1.5 font-serif-display text-lg font-semibold text-foreground">
          {service.name}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {service.shortDescription}
        </p>
        <div className="mt-4 flex items-center justify-end border-t border-border pt-4">
          <div className="flex items-center gap-1 text-sm font-semibold text-primary">
            {formatServicePrice(service)}
            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </Link>
  );
}
