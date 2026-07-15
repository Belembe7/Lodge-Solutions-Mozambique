"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { SolutionsGrid } from "@/components/solutions/SolutionsGrid";
import { useTranslation } from "@/i18n/LanguageProvider";
import { sectionFade, viewportOnce } from "@/lib/motion-variants";

export function SolarSolutionsSection() {
  const { t } = useTranslation();

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

        <SolutionsGrid />
      </Container>
    </motion.section>
  );
}
