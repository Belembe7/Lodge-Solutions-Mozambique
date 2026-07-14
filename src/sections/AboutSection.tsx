"use client";

import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";
import { useTranslation } from "@/i18n/LanguageProvider";

export function AboutSection() {
  const { t } = useTranslation();

  return (
    <section id="sobre" className="bg-white py-20 sm:py-28">
      <Container>
        <div className="mx-auto max-w-3xl">
          <SectionTitle
            align="left"
            eyebrow={t.about.eyebrow}
            title={t.about.title}
            description={t.about.description}
            className="mb-8"
          />
          <Reveal delay={0.1}>
            <ul className="grid gap-3 sm:grid-cols-2">
              {t.about.highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 rounded-2xl bg-light-gray px-4 py-3 text-sm font-medium text-dark-gray"
                >
                  <CheckCircle2 className="size-5 shrink-0 text-sustainable-green" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
