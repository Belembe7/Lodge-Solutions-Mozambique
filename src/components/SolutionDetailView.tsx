"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { CONTACT } from "@/lib/constants";
import type { SolutionDetail } from "@/lib/solutionDetails";
import { cn } from "@/lib/utils";

type SolutionDetailViewProps = {
  solution: SolutionDetail;
};

export function SolutionDetailView({ solution }: SolutionDetailViewProps) {
  return (
    <article>
      <section className="relative min-h-[22rem] overflow-hidden bg-[#F5F2EB] sm:min-h-[28rem]">
        <Image
          src={solution.image}
          alt={solution.title}
          fill
          priority
          className={cn(
            solution.imageContain
              ? "object-contain bg-[#F5F2EB] p-8 sm:p-12"
              : "object-cover",
          )}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brown-dark/85 via-brown-dark/40 to-transparent" />

        <Container className="relative flex min-h-[22rem] flex-col justify-end pb-10 pt-28 sm:min-h-[28rem] sm:pb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/#solucoes"
              className="mb-8 inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-4 py-2.5 text-sm font-medium text-white backdrop-blur-md transition hover:border-white/40 hover:bg-white/20"
            >
              <ArrowLeft className="size-4" />
              Voltar
            </Link>

            <p className="mb-3 text-sm font-medium tracking-wider text-solar-gold uppercase">
              {solution.eyebrow}
            </p>
            <h1 className="max-w-3xl font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {solution.title}
            </h1>
          </motion.div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <Reveal>
            <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-dark-gray/85 sm:text-xl">
              {solution.intro}
            </p>
          </Reveal>
        </Container>
      </section>

      {solution.blocks.length > 0 ? (
        <section className="bg-light-gray py-16 sm:py-20">
          <Container>
            <div
              className={cn(
                "grid gap-6",
                solution.blocks.length > 1
                  ? "md:grid-cols-2"
                  : "mx-auto max-w-3xl",
              )}
            >
              {solution.blocks.map((block, index) => (
                <Reveal key={block.title} delay={index * 0.08}>
                  <div className="h-full rounded-3xl border border-brown-primary/10 bg-white p-6 shadow-sm sm:p-8">
                    <h2 className="font-display text-xl font-semibold text-brown-dark sm:text-2xl">
                      {block.title}
                    </h2>
                    {block.description ? (
                      <p className="mt-3 text-sm leading-relaxed text-dark-gray/75">
                        {block.description}
                      </p>
                    ) : null}
                    <ul className="mt-5 space-y-3">
                      {block.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-sm font-medium text-dark-gray sm:text-base"
                        >
                          <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-sustainable-green" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      {solution.benefits && solution.benefits.length > 0 ? (
        <section
          className={cn(
            "py-16 sm:py-20",
            solution.blocks.length === 0 ? "bg-light-gray" : "bg-white",
          )}
        >
          <Container>
            <Reveal>
              <div className="mx-auto max-w-3xl rounded-3xl border border-brown-primary/10 bg-light-gray p-6 sm:p-10">
                <h2 className="font-display text-2xl font-semibold text-brown-dark">
                  {solution.benefitsTitle ?? "Benefícios"}
                </h2>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {solution.benefits.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 rounded-2xl bg-white px-4 py-3 text-sm font-medium text-dark-gray"
                    >
                      <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-sustainable-green" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </Container>
        </section>
      ) : null}

      <section className="border-t border-brown-primary/10 bg-white py-16 sm:py-20">
        <Container>
          <Reveal>
            <div className="mx-auto flex max-w-2xl flex-col items-center gap-5 text-center">
              <h2 className="font-display text-2xl font-semibold text-brown-dark sm:text-3xl">
                Pronto para avançar com esta solução?
              </h2>
              <p className="text-base leading-relaxed text-dark-gray/75">
                Fale connosco para um orçamento personalizado ou consulta
                técnica com a nossa equipa.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {/* TODO: substituir CONTACT.email pelo email definitivo de contacto */}
                <Button
                  href={`mailto:${CONTACT.email}?subject=${encodeURIComponent(`Contacto — ${solution.title}`)}`}
                  size="lg"
                >
                  Fale conosco
                </Button>
                <Button href="/#solucoes" variant="ghost" size="lg">
                  Ver outras soluções
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </article>
  );
}
