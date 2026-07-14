"use client";

import {
  BatteryCharging,
  Building2,
  Droplets,
  Home,
  Sun,
  Zap,
} from "lucide-react";
import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";
import { useTranslation } from "@/i18n/LanguageProvider";
import { SERVICES } from "@/lib/constants";

const iconMap = {
  Sun,
  BatteryCharging,
  Home,
  Zap,
  Building2,
  Droplets,
} as const;

export function ServicesSection() {
  const { t } = useTranslation();

  return (
    <section id="servicos" className="bg-light-gray py-20 sm:py-28">
      <Container>
        <SectionTitle
          eyebrow={t.services.eyebrow}
          title={t.services.title}
          description={t.services.description}
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] ?? Sun;
            const copy = t.services.items[index];
            return (
              <Reveal key={service.icon} delay={index * 0.06}>
                <Card className="h-full">
                  <span className="mb-4 inline-flex size-12 items-center justify-center rounded-2xl bg-sustainable-green/10 text-sustainable-green">
                    <Icon className="size-6" />
                  </span>
                  <h3 className="font-display text-xl font-semibold text-brown-dark">
                    {copy.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-dark-gray/75">
                    {copy.description}
                  </p>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
