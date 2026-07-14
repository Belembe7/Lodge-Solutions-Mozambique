"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import {
  ClipboardCheck,
  Monitor,
  PenTool,
  Search,
  Wrench,
} from "lucide-react";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";
import { useTranslation } from "@/i18n/LanguageProvider";

const stepIcons = [Search, PenTool, Wrench, ClipboardCheck, Monitor];

export function HowItWorksSection() {
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
    <section className="relative overflow-hidden bg-light-gray py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brown-primary/5 to-transparent" />
      <Container className="relative">
        <SectionTitle
          eyebrow={t.howItWorks.eyebrow}
          title={t.howItWorks.title}
          description={t.howItWorks.description}
        />

        <div ref={ref} className="relative">
          <div className="absolute top-10 right-0 left-0 hidden h-0.5 bg-brown-primary/15 lg:block" />
          <motion.div
            style={{ scaleX: lineScaleX }}
            className="absolute top-10 left-0 hidden h-0.5 origin-left bg-solar-gold lg:block"
          />
          <div className="absolute top-0 bottom-0 left-5 w-0.5 bg-brown-primary/15 lg:hidden" />
          <motion.div
            style={{ scaleY: lineScaleY }}
            className="absolute top-0 left-5 w-0.5 origin-top bg-solar-gold lg:hidden"
          />

          <ol className="grid gap-8 lg:grid-cols-5 lg:gap-4">
            {t.howItWorks.steps.map((item, index) => {
              const Icon = stepIcons[index] ?? PenTool;
              return (
                <Reveal key={item.title} delay={index * 0.08}>
                  <li className="relative flex gap-4 pl-12 lg:flex-col lg:items-center lg:pl-0 lg:text-center">
                    <span className="absolute left-0 flex size-10 items-center justify-center rounded-full bg-brown-primary font-display text-sm font-bold text-white shadow-md lg:static lg:mb-4 lg:size-12">
                      {index + 1}
                    </span>
                    <div>
                      <span className="mb-2 inline-flex size-10 items-center justify-center rounded-2xl bg-white text-energy-blue shadow-sm lg:mx-auto">
                        <Icon className="size-5" />
                      </span>
                      <h3 className="mt-2 font-display text-lg font-semibold text-brown-dark">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm text-dark-gray/75">
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
