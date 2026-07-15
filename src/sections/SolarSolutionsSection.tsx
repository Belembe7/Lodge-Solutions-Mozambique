"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { useTranslation } from "@/i18n/LanguageProvider";
import { SECTOR_SOLUTIONS } from "@/lib/constants";
import {
  cardHover,
  cardReveal,
  premiumEase,
  sectionFade,
  staggerContainer,
  viewportOnce,
} from "@/lib/motion-variants";

function SolarEnergyIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <circle cx="34" cy="14" r="6" className="fill-solar-gold" />
      <path
        d="M34 4v3M34 21v3M24 14h3M41 14h3M26.9 6.9l2.1 2.1M39 19l2.1 2.1M26.9 21.1L29 19M39 9l2.1-2.1"
        className="stroke-solar-gold"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <rect
        x="6"
        y="22"
        width="26"
        height="18"
        rx="3"
        className="fill-brown-primary/15 stroke-brown-dark"
        strokeWidth="1.75"
      />
      <path
        d="M6 28.5h26M6 34.5h26M14.5 22v18M23.5 22v18"
        className="stroke-brown-primary/50"
        strokeWidth="1.25"
      />
    </svg>
  );
}

function FeaturedSolarCard({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={viewportOnce}
      transition={{ duration: 0.85, ease: premiumEase, delay: 0.2 }}
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.3, ease: premiumEase },
        }}
        className="group relative will-change-transform"
      >
        <div
          className="rounded-[22px] p-px shadow-[0_16px_40px_-18px_rgba(111,78,45,0.45)] transition-[box-shadow,filter] duration-300 group-hover:shadow-[0_28px_56px_-16px_rgba(145,104,61,0.55)] group-hover:brightness-[1.03]"
          style={{
            background:
              "linear-gradient(135deg, #d9a441 0%, #91683d 48%, #6f4e2d 100%)",
          }}
        >
          <div className="relative overflow-hidden rounded-[21px] border border-white/40">
            <div className="relative h-36 w-full sm:h-40">
              <Image
                src="/images/solutions/energia-solar.png"
                alt={title}
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                sizes="(max-width: 640px) 100vw, 24rem"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brown-dark/55 via-transparent to-brown-dark/10" />
              <div className="absolute top-3 left-3 flex size-11 items-center justify-center rounded-2xl bg-white/80 shadow-sm ring-1 ring-white/60 backdrop-blur-md sm:size-12">
                <SolarEnergyIcon className="size-7 sm:size-8" />
              </div>
            </div>

            <div className="relative border-t border-white/30 bg-white/80 px-5 py-4 backdrop-blur-xl sm:px-5 sm:py-5">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(ellipse at 20% 0%, rgba(217,164,65,0.18), transparent 55%)",
                }}
              />
              <div className="relative">
                <h3 className="font-display text-lg font-semibold text-brown-dark sm:text-xl">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-dark-gray/80">
                  {description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function SolarSolutionsSection() {
  const { t } = useTranslation();
  const { featured } = t.solutions;

  return (
    <motion.section
      id="solucoes"
      className="bg-light-gray py-20 sm:py-28"
      variants={sectionFade}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      <Container>
        <SectionTitle
          eyebrow={t.solutions.eyebrow}
          title={t.solutions.title}
          description={t.solutions.description}
        />

        <div className="relative mx-auto max-w-5xl">
          {/* Mobile: above the grid. sm+: centered overlap between the four cards */}
          <FeaturedSolarCard
            title={featured.title}
            description={featured.description}
            className="relative z-20 mb-5 w-full sm:absolute sm:top-1/2 sm:left-1/2 sm:mb-0 sm:w-[min(100%,22rem)] sm:-translate-x-1/2 sm:-translate-y-1/2 md:w-[min(100%,24rem)]"
          />

          <motion.div
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-24 md:gap-y-28"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {SECTOR_SOLUTIONS.map((sector, index) => {
              const copy = t.solutions.sectors[index];

              return (
                <motion.div
                  key={sector.id}
                  variants={cardReveal}
                  whileHover={cardHover}
                  className="will-change-transform"
                >
                  <Link
                    href={sector.href}
                    className="group relative flex h-72 overflow-hidden rounded-3xl bg-brown-dark shadow-sm transition-[box-shadow] duration-400 hover:shadow-[0_18px_40px_-16px_rgba(145,104,61,0.45)] sm:h-80"
                  >
                    <Image
                      src={sector.image}
                      alt={copy?.title ?? sector.title}
                      fill
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={index < 2}
                    />
                    <div className="absolute inset-x-0 bottom-0 z-10 h-2/5 bg-gradient-to-t from-brown-dark/80 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 z-10 p-5 sm:p-6">
                      <h3 className="font-display text-lg font-semibold text-white sm:text-xl">
                        {copy?.title ?? sector.title}
                      </h3>
                      <p className="mt-2 max-h-0 overflow-hidden text-sm leading-relaxed text-white/90 opacity-0 transition-all duration-400 group-hover:max-h-28 group-hover:opacity-100">
                        {copy?.description ?? sector.description}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </Container>
    </motion.section>
  );
}
