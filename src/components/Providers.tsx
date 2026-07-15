"use client";

import { LanguageProvider } from "@/i18n/LanguageProvider";
import { ScrollProgress } from "@/components/ScrollProgress";
import { SmoothScroll } from "@/components/SmoothScroll";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <SmoothScroll>
        <ScrollProgress />
        {children}
      </SmoothScroll>
    </LanguageProvider>
  );
}
