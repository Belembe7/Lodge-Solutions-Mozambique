"use client";

import { AnimatedCounter } from "@/components/AnimatedCounter";
import { CircuitPattern } from "@/components/CircuitPattern";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { useTranslation } from "@/i18n/LanguageProvider";
import { STATS } from "@/lib/constants";

export function StatsSection() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-brown-dark py-16 text-white sm:py-20">
      <CircuitPattern className="text-white/10 opacity-40" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-brown-primary/40 to-transparent" />
      <Container className="relative">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.08}>
              {/* substituir por dado real ou remover se não houver métricas verificadas */}
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                  className="font-display text-4xl font-bold text-solar-gold sm:text-5xl"
                />
                <p className="mt-2 text-sm text-white/75 sm:text-base">
                  {t.stats[index]?.label ?? stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
