"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronDown } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageProvider";
import { LOCALES, type LocaleCode } from "@/i18n/locales";
import { cn } from "@/lib/utils";

type LanguageSwitcherProps = {
  tone?: "light" | "dark";
  className?: string;
};

/** Seletor compacto: só bandeira + seta (lista no dropdown). */
export function LanguageSwitcher({
  tone = "light",
  className,
}: LanguageSwitcherProps) {
  const { locale, setLocale, t } = useTranslation();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const current = LOCALES.find((l) => l.code === locale) ?? LOCALES[0];

  useEffect(() => {
    const onPointer = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener("mousedown", onPointer);
    return () => window.removeEventListener("mousedown", onPointer);
  }, []);

  const select = (code: LocaleCode) => {
    setLocale(code);
    setOpen(false);
  };

  return (
    <div ref={rootRef} className={cn("relative", className)}>
      <button
        type="button"
        aria-label={t.language}
        aria-expanded={open}
        title={current.name}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "inline-flex h-8 items-center gap-0.5 rounded-lg px-1.5 text-xs transition",
          tone === "light"
            ? "bg-white/15 text-white hover:bg-white/25"
            : "bg-light-gray text-brown-dark hover:bg-brown-primary/10",
        )}
      >
        <span className="text-sm leading-none" aria-hidden>
          {current.flag}
        </span>
        <ChevronDown
          className={cn(
            "size-3 opacity-70 transition-transform",
            open && "rotate-180",
          )}
        />
      </button>

      <AnimatePresence>
        {open ? (
          <motion.ul
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.15 }}
            className="absolute end-0 z-[60] mt-1.5 max-h-64 w-44 overflow-y-auto rounded-xl border border-brown-primary/10 bg-white py-1 shadow-xl"
          >
            {LOCALES.map((item) => {
              const active = item.code === locale;
              return (
                <li key={item.code}>
                  <button
                    type="button"
                    onClick={() => select(item.code)}
                    className={cn(
                      "flex w-full items-center gap-2 px-2.5 py-1.5 text-left text-xs transition hover:bg-light-gray",
                      active && "bg-brown-primary/5 font-medium text-brown-dark",
                    )}
                  >
                    <span className="text-sm leading-none" aria-hidden>
                      {item.flag}
                    </span>
                    <span className="flex-1 text-dark-gray">{item.name}</span>
                    {active ? (
                      <Check className="size-3 text-sustainable-green" />
                    ) : null}
                  </button>
                </li>
              );
            })}
          </motion.ul>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
