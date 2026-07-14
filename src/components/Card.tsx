"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
};

/** Cartão com elevação suave no hover (Framer Motion). */
export function Card({ children, className, hover = true }: CardProps) {
  return (
    <motion.div
      whileHover={
        hover
          ? { y: -6, scale: 1.02, boxShadow: "0 20px 40px rgba(111, 78, 45, 0.12)" }
          : undefined
      }
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      className={cn(
        "rounded-3xl border border-brown-primary/10 bg-white p-6 shadow-sm transition-colors duration-300 hover:border-brown-primary/30",
        className,
      )}
    >
      {children}
    </motion.div>
  );
}
