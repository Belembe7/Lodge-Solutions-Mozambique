"use client";

import { useRef } from "react";
import {
  useScroll,
  useTransform,
  type MotionValue,
  type UseScrollOptions,
} from "framer-motion";
import { viewportOnce } from "@/lib/motion-variants";

type UseScrollRevealOptions = {
  offset?: UseScrollOptions["offset"];
};

/**
 * Hook partilhado para reveals e parallax subtil ligados ao scroll.
 */
export function useScrollReveal(options: UseScrollRevealOptions = {}) {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: options.offset ?? ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [28, -28]);
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 1]);
  const imageY = useTransform(scrollYProgress, [0, 1], [-36, 36]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  return {
    ref,
    scrollYProgress,
    y,
    opacity,
    imageY,
    imageScale,
    viewport: viewportOnce,
  };
}

export type ParallaxValues = {
  y: MotionValue<number>;
  scale: MotionValue<number>;
};

/** Parallax subtil para imagens dentro de uma secção */
export function useImageParallax() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  return { ref, y, scale, scrollYProgress };
}
