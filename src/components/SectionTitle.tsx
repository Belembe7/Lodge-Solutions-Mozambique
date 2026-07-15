"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  premiumEase,
  titleReveal,
  titleUnderline,
  viewportOnce,
} from "@/lib/motion-variants";

type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  light?: boolean;
};

/** Título de secção premium: blur → foco + traço decorativo. */
export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  light = false,
}: SectionTitleProps) {
  return (
    <motion.div
      variants={titleReveal}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={cn(
        "mb-12 max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "mb-3 text-sm font-medium tracking-wider uppercase",
            light ? "text-solar-gold" : "text-brown-primary",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem]",
          light ? "text-white" : "text-brown-dark",
        )}
      >
        {title}
      </h2>
      <motion.span
        aria-hidden
        variants={titleUnderline}
        className={cn(
          "mt-4 block h-0.5 w-16 origin-left rounded-full",
          align === "center" && "mx-auto",
          light ? "bg-solar-gold/80" : "bg-solar-gold",
        )}
      />
      {description ? (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, ease: premiumEase, delay: 0.16 }}
          className={cn(
            "mt-5 space-y-4 text-base leading-relaxed sm:text-lg",
            light ? "text-white/80" : "text-dark-gray/80",
          )}
        >
          {description.split(/\n\n+/).map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </motion.div>
      ) : null}
    </motion.div>
  );
}
