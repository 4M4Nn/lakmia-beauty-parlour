"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import { gsap } from "@/lib/gsap";

export default function RevealGroup({
  children,
  className,
  y = 32,
  stagger = 0.12,
  start = "top 85%",
}: {
  children: ReactNode;
  className?: string;
  y?: number;
  stagger?: number;
  start?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const items = gsap.utils.toArray<HTMLElement>(el.children);
    if (!items.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        items,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger,
          scrollTrigger: {
            trigger: el,
            start,
            toggleActions: "play none none none",
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [y, stagger, start]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
