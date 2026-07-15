import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  /** dark = bronze original · white = versão branca (ex.: footer) */
  variant?: "dark" | "white";
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: { width: 220, height: 88, className: "h-16 w-auto sm:h-[4.5rem]" },
  md: {
    width: 320,
    height: 128,
    className: "h-[5rem] w-auto sm:h-24 lg:h-[6.5rem]",
  },
  lg: {
    width: 400,
    height: 160,
    className: "h-24 w-auto sm:h-28 lg:h-32",
  },
};

/**
 * Logótipo oficial LSM — Lodge Solutions Mozambique.
 * Sem card: imagem livre sobre o fundo da página.
 */
export function Logo({ className, size = "md", variant = "dark" }: LogoProps) {
  const dim = sizes[size];

  return (
    <Image
      src="/images/logo-lsm-free.png"
      alt="LSM Lodge Solutions Mozambique"
      width={dim.width}
      height={dim.height}
      className={cn(
        dim.className,
        "object-contain object-left",
        variant === "white" && "brightness-0 invert",
        className,
      )}
      priority
    />
  );
}
