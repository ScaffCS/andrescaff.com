"use client";

import { useContext } from "react";
import { TranslationContext } from "@/lib/translation-context";
import { translations, type Locale } from "@/lib/translations";

export function useTranslation() {
  const { locale, toggleLocale } = useContext(TranslationContext);

  function t(obj: { en: string; pt: string }): string {
    return obj[locale];
  }

  return { locale, toggleLocale, t, translations };
}

/** Helper to get a translated string outside of React (for metadata, etc.) */
export function getTranslated(
  obj: { en: string; pt: string },
  locale: Locale
): string {
  return obj[locale];
}
