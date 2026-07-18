"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import { gsap } from "@/lib/gsap";
import { cn } from "@/lib/utils";

export default function Parallax({
  children,
  className,
  speed = 0.15,
}: {
  children: ReactNode;
  className?: string;
  speed?: number;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const inner = innerRef.current;
    if (!wrap || !inner) return;

    const distance = wrap.offsetHeight * speed;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        inner,
        { y: -distance },
        {
          y: distance,
          ease: "none",
          scrollTrigger: {
            trigger: wrap,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, wrap);

    return () => ctx.revert();
  }, [speed]);

  return (
    <div ref={wrapRef} className={cn("overflow-hidden", className)}>
      <div ref={innerRef} className="absolute inset-x-0 -top-[15%] h-[130%]">
        {children}
      </div>
    </div>
  );
}
