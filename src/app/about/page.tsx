"use client";

import { useTranslation } from "@/hooks/use-translation";

export default function AboutPage() {
  const { t, translations } = useTranslation();
  const a = translations.about;

  return (
    <section className="pt-12 pb-20 px-6">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-[family-name:var(--font-sora)] text-4xl sm:text-5xl font-bold leading-tight tracking-tight text-stone-900">
          {t(a.title)}
        </h1>

        {/* Bio as continuous prose */}
        <div className="mt-10 space-y-6">
          {a.bio.map((paragraph, i) => (
            <p key={i} className="text-lg text-stone-600 leading-relaxed">
              {t(paragraph)}
            </p>
          ))}
        </div>

        {/* Links */}
        <div className="mt-12 space-y-3">
          <a
            href="https://linkedin.com/in/andrescaff"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-stone-600 hover:text-teal-600 transition-colors"
          >
            {t(a.links.linkedin)}
          </a>
          <a
            href="https://github.com/ScaffCS"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-stone-600 hover:text-teal-600 transition-colors"
          >
            {t(a.links.github)}
          </a>
          <a
            href="mailto:contato@andrescaff.com"
            className="block text-stone-600 hover:text-teal-600 transition-colors"
          >
            {t(a.links.email)}
          </a>
        </div>
      </div>
    </section>
  );
}
