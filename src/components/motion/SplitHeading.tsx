"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import { gsap, SplitText } from "@/lib/gsap";

export default function SplitHeading({
  as = "h2",
  children,
  className,
  start = "top 85%",
}: {
  as?: "h1" | "h2" | "h3";
  children: ReactNode;
  className?: string;
  start?: string;
}) {
  const ref = useRef<HTMLHeadingElement>(null);
  const HeadingTag = as;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const split = SplitText.create(el, { type: "words", wordsClass: "split-word" });

      gsap.fromTo(
        split.words,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.04,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start,
            toggleActions: "play none none none",
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [start]);

  return (
    <HeadingTag ref={ref} className={className}>
      {children}
    </HeadingTag>
  );
}
