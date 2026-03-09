"use client";

import { useTranslation } from "@/hooks/use-translation";

export default function WorkPage() {
  const { t, translations } = useTranslation();
  const w = translations.work;

  return (
    <section className="pt-12 pb-20 px-6">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-[family-name:var(--font-sora)] text-4xl sm:text-5xl font-bold leading-tight tracking-tight text-stone-900">
          {t(w.title)}
        </h1>

        <div className="mt-12 space-y-8">
          {w.projects.map((project, i) => {
            const link = "link" in project ? (project.link as string) : "";
            const logo = "logo" in project ? (project.logo as string) : "";

            const cardContent = (
              <>
                {logo && (
                  <img
                    src={logo}
                    alt={t(project.title)}
                    className="h-5 mb-3"
                  />
                )}
                <h3 className="font-[family-name:var(--font-sora)] text-lg font-semibold text-stone-900 group-hover:text-teal-600 transition-colors">
                  {t(project.title)}
                </h3>
                <p className="text-sm font-[family-name:var(--font-jetbrains-mono)] text-stone-400 mt-1">
                  {t(project.subtitle)}
                </p>
                <p className="mt-4 text-stone-600 leading-relaxed">
                  {t(project.description)}
                </p>
              </>
            );

            const cardClasses =
              "block rounded-xl bg-white p-6 shadow-sm border border-stone-100 group";

            return link ? (
              <a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={cardClasses}
              >
                {cardContent}
              </a>
            ) : (
              <div key={i} className={cardClasses}>
                {cardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
