"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { useTranslation } from "@/i18n/LanguageProvider";

// Poster de fallback se o vídeo não carregar
const HERO_POSTER =
  "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1920&q=80";
const HERO_VIDEO = "/videos/hero.mp4";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.55,
      delayChildren: 0.7,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.05,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export function Hero() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const [videoError, setVideoError] = useState(false);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.35]);

  return (
    <section
      id="inicio"
      ref={sectionRef}
      className="relative flex min-h-svh items-end overflow-hidden pb-20 pt-36 sm:items-center sm:pb-0 sm:pt-0"
    >
      <motion.div style={{ y, opacity }} className="absolute inset-0">
        {!videoError ? (
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster={HERO_POSTER}
            onError={() => setVideoError(true)}
          >
            <source src={HERO_VIDEO} type="video/mp4" />
          </video>
        ) : (
          <Image
            src={HERO_POSTER}
            alt="Solar panels at sunrise"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-brown-dark/70 via-brown-dark/55 to-brown-dark/80" />
      </motion.div>

      <Container className="relative z-10 w-full py-16 sm:py-24">
        <motion.div
          className="max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={itemVariants}
            className="mb-4 text-sm font-medium tracking-[0.2em] text-solar-gold uppercase"
          >
            {t.hero.eyebrow}
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="font-display text-4xl leading-tight font-bold text-white sm:text-5xl lg:text-6xl"
          >
            {t.hero.title}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Button href="#contacto" size="lg">
              {t.hero.ctaQuote}
            </Button>
            <Button href="#solucoes" variant="outline" size="lg">
              {t.hero.ctaExplore}
            </Button>
          </motion.div>
        </motion.div>
      </Container>

      <motion.a
        href="#sobre"
        aria-label="Scroll"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 3.4, duration: 0.7 },
          y: { delay: 3.4, duration: 1.8, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <ChevronDown className="size-8" />
      </motion.a>
    </section>
  );
}
