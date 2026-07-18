"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import { gsap } from "@/lib/gsap";

type Direction = "up" | "down" | "left" | "right" | "none";

export default function Reveal({
  children,
  className,
  direction = "up",
  distance = 40,
  duration = 0.9,
  delay = 0,
  start = "top 85%",
  scale,
}: {
  children: ReactNode;
  className?: string;
  direction?: Direction;
  distance?: number;
  duration?: number;
  delay?: number;
  start?: string;
  scale?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const from: gsap.TweenVars = { opacity: 0 };
    if (direction === "up") from.y = distance;
    if (direction === "down") from.y = -distance;
    if (direction === "left") from.x = distance;
    if (direction === "right") from.x = -distance;
    if (scale) from.scale = scale;

    const ctx = gsap.context(() => {
      gsap.fromTo(el, from, {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        duration,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start,
          toggleActions: "play none none none",
        },
      });
    }, el);

    return () => ctx.revert();
  }, [direction, distance, duration, delay, start, scale]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
