import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  /** dark = bronze original · white = versão branca (ex.: footer) */
  variant?: "dark" | "white";
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: { width: 200, height: 80, className: "h-14 w-auto sm:h-16" },
  md: { width: 280, height: 112, className: "h-[4.25rem] w-auto sm:h-20 lg:h-[5.25rem]" },
  lg: { width: 360, height: 144, className: "h-20 w-auto sm:h-24 lg:h-28" },
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
