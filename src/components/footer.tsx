"use client";

import Link from "next/link";
import { Linkedin, Github, Mail } from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";

export function Footer() {
  const { t, translations } = useTranslation();
  const f = translations.footer;

  return (
    <footer className="border-t border-stone-200 bg-stone-50">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          {/* Logo + tagline */}
          <div>
            <span className="text-lg font-[family-name:var(--font-sora)] font-bold tracking-tight text-stone-900">
              scaff<span className="text-teal-600">.</span>
            </span>
            <p className="mt-1 text-sm text-stone-400">{t(f.tagline)}</p>
          </div>

          {/* Nav */}
          <nav className="flex gap-8">
            <Link
              href="/work"
              className="text-sm text-stone-500 hover:text-stone-900 transition-colors"
            >
              {t(translations.nav.work)}
            </Link>
            <Link
              href="/about"
              className="text-sm text-stone-500 hover:text-stone-900 transition-colors"
            >
              {t(translations.nav.about)}
            </Link>
            <Link
              href="/now"
              className="text-sm text-stone-500 hover:text-stone-900 transition-colors"
            >
              {t(translations.nav.now)}
            </Link>
            <Link
              href="/contact"
              className="text-sm text-stone-500 hover:text-stone-900 transition-colors"
            >
              {t(translations.nav.contact)}
            </Link>
          </nav>

          {/* Social */}
          <div className="flex gap-4">
            <a
              href="https://linkedin.com/in/andrescaff"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-400 hover:text-teal-600 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/ScaffCS"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-400 hover:text-teal-600 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="mailto:contato@andrescaff.com"
              className="text-stone-400 hover:text-teal-600 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-stone-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-stone-400">
            &copy; {new Date().getFullYear()} {t(f.rights)}
          </p>
          <p className="text-xs text-stone-400 flex items-center gap-1.5">
            {t(f.builtWith)}{" "}
            <span className="font-[family-name:var(--font-jetbrains-mono)] text-indigo-500">
              Claude Code
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
