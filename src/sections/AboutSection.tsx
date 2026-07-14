"use client";

import Image from "next/image";
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
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl sm:aspect-[5/4] lg:aspect-[4/5]">
              {/* TODO: substituir por imagem real do cliente */}
              <Image
                src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=80"
                alt={t.about.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brown-dark/40 to-transparent" />
            </div>
          </Reveal>

          <div>
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
        </div>
      </Container>
    </section>
  );
}
