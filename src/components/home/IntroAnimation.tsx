"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";

const INTRO_KEY = "lakmia-intro-seen";

const reels = [
  {
    src: "/media/inauguration/lakmia-ribbon-cutting-1.jpeg",
    alt: "Lakmia Beauty Lounge inauguration ribbon-cutting",
  },
  {
    src: "/media/inauguration/lakmia-lamp-lighting.jpeg",
    alt: "Traditional lamp-lighting ceremony at Lakmia Beauty Lounge",
  },
  {
    src: "/media/inauguration/lakmia-salon-interior.jpeg",
    alt: "Inside the Lakmia Beauty Lounge studio",
  },
];

type Status = "pending" | "visible" | "hidden";

export default function IntroAnimation() {
  const [status, setStatus] = useState<Status>("pending");
  const [frame, setFrame] = useState(0);
  const visible = status === "visible";
  const checked = status !== "pending";

  useEffect(() => {
    queueMicrotask(() => {
      const seen = sessionStorage.getItem(INTRO_KEY);
      setStatus(seen ? "hidden" : "visible");
    });
  }, []);

  useEffect(() => {
    if (!visible) return;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [visible]);

  useEffect(() => {
    if (!visible) return;
    const frameTimer = setInterval(() => {
      setFrame((f) => (f + 1) % reels.length);
    }, 1100);
    const closeTimer = setTimeout(() => finish(), 5000);
    return () => {
      clearInterval(frameTimer);
      clearTimeout(closeTimer);
    };
  }, [visible]);

  function finish() {
    sessionStorage.setItem(INTRO_KEY, "1");
    setStatus("hidden");
  }

  if (!checked) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#2b1420]"
          initial={{ opacity: 1 }}
          exit={{
            clipPath: "inset(0 0 100% 0)",
            transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          <div className="absolute inset-0">
            {reels.map((r, i) => (
              <motion.div
                key={r.src}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.15 }}
                animate={{
                  opacity: frame === i ? 1 : 0,
                  scale: frame === i ? 1 : 1.15,
                }}
                transition={{ duration: 1.1, ease: "easeInOut" }}
              >
                <Image
                  src={r.src}
                  alt={r.alt}
                  fill
                  priority={i === 0}
                  className="object-cover"
                  sizes="100vw"
                />
              </motion.div>
            ))}
            <div className="absolute inset-0 bg-gradient-to-b from-[#2b1420]/80 via-[#2b1420]/60 to-[#2b1420]/90" />
          </div>

          <div className="relative z-10 flex flex-col items-center px-6 text-center">
            <motion.span
              initial={{ opacity: 0, letterSpacing: "0.6em" }}
              animate={{ opacity: 1, letterSpacing: "0.35em" }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="text-xs font-medium uppercase text-accent"
            >
              Trikaripur &middot; Kasaragod
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="mt-3 font-serif-display text-6xl font-bold text-white sm:text-8xl"
            >
              Lakmia
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="mt-4 max-w-md text-sm font-light tracking-wide text-white/80 sm:text-base"
            >
              Where Every Story Becomes Beautiful
            </motion.p>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, delay: 2 }}
              className="mt-6 h-px w-32 bg-gradient-to-r from-transparent via-accent to-transparent"
            />
          </div>

          <motion.button
            type="button"
            onClick={finish}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-8 right-8 z-20 rounded-full border border-white/30 px-4 py-2 text-xs font-medium text-white/80 backdrop-blur-sm transition-colors hover:bg-white/10"
          >
            Skip Intro
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
