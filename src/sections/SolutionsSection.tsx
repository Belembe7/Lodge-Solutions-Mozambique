"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { useTranslation } from "@/i18n/LanguageProvider";
import { SECTOR_SOLUTIONS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function SolutionsSection() {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const current = SECTOR_SOLUTIONS[activeIndex];
  const currentCopy = t.solutions.sectors[activeIndex];

  return (
    <section id="solucoes" className="bg-white py-20 sm:py-28">
      <Container>
        <SectionTitle
          eyebrow={t.solutions.eyebrow}
          title={t.solutions.title}
          description={t.solutions.description}
        />

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {t.solutions.sectors.map((sector, index) => (
            <button
              key={sector.title}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={cn(
                "rounded-2xl px-4 py-2 text-sm font-medium transition-all",
                activeIndex === index
                  ? "bg-brown-primary text-white shadow-md"
                  : "bg-light-gray text-dark-gray hover:bg-brown-primary/10",
              )}
            >
              {sector.title}
            </button>
          ))}
        </div>

        <div className="relative min-h-[22rem] overflow-hidden rounded-3xl sm:min-h-[28rem]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.45 }}
              className="absolute inset-0"
            >
              {/* TODO: substituir por imagem real do cliente */}
              <Image
                src={current.image}
                alt={currentCopy.title}
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brown-dark via-brown-dark/50 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8 sm:p-12">
                <h3 className="font-display text-3xl font-bold text-white sm:text-4xl">
                  {currentCopy.title}
                </h3>
                <p className="mt-3 max-w-xl text-base text-white/85">
                  {currentCopy.description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 hidden grid-cols-3 gap-4 xl:grid">
          {SECTOR_SOLUTIONS.map((sector, index) => {
            const copy = t.solutions.sectors[index];
            return (
              <motion.article
                key={sector.id}
                whileHover={{ y: -4 }}
                className="group relative h-48 overflow-hidden rounded-3xl"
              >
                {/* TODO: substituir por imagem real do cliente */}
                <Image
                  src={sector.image}
                  alt={copy.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brown-dark/90 via-brown-dark/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h4 className="font-display text-lg font-semibold text-white">
                    {copy.title}
                  </h4>
                  <p className="mt-1 max-h-0 overflow-hidden text-sm text-white/80 opacity-0 transition-all duration-300 group-hover:max-h-20 group-hover:opacity-100">
                    {copy.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
