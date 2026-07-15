"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { useTranslation } from "@/i18n/LanguageProvider";
import {
  cardReveal,
  premiumEase,
  sectionFade,
  staggerContainer,
  viewportOnce,
} from "@/lib/motion-variants";

export function AboutSection() {
  const { t } = useTranslation();

  return (
    <motion.section
      id="sobre"
      className="bg-white py-20 sm:py-28"
      variants={sectionFade}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      <Container>
        <div className="mx-auto max-w-3xl">
          <SectionTitle
            align="left"
            eyebrow={t.about.eyebrow}
            title={t.about.title}
            description={t.about.description}
            className="mb-8"
          />
          <motion.ul
            className="grid gap-3 sm:grid-cols-2"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {t.about.highlights.map((item) => (
              <motion.li
                key={item}
                variants={cardReveal}
                whileHover={{
                  y: -4,
                  transition: { duration: 0.3, ease: premiumEase },
                }}
                className="flex items-center gap-2.5 rounded-2xl bg-light-gray px-4 py-3 text-sm font-medium text-dark-gray shadow-sm transition-shadow duration-400 will-change-transform hover:shadow-[0_10px_30px_-12px_rgba(145,104,61,0.35)]"
              >
                <CheckCircle2 className="size-5 shrink-0 text-sustainable-green" />
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </Container>
    </motion.section>
  );
}
