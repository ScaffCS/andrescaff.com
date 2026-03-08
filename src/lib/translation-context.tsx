"use client";

import { createContext, useState, useCallback, type ReactNode } from "react";
import { type Locale } from "./translations";

interface TranslationContextValue {
  locale: Locale;
  toggleLocale: () => void;
}

export const TranslationContext = createContext<TranslationContextValue>({
  locale: "en",
  toggleLocale: () => {},
});

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");

  const toggleLocale = useCallback(() => {
    setLocale((prev) => (prev === "en" ? "pt" : "en"));
  }, []);

  return (
    <TranslationContext value={{ locale, toggleLocale }}>
      {children}
    </TranslationContext>
  );
}
