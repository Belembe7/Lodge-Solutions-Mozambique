import type { LocaleCode } from "../locales";
import type { Dictionary } from "./core";
import { en, fr, pt } from "./core";
import { de, es, it } from "./europe";
import { ar, ja, ru, zh } from "./asia";

export type { Dictionary };

export const dictionaries: Record<LocaleCode, Dictionary> = {
  pt,
  en,
  fr,
  es,
  zh,
  ar,
  de,
  it,
  ru,
  ja,
};
