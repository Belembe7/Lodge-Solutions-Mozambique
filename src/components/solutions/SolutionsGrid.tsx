"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  BatteryFull,
  Building2,
  Factory,
  Sun,
  Wrench,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  cardReveal,
  premiumEase,
  staggerContainer,
  viewportOnce,
} from "@/lib/motion-variants";

export type SolutionAccent = "amber" | "blue" | "green" | "purple" | "coral";

export type SolutionItem = {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
  color: SolutionAccent;
  href: string;
  /** Cards da 1.ª linha (títulos / padding maiores). */
  variant: "featured" | "compact";
};

const ACCENTS: Record<
  SolutionAccent,
  { badgeBg: string; icon: string }
> = {
  amber: { badgeBg: "rgba(217, 164, 65, 0.28)", icon: "#9A7209" },
  blue: { badgeBg: "rgba(31, 93, 145, 0.28)", icon: "#154A78" },
  green: { badgeBg: "rgba(79, 125, 74, 0.28)", icon: "#3A5E37" },
  purple: { badgeBg: "rgba(124, 92, 246, 0.28)", icon: "#5B21B6" },
  coral: { badgeBg: "rgba(224, 122, 95, 0.28)", icon: "#C45C3E" },
};

/** Dados das 5 soluções — links alinhados às páginas existentes. */
export const SOLUTIONS: SolutionItem[] = [
  {
    id: "energia-solar",
    title: "Energia solar",
    description:
      "Projetamos, fornecemos e implementamos soluções completas de energia solar para residências, hotéis e indústrias.",
    image: "/images/solutions/energia-solar.png",
    icon: Sun,
    color: "amber",
    href: "/solucoes/energia-solar",
    variant: "featured",
  },
  {
    id: "byd-mozambique",
    title: "BYD em Moçambique",
    description:
      "Baterias de lítio de referência mundial, com stock e suporte técnico local.",
    image: "/images/partners/byd-battery-box.png",
    icon: BatteryFull,
    color: "blue",
    href: "/solucoes/byd",
    variant: "featured",
  },
  {
    id: "modelo-epc",
    title: "Modelo EPC (Engineering, Procurement & Construction)",
    description:
      "Do projeto à construção turnkey, engenharia, procurement e instalação com responsabilidade única.",
    image: "/images/solutions/modelo-epc.png",
    icon: Factory,
    color: "green",
    href: "/solucoes/epc",
    variant: "compact",
  },
  {
    id: "edificio-sustentavel",
    title: "Edifício Sustentável",
    description:
      "Engenharia e construção com materiais e práticas de baixo impacto ambiental.",
    image: "/images/projects/edificio-sustentavel.png",
    icon: Building2,
    color: "purple",
    href: "/#projetos",
    variant: "compact",
  },
  {
    id: "technical-support",
    title: "Technical Support",
    description:
      "Assistência técnica especializada, manutenção e suporte contínuo para os seus sistemas.",
    image: "/images/solutions/technical-support.png",
    icon: Wrench,
    color: "coral",
    href: "/solucoes/technical-support",
    variant: "compact",
  },
];

type SolutionCardProps = {
  item: SolutionItem;
  priority?: boolean;
  className?: string;
  sizes: string;
};

function SolutionCard({
  item,
  priority = false,
  className,
  sizes,
}: SolutionCardProps) {
  const Icon = item.icon;
  const accent = ACCENTS[item.color];
  const isFeatured = item.variant === "featured";

  return (
    <Link
      href={item.href}
      className={cn(
        "group relative block overflow-hidden rounded-2xl shadow-sm transition-[box-shadow] duration-[400ms] ease-out",
        "min-h-[240px] hover:shadow-[0_18px_40px_-16px_rgba(145,104,61,0.45)]",
        isFeatured ? "sm:min-h-[320px]" : "sm:min-h-[240px]",
        className,
      )}
    >
      <Image
        src={item.image}
        alt={item.title}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover transition-transform duration-[400ms] ease-out group-hover:scale-[1.03]"
      />

      {/* Gradiente base — legibilidade do título */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 z-[1] h-2/5 bg-gradient-to-t from-brown-dark/80 to-transparent transition-opacity duration-[400ms] ease-out group-hover:opacity-0"
      />

      {/* Overlay castanho no hover — revela mais informação */}
      <div
        aria-hidden
        className="absolute inset-0 z-[1] bg-gradient-to-t from-brown-dark/90 via-brown-dark/45 to-brown-dark/10 opacity-0 transition-opacity duration-[400ms] ease-out group-hover:opacity-100"
      />

      <div
        className={cn(
          "absolute inset-0 z-10 flex flex-col justify-between",
          isFeatured ? "p-6" : "p-5",
        )}
      >
        <span
          className={cn(
            "flex items-center justify-center rounded-[9px] backdrop-blur-sm transition-transform duration-[400ms] ease-out group-hover:scale-105",
            isFeatured ? "size-9" : "size-[34px]",
          )}
          style={{ backgroundColor: accent.badgeBg }}
        >
          <Icon
            className={isFeatured ? "size-[18px]" : "size-4"}
            strokeWidth={1.75}
            style={{ color: accent.icon }}
            aria-hidden
          />
        </span>

        <div>
          <h3
            className={cn(
              "font-[family-name:var(--font-voice)] leading-tight font-semibold text-[#F4EFE4]",
              item.id === "energia-solar" && "text-[26px]",
              item.id === "byd-mozambique" && "text-[20px]",
              item.variant === "compact" && "text-[17px]",
            )}
          >
            {item.title}
          </h3>
          <p
            className={cn(
              "mt-2 overflow-hidden text-[12px] leading-[1.6] text-white/90 transition-all duration-[400ms] ease-out sm:text-[13px]",
              "max-h-28 opacity-100",
              "sm:max-h-0 sm:opacity-0 sm:group-hover:max-h-28 sm:group-hover:opacity-100",
            )}
          >
            {item.description}
          </p>
        </div>
      </div>
    </Link>
  );
}

export function SolutionsGrid() {
  const [solar, byd, epc, edificioSustentavel, technicalSupport] = SOLUTIONS;

  return (
    <motion.div
      className="mx-auto w-full max-w-6xl"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {/* Linha 1 */}
      <div className="grid grid-cols-1 gap-[14px] sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr]">
        <motion.div
          variants={cardReveal}
          transition={{ duration: 0.8, ease: premiumEase }}
        >
          <SolutionCard
            item={solar}
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 60vw"
          />
        </motion.div>
        <motion.div
          variants={cardReveal}
          transition={{ duration: 0.8, ease: premiumEase }}
        >
          <SolutionCard
            item={byd}
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
          />
        </motion.div>
      </div>

      {/* Linha 2 */}
      <div className="mt-[14px] grid grid-cols-1 gap-[14px] sm:grid-cols-2 lg:grid-cols-3">
        <motion.div
          variants={cardReveal}
          transition={{ duration: 0.8, ease: premiumEase }}
        >
          <SolutionCard
            item={epc}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </motion.div>
        <motion.div
          variants={cardReveal}
          transition={{ duration: 0.8, ease: premiumEase }}
        >
          <SolutionCard
            item={edificioSustentavel}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </motion.div>
        <motion.div
          variants={cardReveal}
          transition={{ duration: 0.8, ease: premiumEase }}
          className="sm:col-span-2 lg:col-span-1"
        >
          <SolutionCard
            item={technicalSupport}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 33vw"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
