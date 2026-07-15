"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/Container";
import { useTranslation } from "@/i18n/LanguageProvider";
import { PARTNERS } from "@/lib/constants";
import {
  premiumEase,
  sectionFade,
  viewportOnce,
} from "@/lib/motion-variants";

export function PartnersSection() {
  const { t } = useTranslation();
  const logos = [...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS];

  return (
    <motion.section
      className="overflow-hidden bg-white py-14 sm:py-16"
      variants={sectionFade}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      <Container>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, ease: premiumEase }}
          className="mb-8 text-center text-sm font-medium tracking-wider text-brown-primary uppercase"
        >
          {t.footer.partners}
        </motion.p>
      </Container>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent sm:w-24" />

        <div className="flex w-max animate-marquee gap-6 py-2">
          {logos.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex h-24 w-56 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-brown-primary/10 bg-white px-4 transition-[border-color,box-shadow,transform] duration-400 ease-out hover:-translate-y-1 hover:border-brown-primary/25 hover:shadow-[0_12px_28px_-14px_rgba(145,104,61,0.35)]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-14 w-auto max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
