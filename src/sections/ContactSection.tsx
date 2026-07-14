"use client";

import { forwardRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";
import { useTranslation } from "@/i18n/LanguageProvider";
import { CONTACT } from "@/lib/constants";
import {
  contactSchema,
  type ContactFormValues,
} from "@/lib/validations";
import { cn } from "@/lib/utils";

export function ContactSection() {
  const { t } = useTranslation();
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (_data: ContactFormValues) => {
    setStatus("idle");
    try {
      await new Promise((resolve) => setTimeout(resolve, 900));
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contacto" className="bg-white py-20 sm:py-28">
      <Container>
        <SectionTitle
          eyebrow={t.contact.eyebrow}
          title={t.contact.title}
          description={t.contact.description}
        />

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-5 rounded-3xl border border-brown-primary/10 bg-light-gray p-6 sm:p-8"
              noValidate
            >
              <Field
                label={t.contact.name}
                error={errors.name?.message}
                {...register("name")}
              />
              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  label={t.contact.email}
                  type="email"
                  error={errors.email?.message}
                  {...register("email")}
                />
                <Field
                  label={t.contact.phone}
                  type="tel"
                  error={errors.phone?.message}
                  {...register("phone")}
                />
              </div>
              <Field
                label={t.contact.subject}
                error={errors.subject?.message}
                {...register("subject")}
              />
              <div>
                <label className="mb-1.5 block text-sm font-medium text-brown-dark">
                  {t.contact.message}
                </label>
                <textarea
                  rows={5}
                  className={inputClass(Boolean(errors.message))}
                  {...register("message")}
                />
                {errors.message ? (
                  <p className="mt-1 text-xs text-red-600">
                    {errors.message.message}
                  </p>
                ) : null}
              </div>

              <Button
                type="submit"
                loading={isSubmitting}
                className="w-full sm:w-auto"
              >
                {t.contact.send}
              </Button>

              {status === "success" ? (
                <p className="rounded-2xl bg-sustainable-green/10 px-4 py-3 text-sm text-sustainable-green">
                  {t.contact.success}
                </p>
              ) : null}
              {status === "error" ? (
                <p className="rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-600">
                  {t.contact.error}
                </p>
              ) : null}
            </form>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-6">
              <div className="overflow-hidden rounded-3xl border border-brown-primary/10">
                {/* TODO: inserir localização exacta do escritório em Inhambane */}
                <iframe
                  title={t.contact.address}
                  src={CONTACT.mapsEmbedUrl}
                  className="h-64 w-full border-0 sm:h-72"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>

              <ul className="space-y-4">
                <ContactLine
                  icon={Phone}
                  label={t.contact.phoneLabel}
                  value={CONTACT.phone}
                  href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                />
                <ContactLine
                  icon={Mail}
                  label={t.contact.emailLabel}
                  value={CONTACT.email}
                  href={`mailto:${CONTACT.email}`}
                />
                <ContactLine
                  icon={MessageCircle}
                  label={t.contact.whatsappLabel}
                  value={t.contact.whatsappValue}
                  href={`https://wa.me/${CONTACT.whatsapp}`}
                />
                <ContactLine
                  icon={MapPin}
                  label={t.contact.addressLabel}
                  value={t.contact.address}
                />
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function inputClass(hasError: boolean) {
  return cn(
    "w-full rounded-2xl border bg-white px-4 py-3 text-sm text-dark-gray outline-none transition focus:ring-2 focus:ring-solar-gold/60",
    hasError
      ? "border-red-400 focus:border-red-400"
      : "border-brown-primary/15 focus:border-brown-primary",
  );
}

type FieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

const Field = forwardRef<HTMLInputElement, FieldProps>(function Field(
  { label, error, ...props },
  ref,
) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-brown-dark">
        {label}
      </label>
      <input ref={ref} className={inputClass(Boolean(error))} {...props} />
      {error ? <p className="mt-1 text-xs text-red-600">{error}</p> : null}
    </div>
  );
});

function ContactLine({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <>
      <span className="flex size-11 items-center justify-center rounded-2xl bg-energy-blue/10 text-energy-blue">
        <Icon className="size-5" />
      </span>
      <span>
        <span className="block text-xs tracking-wide text-dark-gray/60 uppercase">
          {label}
        </span>
        <span className="font-medium text-brown-dark">{value}</span>
      </span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className="flex items-center gap-3 rounded-2xl border border-brown-primary/10 p-4 transition hover:border-brown-primary/30 hover:bg-light-gray"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="flex items-center gap-3 rounded-2xl border border-brown-primary/10 p-4">
      {content}
    </div>
  );
}
