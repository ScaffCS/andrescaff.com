"use client";

import { useTranslation } from "@/hooks/use-translation";
import {
  Building2,
  Zap,
  Shield,
  Database,
  Monitor,
  Users,
  Star,
} from "lucide-react";

const productIcons = [Building2, Zap, Shield, Database];

export default function WorkPage() {
  const { t, translations } = useTranslation();
  const w = translations.work;

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="pt-12 pb-16 px-6">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-[family-name:var(--font-jetbrains-mono)] text-teal-600 tracking-wider uppercase mb-3">
            Work
          </p>
          <h1 className="font-[family-name:var(--font-sora)] text-4xl sm:text-5xl font-bold leading-tight tracking-tight text-stone-900">
            {t(w.title)}
          </h1>
          <p className="mt-4 text-lg text-stone-500 max-w-2xl">
            {t(w.subtitle)}
          </p>

          {/* Section nav */}
          <div className="mt-8 flex flex-wrap gap-2">
            <a
              href="#product"
              className="rounded-full border border-stone-200 px-4 py-1.5 text-sm text-stone-600 hover:border-teal-600 hover:text-teal-600 transition-colors"
            >
              {t(w.sectionProduct)}
            </a>
            <a
              href="#ai"
              className="rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5 text-sm text-indigo-600 hover:bg-indigo-100 transition-colors"
            >
              {t(w.sectionAI)}
            </a>
            <a
              href="#community"
              className="rounded-full border border-stone-200 px-4 py-1.5 text-sm text-stone-600 hover:border-teal-600 hover:text-teal-600 transition-colors"
            >
              {t(w.sectionCommunity)}
            </a>
          </div>
        </div>
      </section>

      {/* ============ PRODUCT LEADERSHIP ============ */}
      <section id="product" className="py-16 px-6 scroll-mt-24">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-600/10">
              <Building2 className="w-5 h-5 text-teal-600" />
            </div>
            <div>
              <h2 className="font-[family-name:var(--font-sora)] text-2xl font-bold text-stone-900">
                {t(w.productHeadline)}
              </h2>
              <p className="text-sm text-stone-500">{t(w.productSubtitle)}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {w.productProjects.map((project, i) => {
              const Icon = productIcons[i];
              return (
                <div
                  key={i}
                  className="card-lift rounded-xl bg-white p-6 shadow-sm border border-stone-100"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-stone-100">
                      <Icon className="w-4 h-4 text-stone-500" />
                    </div>
                    <div>
                      <h3 className="font-[family-name:var(--font-sora)] font-semibold text-stone-900">
                        {t(project.title)}
                      </h3>
                      <p className="text-xs font-[family-name:var(--font-jetbrains-mono)] text-teal-600 mt-0.5">
                        {t(project.company)}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 space-y-3 text-sm">
                    <div>
                      <span className="text-stone-400 text-xs uppercase tracking-wider">
                        {t(w.challengeLabel)}
                      </span>
                      <p className="text-stone-600 mt-0.5">
                        {t(project.challenge)}
                      </p>
                    </div>
                    <div>
                      <span className="text-stone-400 text-xs uppercase tracking-wider">
                        {t(w.approachLabel)}
                      </span>
                      <p className="text-stone-600 mt-0.5">
                        {t(project.approach)}
                      </p>
                    </div>
                    <div>
                      <span className="text-stone-400 text-xs uppercase tracking-wider">
                        {t(w.impactLabel)}
                      </span>
                      <p className="text-stone-800 font-medium mt-0.5">
                        {t(project.impact)}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ AI & CODE ============ */}
      <section
        id="ai"
        className="py-16 px-6 bg-indigo-50/30 scroll-mt-24"
      >
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center gap-3 mb-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/10">
              <Monitor className="w-5 h-5 text-indigo-500" />
            </div>
            <div>
              <h2 className="font-[family-name:var(--font-sora)] text-2xl font-bold text-stone-900">
                {t(w.aiHeadline)}
              </h2>
              <p className="text-sm text-stone-500">{t(w.aiSubtitle)}</p>
            </div>
          </div>

          {/* Handwritten annotation */}
          <p className="font-[family-name:var(--font-caveat)] text-lg text-indigo-500 mb-8 ml-14">
            {t(w.aiAnnotation)}
          </p>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {w.aiProjects.map((project, i) => (
              <div
                key={i}
                className="card-lift rounded-xl bg-white p-6 shadow-sm border border-indigo-100/50 group"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-[family-name:var(--font-jetbrains-mono)] text-indigo-500 bg-indigo-500/5 px-2 py-0.5 rounded-md">
                    {t(project.tag)}
                  </span>
                </div>
                <h3 className="font-[family-name:var(--font-sora)] text-lg font-semibold text-stone-900 group-hover:text-indigo-500 transition-colors">
                  {t(project.title)}
                </h3>
                <p className="mt-2 text-sm text-stone-500 leading-relaxed">
                  {t(project.description)}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className={`text-xs font-[family-name:var(--font-jetbrains-mono)] px-2 py-0.5 rounded ${
                        tech.includes("Claude")
                          ? "text-indigo-400 bg-indigo-50"
                          : "text-stone-400 bg-stone-100"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-sm text-stone-400 italic">
                  {t(project.learned)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ COMMUNITY ============ */}
      <section id="community" className="py-16 px-6 scroll-mt-24">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-600/10">
              <Users className="w-5 h-5 text-teal-600" />
            </div>
            <div>
              <h2 className="font-[family-name:var(--font-sora)] text-2xl font-bold text-stone-900">
                {t(w.communityHeadline)}
              </h2>
              <p className="text-sm text-stone-500">
                {t(w.communitySubtitle)}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {w.communityProjects.map((project, i) => (
              <div
                key={i}
                className="card-lift rounded-xl bg-white p-6 shadow-sm border border-stone-100"
              >
                {i === 3 && (
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-5 h-5 text-teal-600" />
                  </div>
                )}
                <h3 className="font-[family-name:var(--font-sora)] font-semibold text-stone-900">
                  {t(project.title)}
                </h3>
                <p className="mt-2 text-sm text-stone-500">
                  {t(project.description)}
                </p>
                {t(project.detail) && (
                  <p className="mt-1 text-sm text-stone-500">
                    {t(project.detail)}
                  </p>
                )}
                <p className="mt-2 text-sm text-stone-800 font-medium">
                  {t(project.impact)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
