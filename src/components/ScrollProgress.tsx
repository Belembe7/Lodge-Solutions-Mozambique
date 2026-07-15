"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** Barra fina de progresso de scroll no topo — detalhe premium discreto. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-solar-gold"
      style={{ scaleX }}
    />
  );
}
