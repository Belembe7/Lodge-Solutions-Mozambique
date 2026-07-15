"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { Download } from "lucide-react";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { useTranslation } from "@/i18n/LanguageProvider";
import { CATALOG_ITEMS } from "@/lib/constants";
import {
  cardHover,
  premiumEase,
  sectionFade,
  softSpring,
  viewportOnce,
} from "@/lib/motion-variants";
import { cn } from "@/lib/utils";
import type { CatalogItem } from "@/types";

const CATEGORY_KEYS = ["BYD", "Victron", "Kits Solares", "Acessórios"] as const;

export function CatalogSection() {
  const { t } = useTranslation();
  const [filterIndex, setFilterIndex] = useState(0);

  const filtered = useMemo(() => {
    if (filterIndex === 0) return CATALOG_ITEMS;
    const category = CATEGORY_KEYS[filterIndex - 1];
    return CATALOG_ITEMS.filter((item) => item.category === category);
  }, [filterIndex]);

  return (
    <motion.section
      id="catalogo"
      className="bg-light-gray py-20 sm:py-28"
      variants={sectionFade}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      <Container>
        <SectionTitle
          eyebrow={t.catalog.eyebrow}
          title={t.catalog.title}
          description={t.catalog.description}
        />

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {t.catalog.filters.map((item, index) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilterIndex(index)}
              className={cn(
                "relative rounded-2xl px-4 py-2 text-sm font-medium transition-colors duration-300",
                filterIndex === index
                  ? "text-white"
                  : "bg-white text-dark-gray hover:bg-brown-primary/10",
              )}
            >
              {filterIndex === index ? (
                <motion.span
                  layoutId="catalog-filter"
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
              {filtered.map((item) => {
                const copyIndex = CATALOG_ITEMS.findIndex((c) => c.id === item.id);
                const copy = t.catalog.items[copyIndex];
                return (
                  <CatalogCard
                    key={item.id}
                    item={item}
                    title={copy?.title ?? item.title}
                    category={copy?.category ?? item.category}
                    description={copy?.description ?? item.description}
                  />
                );
              })}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>

        <div className="mt-12 flex justify-center">
          {/* TODO: ligar ao PDF real do catálogo */}
          <Button href="/catalogo-lsm.pdf" size="lg" className="gap-2">
            <Download className="size-5" />
            {t.catalog.downloadCta}
          </Button>
        </div>
      </Container>
    </motion.section>
  );
}

function CatalogCard({
  item,
  title,
  category,
  description,
}: {
  item: CatalogItem;
  title: string;
  category: string;
  description: string;
}) {
  return (
    <motion.article
      layout
      layoutId={item.id}
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 16 }}
      transition={{ duration: 0.55, ease: premiumEase }}
      whileHover={cardHover}
      className="group overflow-hidden rounded-3xl border border-brown-primary/10 bg-white shadow-sm will-change-transform transition-[box-shadow] duration-400 hover:shadow-[0_16px_36px_-14px_rgba(145,104,61,0.4)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-[#F5F2EB]">
        <Image
          src={item.image}
          alt={title}
          fill
          className={cn(
            "object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]",
            (item.category === "BYD" || item.category === "Victron") &&
              "object-contain p-4",
          )}
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="p-5">
        <span className="mb-2 inline-block rounded-full bg-solar-gold/20 px-3 py-1 text-xs font-semibold text-brown-dark">
          {category}
        </span>
        <h3 className="font-display text-lg font-semibold text-brown-dark">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-dark-gray/75">
          {description}
        </p>
      </div>
    </motion.article>
  );
}
