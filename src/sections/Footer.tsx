"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
} from "@/components/SocialIcons";
import { useTranslation } from "@/i18n/LanguageProvider";
import { CONTACT, PARTNERS, SOCIAL_LINKS } from "@/lib/constants";

const socialIcons = {
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
  Linkedin: LinkedinIcon,
  MessageCircle,
} as const;

const QUICK_LINKS = [
  { key: "home" as const, href: "#inicio" },
  { key: "about" as const, href: "#sobre" },
  { key: "solutions" as const, href: "#solucoes" },
  { key: "catalog" as const, href: "#catalogo" },
  { key: "projects" as const, href: "#projetos" },
  { key: "contact" as const, href: "#contacto" },
];

export function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brown-dark text-white">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo size="lg" variant="white" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              {t.footer.blurb}
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold tracking-wider uppercase">
              {t.footer.quickLinks}
            </h3>
            <ul className="mt-4 space-y-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition hover:text-solar-gold"
                  >
                    {t.nav[link.key]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold tracking-wider uppercase">
              {t.footer.social}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon =
                  socialIcons[social.icon as keyof typeof socialIcons] ??
                  FacebookIcon;
                return (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="inline-flex size-10 items-center justify-center rounded-xl bg-white/10 text-white transition hover:bg-solar-gold hover:text-brown-dark"
                    >
                      <Icon className="size-5" />
                    </a>
                  </li>
                );
              })}
            </ul>
            <h3 className="mt-8 font-display text-sm font-semibold tracking-wider uppercase">
              {t.footer.partners}
            </h3>
            <div className="mt-3 flex flex-wrap items-center gap-4">
              {PARTNERS.map((partner) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={partner.name}
                  src={partner.logo}
                  alt={partner.name}
                  className="h-10 w-auto rounded-md object-contain opacity-90"
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold tracking-wider uppercase">
              {t.footer.contacts}
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>
                <a
                  href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                  className="hover:text-solar-gold"
                >
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="hover:text-solar-gold"
                >
                  {CONTACT.email}
                </a>
              </li>
              <li>{t.contact.address}</li>
            </ul>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="py-5">
          <p className="text-center text-xs text-white/55 sm:text-sm">
            © {year} LSM — Lodge Solutions Mozambique. {t.footer.rights}
          </p>
        </Container>
      </div>
    </footer>
  );
}
