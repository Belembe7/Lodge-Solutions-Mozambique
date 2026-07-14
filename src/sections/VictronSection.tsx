"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";
import { useTranslation } from "@/i18n/LanguageProvider";
import { VICTRON_PRODUCT_IMAGE } from "@/lib/constants";

export function VictronSection() {
  const { t } = useTranslation();

  return (
    <section id="victron" className="bg-white py-20 sm:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <SectionTitle
              align="left"
              eyebrow={t.victron.eyebrow}
              title={t.victron.title}
              description={t.victron.description}
              className="mb-8"
            />
            <Reveal delay={0.1}>
              <ul className="space-y-3">
                {t.victron.benefits.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm font-medium text-dark-gray"
                  >
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-sustainable-green" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-8">
                <Button href="#catalogo" size="lg">
                  {t.victron.cta}
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal className="order-1 lg:order-2">
            <div className="space-y-6">
              <div className="flex h-20 w-44 items-center justify-center rounded-2xl border border-brown-primary/10 bg-light-gray px-6 shadow-sm lg:ms-auto">
                {/* TODO: substituir por logótipo oficial Victron */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/partners/victron.svg"
                  alt="Victron Energy"
                  className="h-12 w-auto object-contain"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-[#0a0a0a]">
                <Image
                  src={VICTRON_PRODUCT_IMAGE}
                  alt={t.victron.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
