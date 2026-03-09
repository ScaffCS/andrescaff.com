"use client";

import { useTranslation } from "@/hooks/use-translation";

export default function NowPage() {
  const { t, translations } = useTranslation();
  const n = translations.now;

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="pt-12 pb-16 px-6">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-[family-name:var(--font-sora)] text-4xl sm:text-5xl font-bold leading-tight tracking-tight text-stone-900">
            {t(n.title)}
          </h1>
          <p className="mt-4 text-stone-500">
            {t(n.lastUpdated)}{" "}
            <span className="font-[family-name:var(--font-jetbrains-mono)] text-sm text-stone-400">
              {t(n.lastUpdatedDate)}
            </span>
            . Inspired by{" "}
            <a
              href="https://nownownow.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 underline decoration-teal-600/30 hover:decoration-teal-600 transition-colors"
            >
              {t(n.nowMovement)}
            </a>
            .
          </p>
        </div>
      </section>

      {/* ============ CONTENT ============ */}
      <section className="pb-20 px-6">
        <div className="mx-auto max-w-3xl space-y-12">
          {/* Working on */}
          <div>
            <h2 className="font-[family-name:var(--font-sora)] text-xl font-bold text-stone-900">
              {t(n.workingOnTitle)}
            </h2>
            <div className="mt-4 space-y-3">
              {n.workingOn.map((item, i) => (
                <p
                  key={i}
                  className="text-stone-600 leading-relaxed [&_strong]:font-semibold [&_strong]:text-stone-900"
                  dangerouslySetInnerHTML={{
                    __html: t(item)
                      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
                  }}
                />
              ))}
            </div>
          </div>

          {/* Learning */}
          <div>
            <h2 className="font-[family-name:var(--font-sora)] text-xl font-bold text-stone-900">
              {t(n.learningTitle)}
            </h2>
            <div className="mt-4 space-y-3">
              {n.learning.map((item, i) => (
                <p key={i} className="text-stone-600 leading-relaxed">
                  {t(item)}
                </p>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <h2 className="font-[family-name:var(--font-sora)] text-xl font-bold text-stone-900">
              {t(n.toolsTitle)}
            </h2>
            <p className="mt-4 text-stone-600 font-[family-name:var(--font-jetbrains-mono)] text-sm">
              {t(n.tools)}
            </p>
          </div>

          {/* Based in */}
          <div>
            <h2 className="font-[family-name:var(--font-sora)] text-xl font-bold text-stone-900">
              {t(n.basedInTitle)}
            </h2>
            <p className="mt-3 text-stone-600">{t(n.basedIn)}</p>
          </div>
        </div>
      </section>
    </>
  );
}
