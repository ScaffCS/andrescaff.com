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
          <p className="text-sm font-[family-name:var(--font-jetbrains-mono)] text-teal-600 tracking-wider uppercase mb-3">
            Now
          </p>
          <h1 className="font-[family-name:var(--font-sora)] text-4xl sm:text-5xl font-bold leading-tight tracking-tight text-stone-900">
            {t(n.title)}
          </h1>
          <p className="mt-4 text-stone-500">
            Inspired by the{" "}
            <a
              href="https://nownownow.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 underline decoration-teal-600/30 hover:decoration-teal-600 transition-colors"
            >
              {t(n.nowMovement)}
            </a>
            . {t(n.lastUpdated)}{" "}
            <span className="font-[family-name:var(--font-jetbrains-mono)] text-sm text-stone-400">
              {t(n.lastUpdatedDate)}
            </span>
            .
          </p>
        </div>
      </section>

      {/* ============ CONTENT ============ */}
      <section className="pb-20 px-6">
        <div className="mx-auto max-w-3xl space-y-12">
          {/* Working on */}
          <div>
            <h2 className="font-[family-name:var(--font-sora)] text-xl font-bold text-stone-900 flex items-center gap-2">
              <span className="text-2xl">&#x1f528;</span> {t(n.workingOnTitle)}
            </h2>
            <div className="mt-4 space-y-4">
              {n.workingOn.map((item, i) => {
                const isAI = "isAI" in item && item.isAI;
                return (
                  <div
                    key={i}
                    className={`rounded-xl bg-white p-5 shadow-sm border ${
                      isAI ? "border-indigo-100/50" : "border-stone-100"
                    }`}
                  >
                    {isAI && (
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-[family-name:var(--font-jetbrains-mono)] text-indigo-500 bg-indigo-50 px-2 py-0.5 rounded">
                          AI Project
                        </span>
                      </div>
                    )}
                    <h3 className="font-semibold text-stone-900">
                      {t(item.title)}
                    </h3>
                    <p className="mt-1 text-sm text-stone-500">
                      {t(item.description)}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Learning */}
          <div>
            <h2 className="font-[family-name:var(--font-sora)] text-xl font-bold text-stone-900 flex items-center gap-2">
              <span className="text-2xl">&#x1f4da;</span> {t(n.learningTitle)}
            </h2>
            <div className="mt-4 space-y-3">
              {n.learning.map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl bg-white p-5 shadow-sm border border-stone-100"
                >
                  <h3 className="font-semibold text-stone-900">
                    {t(item.title)}
                  </h3>
                  <p className="mt-1 text-sm text-stone-500">
                    {t(item.description)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Current stack */}
          <div>
            <h2 className="font-[family-name:var(--font-sora)] text-xl font-bold text-stone-900 flex items-center gap-2">
              <span className="text-2xl">&#x1f6e0;&#xfe0f;</span>{" "}
              {t(n.stackTitle)}
            </h2>
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {n.stack.map((tool, i) => (
                <div
                  key={i}
                  className="rounded-lg bg-white p-3 shadow-sm border border-stone-100 text-center"
                >
                  <span
                    className={`font-[family-name:var(--font-jetbrains-mono)] text-sm ${
                      i === 0 ? "text-indigo-500" : "text-stone-700"
                    }`}
                  >
                    {tool.name}
                  </span>
                  <p className="text-xs text-stone-400 mt-0.5">
                    {t(tool.description)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Reading */}
          <div>
            <h2 className="font-[family-name:var(--font-sora)] text-xl font-bold text-stone-900 flex items-center gap-2">
              <span className="text-2xl">&#x1f4d6;</span> {t(n.readingTitle)}
            </h2>
            <div className="mt-4 space-y-3">
              {n.reading.map((book, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm border border-stone-100"
                >
                  <div className="w-10 h-14 rounded bg-stone-200 shrink-0" />
                  <div>
                    <p className="font-medium text-stone-900 text-sm">
                      {book.title}
                    </p>
                    <p className="text-xs text-stone-400">{book.author}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-3 font-[family-name:var(--font-caveat)] text-lg text-stone-400">
              {t(n.readingNote)}
            </p>
          </div>

          {/* Location */}
          <div>
            <h2 className="font-[family-name:var(--font-sora)] text-xl font-bold text-stone-900 flex items-center gap-2">
              <span className="text-2xl">&#x1f4cd;</span> {t(n.basedInTitle)}
            </h2>
            <p className="mt-3 text-stone-600">{t(n.basedIn)}</p>
          </div>
        </div>
      </section>
    </>
  );
}
