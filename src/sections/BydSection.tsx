"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";
import { useTranslation } from "@/i18n/LanguageProvider";
import { BYD_PRODUCT_IMAGE } from "@/lib/constants";

export function BydSection() {
  const { t } = useTranslation();

  return (
    <section id="byd" className="bg-light-gray py-20 sm:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="space-y-6">
              <div className="flex h-20 w-44 items-center justify-center overflow-hidden rounded-2xl border border-brown-primary/10 bg-black px-4 shadow-sm">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/partners/byd.png"
                  alt="BYD"
                  className="h-12 w-auto object-contain"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-black">
                <Image
                  src={BYD_PRODUCT_IMAGE}
                  alt={t.byd.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </Reveal>

          <div>
            <SectionTitle
              align="left"
              eyebrow={t.byd.eyebrow}
              title={t.byd.title}
              description={t.byd.description}
              className="mb-8"
            />
            <Reveal delay={0.1}>
              <ul className="space-y-3">
                {t.byd.benefits.map((item) => (
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
                  {t.byd.cta}
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
