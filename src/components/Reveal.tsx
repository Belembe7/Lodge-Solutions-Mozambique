"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { premiumEase, viewportOnce } from "@/lib/motion-variants";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

/** Scroll reveal genérico premium: subida curta + fade, once only. */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
}: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.85, ease: premiumEase, delay }}
      className={cn("will-change-transform", className)}
    >
      {children}
    </motion.div>
  );
}
