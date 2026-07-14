"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { HardHat, Package, Ruler } from "lucide-react";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";
import { useTranslation } from "@/i18n/LanguageProvider";

const stepIcons = [Ruler, Package, HardHat];

export function EpcSection() {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 40%"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 80, damping: 24 });
  const lineScaleX = useTransform(progress, [0, 1], [0, 1]);
  const lineScaleY = useTransform(progress, [0, 1], [0, 1]);

  return (
    <section id="epc" className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brown-primary/5 to-transparent" />
      <Container className="relative">
        <SectionTitle
          eyebrow={t.epc.eyebrow}
          title={t.epc.title}
          description={t.epc.description}
        />

        <div ref={ref} className="relative">
          <div className="absolute top-12 right-0 left-0 hidden h-0.5 bg-brown-primary/15 lg:block" />
          <motion.div
            style={{ scaleX: lineScaleX }}
            className="absolute top-12 left-0 hidden h-0.5 origin-left bg-solar-gold lg:block"
          />
          <div className="absolute top-0 bottom-0 left-6 w-0.5 bg-brown-primary/15 lg:hidden" />
          <motion.div
            style={{ scaleY: lineScaleY }}
            className="absolute top-0 left-6 w-0.5 origin-top bg-solar-gold lg:hidden"
          />

          <ol className="grid gap-10 lg:grid-cols-3 lg:gap-8">
            {t.epc.steps.map((item, index) => {
              const Icon = stepIcons[index] ?? Ruler;
              return (
                <Reveal key={item.title} delay={index * 0.1}>
                  <li className="relative flex gap-5 pl-14 lg:flex-col lg:items-center lg:pl-0 lg:text-center">
                    <span className="absolute left-0 flex size-12 items-center justify-center rounded-full bg-brown-primary font-display text-xl font-bold text-solar-gold shadow-md lg:static lg:mb-5 lg:size-16 lg:text-2xl">
                      {item.letter}
                    </span>
                    <div>
                      <span className="mb-3 inline-flex size-11 items-center justify-center rounded-2xl bg-light-gray text-energy-blue shadow-sm lg:mx-auto">
                        <Icon className="size-5" />
                      </span>
                      <h3 className="font-display text-xl font-semibold text-brown-dark">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-dark-gray/75">
                        {item.description}
                      </p>
                    </div>
                  </li>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </Container>
    </section>
  );
}
