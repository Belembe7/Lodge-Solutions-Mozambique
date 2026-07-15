"use client";

import Image from "next/image";
import Link from "next/link";
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

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2">
          {SECTOR_SOLUTIONS.map((sector, index) => {
            const copy = t.solutions.sectors[index];

            return (
              <motion.div
                key={sector.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
              >
                <Link
                  href={sector.href}
                  className="group relative flex h-72 overflow-hidden rounded-3xl sm:h-80"
                >
                  <Image
                    src={sector.image}
                    alt={copy.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-brown-dark/80 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    <h3 className="font-display text-lg font-semibold text-white sm:text-xl">
                      {copy.title}
                    </h3>
                    <p className="mt-2 max-h-0 overflow-hidden text-sm leading-relaxed text-white/90 opacity-0 transition-all duration-300 group-hover:max-h-28 group-hover:opacity-100">
                      {copy.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
