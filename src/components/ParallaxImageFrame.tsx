"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { imageWipe, viewportOnce } from "@/lib/motion-variants";

type ParallaxImageProps = {
  children: React.ReactNode;
  className?: string;
  /** Ativa wipe de entrada (clip-path) */
  wipe?: boolean;
};

/**
 * Contentor de imagem com reveal em máscara e parallax/zoom subtil.
 * Preferir transformar só os wrappers internos (transform/opacity).
 */
export function ParallaxImageFrame({
  children,
  className,
  wipe = true,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-36, 36]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      <motion.div
        className="absolute inset-0 will-change-transform"
        style={{ y, scale }}
      >
        {wipe ? (
          <motion.div
            className="absolute inset-[-8%] size-[116%]"
            variants={imageWipe}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {children}
          </motion.div>
        ) : (
          <div className="absolute inset-[-8%] size-[116%]">{children}</div>
        )}
      </motion.div>
    </div>
  );
}
