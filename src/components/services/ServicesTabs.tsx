"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ServiceCard from "@/components/shared/ServiceCard";
import type { ServiceCategoryGroup } from "@/types";

export default function ServicesTabs({
  groups,
}: {
  groups: ServiceCategoryGroup[];
}) {
  return (
    <Tabs defaultValue={groups[0].category} className="w-full">
      <TabsList className="mx-auto flex h-auto w-full max-w-3xl flex-wrap justify-center gap-2 bg-transparent p-0">
        {groups.map((g) => (
          <TabsTrigger
            key={g.category}
            value={g.category}
            className="rounded-full border border-border bg-white px-5 py-2 text-sm data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            {g.category}
          </TabsTrigger>
        ))}
      </TabsList>

      {groups.map((g) => (
        <TabsContent key={g.category} value={g.category} className="mt-10">
          <p className="mx-auto max-w-xl text-center text-sm text-muted-foreground">
            {g.tagline}
          </p>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {g.services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
