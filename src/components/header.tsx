"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";

const navLinks = [
  { href: "/", key: "home" as const },
  { href: "/work", key: "work" as const },
  { href: "/about", key: "about" as const },
  { href: "/now", key: "now" as const },
  { href: "/contact", key: "contact" as const },
];

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { locale, toggleLocale, t, translations } = useTranslation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-stone-200/60 bg-stone-50/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="text-xl font-[family-name:var(--font-sora)] font-bold tracking-tight text-stone-900">
            scaff<span className="text-teal-600">.</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm transition-colors duration-150 ${
                  pathname === link.href
                    ? "font-medium text-teal-600"
                    : "text-stone-500 hover:text-stone-900"
                }`}
              >
                {t(translations.nav[link.key])}
              </Link>
            </li>
          ))}
        </ul>

        {/* Language Toggle + Mobile Menu Button */}
        <div className="flex items-center gap-3">
          {/* Language Toggle */}
          <div className="flex items-center gap-1 rounded-full border border-stone-200 px-1 py-0.5 text-xs">
            <button
              onClick={locale === "pt" ? toggleLocale : undefined}
              className={`rounded-full px-2.5 py-1 font-medium transition-colors ${
                locale === "en"
                  ? "bg-stone-900 text-white"
                  : "text-stone-500 hover:text-stone-700"
              }`}
            >
              EN
            </button>
            <button
              onClick={locale === "en" ? toggleLocale : undefined}
              className={`rounded-full px-2.5 py-1 font-medium transition-colors ${
                locale === "pt"
                  ? "bg-stone-900 text-white"
                  : "text-stone-500 hover:text-stone-700"
              }`}
            >
              PT
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-stone-500 hover:text-stone-900 md:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="border-t border-stone-200/60 bg-stone-50/95 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block text-base transition-colors duration-150 ${
                    pathname === link.href
                      ? "font-medium text-teal-600"
                      : "text-stone-500 hover:text-stone-900"
                  }`}
                >
                  {t(translations.nav[link.key])}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
