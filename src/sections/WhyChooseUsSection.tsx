"use client";

import { CheckCircle2 } from "lucide-react";
import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";
import { useTranslation } from "@/i18n/LanguageProvider";

export function WhyChooseUsSection() {
  const { t } = useTranslation();

  return (
    <section className="bg-light-gray py-20 sm:py-28">
      <Container>
        <SectionTitle
          eyebrow={t.whyUs.eyebrow}
          title={t.whyUs.title}
          description={t.whyUs.description}
        />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.whyUs.items.map((item, index) => (
            <Reveal key={item} delay={index * 0.05}>
              <Card className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 size-6 shrink-0 text-energy-blue" />
                <p className="font-display text-lg font-semibold text-brown-dark">
                  {item}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
