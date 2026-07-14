"use client";

import Image from "next/image";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { useTranslation } from "@/i18n/LanguageProvider";
import { PARTNERS } from "@/lib/constants";

export function PartnersSection() {
  const { t } = useTranslation();
  const logos = [...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS];

  return (
    <section className="overflow-hidden bg-white py-16 sm:py-20">
      <Container>
        <SectionTitle
          eyebrow={t.partners.eyebrow}
          title={t.partners.title}
          description={t.partners.description}
          className="mb-10"
        />
      </Container>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent sm:w-24" />

        <div className="flex w-max animate-marquee gap-6 py-2">
          {logos.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex h-24 w-52 shrink-0 items-center justify-center rounded-2xl border border-brown-primary/10 bg-light-gray px-6 grayscale transition-all duration-300 hover:border-brown-primary/25 hover:bg-white hover:grayscale-0 hover:shadow-md"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={180}
                height={64}
                className="h-12 w-auto max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
