"use client";

import { cn } from "@/lib/utils";

type SectionDividerProps = {
  from?: "white" | "light" | "dark";
  to?: "white" | "light" | "dark";
  className?: string;
};

const tones = {
  white: "#ffffff",
  light: "#f7f7f5",
  dark: "#6f4e2d",
} as const;

/** Transição suave de fundo entre secções consecutivas. */
export function SectionDivider({
  from = "white",
  to = "light",
  className,
}: SectionDividerProps) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none relative h-10 w-full sm:h-14", className)}
      style={{
        background: `linear-gradient(to bottom, ${tones[from]}, ${tones[to]})`,
      }}
    />
  );
}
