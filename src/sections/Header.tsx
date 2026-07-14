"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  BatteryCharging,
  Building2,
  Droplets,
  Home,
  Menu,
  Sun,
  X,
  Zap,
} from "lucide-react";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Logo } from "@/components/Logo";
import { useTranslation } from "@/i18n/LanguageProvider";
import { SOLUTION_MENU } from "@/lib/constants";
import { cn } from "@/lib/utils";

const iconMap = {
  Sun,
  BatteryCharging,
  Home,
  Zap,
  Building2,
  Droplets,
} as const;

const NAV_HREFS = [
  { key: "home", href: "#inicio" },
  { key: "solutions", href: "#solucoes" },
  { key: "victron", href: "#victron" },
  { key: "catalog", href: "#catalogo" },
  { key: "projects", href: "#projetos" },
  { key: "contact", href: "#contacto" },
] as const;

export function Header() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);

  const navLinks = useMemo(
    () =>
      NAV_HREFS.map((item) => ({
        ...item,
        label: t.nav[item.key],
      })),
    [t],
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const linkClass = scrolled
    ? "text-dark-gray hover:text-brown-primary"
    : "text-white/90 hover:text-white";

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 py-2 shadow-md backdrop-blur-md"
          : "bg-transparent py-3 sm:py-4",
      )}
    >
      <Container className="flex items-center justify-between gap-3">
        <Link
          href="#inicio"
          className="relative z-10 shrink-0 bg-transparent p-0 shadow-none"
        >
          <Logo size="md" />
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex">
          {navLinks.map((link) =>
            link.key === "solutions" ? (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setMegaOpen(true)}
                onMouseLeave={() => setMegaOpen(false)}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "rounded-lg px-2 py-1.5 text-sm font-medium whitespace-nowrap transition-colors xl:px-2.5",
                    linkClass,
                  )}
                >
                  {link.label}
                </Link>

                <AnimatePresence>
                  {megaOpen ? (
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-1/2 top-full z-50 mt-3 w-[640px] -translate-x-1/2 rounded-3xl border border-brown-primary/10 bg-white p-6 shadow-2xl"
                    >
                      <div className="grid grid-cols-2 gap-3">
                        {SOLUTION_MENU.map((item, index) => {
                          const Icon =
                            iconMap[item.icon as keyof typeof iconMap] ?? Sun;
                          const copy = t.solutionsMenu[index];
                          return (
                            <Link
                              key={item.icon}
                              href={item.href}
                              className="group flex gap-3 rounded-2xl p-3 transition-colors hover:bg-light-gray"
                              onClick={() => setMegaOpen(false)}
                            >
                              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brown-primary/10 text-brown-primary transition-colors group-hover:bg-solar-gold/20 group-hover:text-brown-dark">
                                <Icon className="size-5" />
                              </span>
                              <span>
                                <span className="block font-display text-sm font-semibold text-brown-dark">
                                  {copy.title}
                                </span>
                                <span className="mt-0.5 block text-xs text-dark-gray/70">
                                  {copy.description}
                                </span>
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-lg px-2 py-1.5 text-sm font-medium whitespace-nowrap transition-colors xl:px-2.5",
                  linkClass,
                )}
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden shrink-0 items-center gap-2 lg:flex">
          <LanguageSwitcher tone={scrolled ? "dark" : "light"} />
          <Button href="#contacto" size="sm">
            {t.nav.requestQuote}
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher tone={scrolled || mobileOpen ? "dark" : "light"} />
          <button
            type="button"
            className={cn(
              "relative z-10 inline-flex size-11 items-center justify-center rounded-xl",
              scrolled || mobileOpen
                ? "bg-light-gray text-brown-dark"
                : "bg-white/15 text-white backdrop-blur",
            )}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {mobileOpen ? (
          <>
            <motion.button
              type="button"
              aria-label="Close overlay"
              className="fixed inset-0 z-40 bg-brown-dark/50 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 280, damping: 28 }}
              className="fixed inset-y-0 end-0 z-50 flex w-[min(100%,22rem)] flex-col bg-white p-6 shadow-2xl lg:hidden"
            >
              <div className="mb-8 flex items-center justify-between gap-3">
                <Logo size="sm" />
                <button
                  type="button"
                  aria-label="Close menu"
                  className="rounded-xl bg-light-gray p-2 text-brown-dark"
                  onClick={() => setMobileOpen(false)}
                >
                  <X className="size-5" />
                </button>
              </div>
              <nav className="flex flex-1 flex-col gap-1 overflow-y-auto">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-2xl px-4 py-3 text-base font-medium text-dark-gray hover:bg-light-gray"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="mt-4 border-t border-brown-primary/10 pt-4">
                  <p className="mb-2 px-4 text-xs font-semibold tracking-wider text-brown-primary uppercase">
                    {t.nav.solutions}
                  </p>
                  {SOLUTION_MENU.map((item, index) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block rounded-2xl px-4 py-2.5 text-sm text-dark-gray/80 hover:bg-light-gray"
                      onClick={() => setMobileOpen(false)}
                    >
                      {t.solutionsMenu[index]?.title ?? item.title}
                    </Link>
                  ))}
                </div>
              </nav>
              <Button
                href="#contacto"
                className="mt-4 w-full"
                onClick={() => setMobileOpen(false)}
              >
                {t.nav.requestQuote}
              </Button>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
