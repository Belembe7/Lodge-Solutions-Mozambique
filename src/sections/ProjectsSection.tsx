"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { useTranslation } from "@/i18n/LanguageProvider";
import { BYD_PRODUCT_IMAGE, PROJECTS } from "@/lib/constants";
import {
  cardHover,
  premiumEase,
  sectionFade,
  softSpring,
  viewportOnce,
} from "@/lib/motion-variants";
import { cn } from "@/lib/utils";
import type { ProjectItem } from "@/types";

const CATEGORY_KEYS = ["Solar", "Construção", "Baterias", "Lodges"] as const;

export function ProjectsSection() {
  const { t } = useTranslation();
  const [filterIndex, setFilterIndex] = useState(0);

  const filtered = useMemo(() => {
    if (filterIndex === 0) return PROJECTS;
    const category = CATEGORY_KEYS[filterIndex - 1];
    return PROJECTS.filter((p) => p.category === category);
  }, [filterIndex]);

  return (
    <motion.section
      id="projetos"
      className="bg-white py-20 sm:py-28"
      variants={sectionFade}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      <Container>
        <SectionTitle
          eyebrow={t.projects.eyebrow}
          title={t.projects.title}
          description={t.projects.description}
        />

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {t.projects.filters.map((item, index) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilterIndex(index)}
              className={cn(
                "relative rounded-2xl px-4 py-2 text-sm font-medium transition-colors duration-300",
                filterIndex === index
                  ? "text-white"
                  : "bg-light-gray text-dark-gray hover:bg-brown-primary/10",
              )}
            >
              {filterIndex === index ? (
                <motion.span
                  layoutId="project-filter"
                  className="absolute inset-0 rounded-2xl bg-brown-primary"
                  transition={softSpring}
                />
              ) : null}
              <span className="relative z-10">{item}</span>
            </button>
          ))}
        </div>

        <LayoutGroup>
          <motion.div
            layout
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => {
                const copyIndex = PROJECTS.findIndex((p) => p.id === project.id);
                const copy = t.projects.items[copyIndex];
                return (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    title={copy?.title ?? project.title}
                    category={copy?.category ?? project.category}
                  />
                );
              })}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>
      </Container>
    </motion.section>
  );
}

function ProjectCard({
  project,
  title,
  category,
}: {
  project: ProjectItem;
  title: string;
  category: string;
}) {
  return (
    <motion.article
      layout
      layoutId={project.id}
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 16 }}
      transition={{ duration: 0.55, ease: premiumEase }}
      whileHover={cardHover}
      className={cn(
        "group relative aspect-[4/3] overflow-hidden rounded-3xl will-change-transform shadow-sm transition-[box-shadow] duration-400 hover:shadow-[0_18px_40px_-16px_rgba(145,104,61,0.45)]",
        project.image === BYD_PRODUCT_IMAGE && "bg-[#F5F2EB]",
      )}
    >
      <Image
        src={project.image}
        alt={title}
        fill
        className={cn(
          "object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]",
          project.image === BYD_PRODUCT_IMAGE && "object-contain p-4",
        )}
        sizes="(max-width: 768px) 100vw, 33vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brown-dark/90 via-brown-dark/20 to-transparent opacity-80 transition-opacity duration-400 group-hover:opacity-95" />
      <div className="absolute inset-x-0 bottom-0 translate-y-2 p-5 opacity-90 transition-all duration-400 ease-out group-hover:translate-y-0 group-hover:opacity-100">
        <span className="mb-2 inline-block rounded-full bg-solar-gold/90 px-3 py-1 text-xs font-semibold text-brown-dark">
          {category}
        </span>
        <h3 className="font-display text-lg font-semibold text-white">{title}</h3>
      </div>
    </motion.article>
  );
}
