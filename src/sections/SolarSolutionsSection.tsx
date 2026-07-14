"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { useTranslation } from "@/i18n/LanguageProvider";
import { SECTOR_SOLUTIONS } from "@/lib/constants";

export function SolarSolutionsSection() {
  const { t } = useTranslation();

  return (
    <section id="solucoes" className="bg-light-gray py-20 sm:py-28">
      <Container>
        <SectionTitle
          eyebrow={t.solutions.eyebrow}
          title={t.solutions.title}
          description={t.solutions.description}
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SECTOR_SOLUTIONS.map((sector, index) => {
            const copy = t.solutions.sectors[index];
            return (
              <motion.article
                key={sector.id}
                id={sector.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                whileHover={{ y: -4 }}
                className="group relative h-64 overflow-hidden rounded-3xl sm:h-72"
              >
                {/* TODO: substituir por imagem real do cliente */}
                <Image
                  src={sector.image}
                  alt={copy.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brown-dark/95 via-brown-dark/45 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">
                    {copy.title}
                  </h3>
                  <p className="mt-2 max-h-0 overflow-hidden text-sm leading-relaxed text-white/85 opacity-0 transition-all duration-300 group-hover:max-h-24 group-hover:opacity-100">
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
