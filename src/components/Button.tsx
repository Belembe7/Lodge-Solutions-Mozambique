"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { microTransition } from "@/lib/motion-variants";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  disabled?: boolean;
  loading?: boolean;
};

const variants = {
  primary:
    "bg-solar-gold text-brown-dark hover:bg-[#c49235] shadow-md hover:shadow-lg border border-transparent",
  outline:
    "bg-transparent text-white border-2 border-white hover:bg-white/10",
  ghost:
    "bg-transparent text-brown-dark border border-brown-primary/30 hover:border-brown-primary hover:bg-brown-primary/5",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm sm:text-base",
  lg: "px-8 py-3.5 text-base sm:text-lg",
};

/** Botão reutilizável com hover premium suave. */
export function Button({
  children,
  href,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  className,
  disabled,
  loading,
}: ButtonProps) {
  const classes = cn(
    "group/btn inline-flex items-center justify-center gap-2 rounded-2xl font-medium transition-[background-color,box-shadow,border-color,color] duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-solar-gold focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60",
    variants[variant],
    sizes[size],
    className,
  );

  const content = (
    <>
      {loading ? (
        <span className="size-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
      ) : null}
      <span className="inline-flex items-center gap-2 transition-transform duration-300 ease-out group-hover/btn:translate-x-0.5">
        {children}
      </span>
    </>
  );

  if (href) {
    return (
      <motion.div
        className="inline-flex"
        whileHover={{ scale: 1.02 }}
        transition={microTransition}
      >
        <Link href={href} className={classes} onClick={onClick}>
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={classes}
      whileHover={{ scale: 1.02 }}
      transition={microTransition}
    >
      {content}
    </motion.button>
  );
}
