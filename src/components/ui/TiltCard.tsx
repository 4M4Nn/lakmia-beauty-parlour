"use client";

import { useRef } from "react";
import type { ReactNode, PointerEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { cn } from "@/lib/utils";

export default function TiltCard({
  children,
  className,
  intensity = 12,
}: {
  children: ReactNode;
  className?: string;
  intensity?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const springX = useSpring(x, { stiffness: 150, damping: 18 });
  const springY = useSpring(y, { stiffness: 150, damping: 18 });

  const rotateX = useTransform(springY, [0, 1], [intensity, -intensity]);
  const rotateY = useTransform(springX, [0, 1], [-intensity, intensity]);
  const shineX = useTransform(springX, [0, 1], ["0%", "100%"]);
  const shineY = useTransform(springY, [0, 1], ["0%", "100%"]);
  const shineBackground = useTransform(
    [shineX, shineY],
    (latest) =>
      `radial-gradient(circle at ${latest[0]} ${latest[1]}, rgba(255,255,255,0.35), transparent 55%)`
  );

  function handlePointerMove(e: PointerEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  }

  function handlePointerLeave() {
    x.set(0.5);
    y.set(0.5);
  }

  return (
    <div className={cn("perspective-1200", className)}>
      <motion.div
        ref={ref}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        style={{ rotateX, rotateY }}
        className="preserve-3d relative h-full w-full"
      >
        {children}
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 hover:opacity-100"
          style={{ background: shineBackground }}
        />
      </motion.div>
    </div>
  );
}
