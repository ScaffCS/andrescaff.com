"use client";

import Link from "next/link";
import { useTranslation } from "@/hooks/use-translation";
import { useEffect } from "react";
import {
  BarChart3,
  Monitor,
  Users,
  Globe,
  ChevronRight,
  Star,
  Briefcase,
} from "lucide-react";

const capabilityIcons = [BarChart3, Monitor, Users, Globe];

export default function HomePage() {
  const { t, translations, locale } = useTranslation();
  const h = translations.home;

  // Tab title change on blur
  useEffect(() => {
    const originalTitle = document.title;
    const handler = () => {
      document.title = document.hidden
        ? t(translations.tabBlurTitle)
        : originalTitle;
    };
    document.addEventListener("visibilitychange", handler);
    return () => document.removeEventListener("visibilitychange", handler);
  }, [locale]);

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="pt-12 pb-20 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
            {/* Photo */}
            <div className="relative order-2 md:order-1">
              <div className="aspect-[4/5] rounded-2xl bg-stone-200 overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <svg
                      className="w-16 h-16 mx-auto text-stone-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                      />
                    </svg>
                    <p className="mt-2 text-sm text-stone-400">
                      {t(h.photoAlt)}
                    </p>
                  </div>
                </div>
              </div>
              {/* Handwritten annotation */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2">
                <span className="font-[family-name:var(--font-caveat)] text-xl text-teal-600 inline-block">
                  {t(h.thatsMe)}
                </span>
              </div>
            </div>

            {/* Text */}
            <div className="order-1 md:order-2">
              <p className="text-stone-500 text-sm font-[family-name:var(--font-jetbrains-mono)] tracking-wider uppercase mb-4">
                {t(h.subtitle)}
              </p>
              <h1 className="font-[family-name:var(--font-sora)] text-4xl sm:text-5xl font-bold leading-[1.1] tracking-tight text-stone-900">
                {t(h.greeting)}
                <span className="text-teal-600">.</span>
              </h1>
              <p className="mt-6 text-lg text-stone-600 leading-relaxed">
                {t(h.bio1)}
              </p>
              <p className="mt-3 text-lg text-stone-600 leading-relaxed">
                {t(h.bio2)}{" "}
                <span className="font-medium text-stone-800">
                  {t(h.bio2Company)}
                </span>
                {t(h.bio2Rest)}
              </p>

              {/* Social links */}
              <div className="mt-8 flex items-center gap-5">
                <a
                  href="https://linkedin.com/in/andrescaff"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-stone-500 hover:text-teal-600 transition-colors text-sm"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
                <a
                  href="https://github.com/ScaffCS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-stone-500 hover:text-teal-600 transition-colors text-sm"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                </a>
                <a
                  href="mailto:contato@andrescaff.com"
                  className="flex items-center gap-2 text-stone-500 hover:text-teal-600 transition-colors text-sm"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ WHAT I DO ============ */}
      <section className="py-20 px-6 bg-stone-100/50">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-[family-name:var(--font-jetbrains-mono)] text-teal-600 tracking-wider uppercase mb-2">
            {t(h.whatIDo)}
          </p>
          <h2 className="font-[family-name:var(--font-sora)] text-2xl sm:text-3xl font-bold text-stone-900">
            {t(h.whatIDoHeadline)}
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {h.capabilities.map((cap, i) => {
              const Icon = capabilityIcons[i];
              const isAI = i === 1;
              return (
                <div
                  key={i}
                  className="card-lift rounded-xl bg-white p-5 shadow-sm border border-stone-100"
                >
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-lg mb-4 ${
                      isAI ? "bg-indigo-500/10" : "bg-teal-600/10"
                    }`}
                  >
                    <Icon
                      className={`w-5 h-5 ${isAI ? "text-indigo-500" : "text-teal-600"}`}
                    />
                  </div>
                  <h3 className="font-[family-name:var(--font-sora)] font-semibold text-stone-900">
                    {t(cap.title)}
                  </h3>
                  <p className="mt-1.5 text-sm text-stone-500 leading-relaxed">
                    {t(cap.description)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ FEATURED WORK ============ */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-sm font-[family-name:var(--font-jetbrains-mono)] text-teal-600 tracking-wider uppercase mb-2">
                {t(h.featuredWork)}
              </p>
              <h2 className="font-[family-name:var(--font-sora)] text-2xl sm:text-3xl font-bold text-stone-900">
                {t(h.featuredWorkHeadline)}
              </h2>
            </div>
            <Link
              href="/work"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm text-stone-500 hover:text-teal-600 transition-colors"
            >
              {t(h.viewAllWork)}
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {h.featuredProjects.map((project, i) => {
              const isAI = i === 1;
              return (
                <div
                  key={i}
                  className="card-lift rounded-xl bg-white p-6 shadow-sm border border-stone-100 group cursor-pointer"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span
                      className={`text-xs font-[family-name:var(--font-jetbrains-mono)] px-2 py-0.5 rounded-md ${
                        isAI
                          ? "text-indigo-500 bg-indigo-500/5"
                          : "text-teal-600 bg-teal-600/5"
                      }`}
                    >
                      {t(project.tag)}
                    </span>
                  </div>
                  <h3
                    className={`font-[family-name:var(--font-sora)] font-semibold text-stone-900 transition-colors ${
                      isAI
                        ? "group-hover:text-indigo-500"
                        : "group-hover:text-teal-600"
                    }`}
                  >
                    {t(project.title)}
                  </h3>
                  <p className="mt-2 text-sm text-stone-500 leading-relaxed">
                    {t(project.description)}
                  </p>
                  {"meta" in project && project.meta && (
                    <p className="mt-3 text-xs font-[family-name:var(--font-jetbrains-mono)] text-stone-400">
                      {t(project.meta)}
                    </p>
                  )}
                  {"stack" in project && project.stack && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-[family-name:var(--font-jetbrains-mono)] text-stone-400 bg-stone-100 px-2 py-0.5 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <Link
            href="/work"
            className="mt-6 inline-flex items-center gap-1.5 text-sm text-stone-500 hover:text-teal-600 transition-colors sm:hidden"
          >
            {t(h.viewAllWork)}
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ============ CREDENTIALS ============ */}
      <section className="py-16 px-6 bg-stone-100/50">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {h.credentials.map((cred, i) => (
              <div key={i} className="text-center">
                <span className="block font-[family-name:var(--font-sora)] text-3xl sm:text-4xl font-bold text-teal-600">
                  {cred.number}
                </span>
                <span className="mt-1 block text-sm text-stone-500">
                  {t(cred.label)}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-stone-400">
            {h.badges.map((badge, i) => (
              <div key={i} className="flex items-center gap-2">
                {i === 0 ? (
                  <Star className="w-4 h-4 text-teal-600" />
                ) : (
                  <Briefcase className="w-4 h-4 text-teal-600" />
                )}
                {t(badge)}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
