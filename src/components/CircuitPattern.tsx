"use client";

import { cn } from "@/lib/utils";

type CircuitPatternProps = {
  className?: string;
};

/**
 * Fundo decorativo SVG com linhas em estilo de circuitos elétricos.
 * Usar com baixa opacidade em secções escuras ou destacadas.
 */
export function CircuitPattern({ className }: CircuitPatternProps) {
  return (
    <svg
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 h-full w-full", className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="circuit-pattern"
          width="80"
          height="80"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M10 10h20M30 10v20M30 30h20M50 30v20M10 50h30M40 50v20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
          <circle cx="10" cy="10" r="2" fill="currentColor" />
          <circle cx="30" cy="30" r="2" fill="currentColor" />
          <circle cx="50" cy="50" r="2" fill="currentColor" />
          <circle cx="40" cy="70" r="2" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
    </svg>
  );
}
