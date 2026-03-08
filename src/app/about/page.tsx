"use client";

import Link from "next/link";
import { useTranslation } from "@/hooks/use-translation";
import {
  BookOpen,
  Zap,
  Briefcase,
  Monitor,
  ChevronRight,
} from "lucide-react";

const actIcons = [BookOpen, Zap, Briefcase, Monitor];
const actColors = ["teal", "indigo", "teal", "indigo"] as const;

export default function AboutPage() {
  const { t, translations } = useTranslation();
  const a = translations.about;

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="pt-12 pb-16 px-6">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-[family-name:var(--font-jetbrains-mono)] text-teal-600 tracking-wider uppercase mb-3">
            About
          </p>
          <h1 className="font-[family-name:var(--font-sora)] text-4xl sm:text-5xl font-bold leading-tight tracking-tight text-stone-900">
            {t(a.title)}
          </h1>
          <p className="mt-4 text-lg text-stone-500 max-w-2xl">
            {t(a.subtitle)}
          </p>
        </div>
      </section>

      {/* ============ TIMELINE ============ */}
      <section className="py-12 px-6">
        <div className="mx-auto max-w-3xl">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[23px] top-0 bottom-0 w-px bg-stone-200 md:left-1/2 md:-translate-x-px" />

            <div className="space-y-14">
              {a.acts.map((act, i) => {
                const Icon = actIcons[i];
                const color = actColors[i];
                const isLeft = i % 2 === 0;

                return (
                  <div key={i} className="relative">
                    {/* Circle */}
                    <div
                      className={`absolute left-0 flex h-12 w-12 items-center justify-center rounded-full border-2 z-10 md:left-1/2 md:-translate-x-1/2 ${
                        color === "teal"
                          ? "border-teal-600/20 bg-teal-50"
                          : "border-indigo-500/20 bg-indigo-50"
                      }`}
                    >
                      <Icon
                        className={`w-5 h-5 ${color === "teal" ? "text-teal-600" : "text-indigo-500"}`}
                      />
                    </div>

                    {/* Card */}
                    <div
                      className={`ml-16 md:ml-0 md:w-[calc(50%-40px)] ${
                        isLeft ? "md:mr-auto" : "md:ml-auto"
                      }`}
                    >
                      <div className="rounded-xl bg-white p-6 shadow-sm border border-stone-100">
                        <div className="flex items-center gap-3 mb-3">
                          <span
                            className={`font-[family-name:var(--font-sora)] text-2xl font-extrabold font-[family-name:var(--font-jetbrains-mono)] ${
                              color === "teal"
                                ? "text-teal-600/30"
                                : "text-indigo-500/30"
                            }`}
                          >
                            {act.number}
                          </span>
                          <div>
                            <h3 className="font-[family-name:var(--font-sora)] text-xl font-bold text-stone-900">
                              {t(act.title)}
                            </h3>
                            <p className="text-xs font-[family-name:var(--font-jetbrains-mono)] text-stone-400">
                              {t(act.period)}
                            </p>
                          </div>
                        </div>
                        <p className="text-stone-600 leading-relaxed">
                          {t(act.description)}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ============ BELIEFS ============ */}
      <section className="py-16 px-6 bg-stone-100/50">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-[family-name:var(--font-sora)] text-2xl font-bold text-stone-900 mb-8">
            {t(a.beliefsTitle)}
          </h2>

          <div className="space-y-6">
            {a.beliefs.map((belief, i) => (
              <blockquote
                key={i}
                className={`border-l-2 pl-6 ${
                  i % 2 === 0 ? "border-teal-600" : "border-indigo-500"
                }`}
              >
                <p className="text-lg text-stone-600 leading-relaxed italic">
                  &ldquo;{t(belief)}&rdquo;
                </p>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CONNECT ============ */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
            {/* Photo placeholder */}
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
                    Casual photo here
                  </p>
                </div>
              </div>
            </div>

            {/* Links */}
            <div>
              <h2 className="font-[family-name:var(--font-sora)] text-2xl font-bold text-stone-900">
                {t(a.connectTitle)}
              </h2>
              <p className="mt-3 text-stone-500 leading-relaxed">
                {t(a.connectSubtitle)}
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href="https://linkedin.com/in/andrescaff"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm border border-stone-100 hover:border-teal-600/30 transition-colors group"
                >
                  <svg
                    className="w-6 h-6 text-stone-400 group-hover:text-teal-600 transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <div>
                    <p className="font-medium text-stone-900 group-hover:text-teal-600 transition-colors">
                      LinkedIn
                    </p>
                    <p className="text-sm text-stone-400">/in/andrescaff</p>
                  </div>
                </a>

                <a
                  href="https://github.com/ScaffCS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm border border-stone-100 hover:border-teal-600/30 transition-colors group"
                >
                  <svg
                    className="w-6 h-6 text-stone-400 group-hover:text-teal-600 transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <div>
                    <p className="font-medium text-stone-900 group-hover:text-teal-600 transition-colors">
                      GitHub
                    </p>
                    <p className="text-sm text-stone-400">@ScaffCS</p>
                  </div>
                </a>
              </div>

              <Link
                href="/work"
                className="mt-8 inline-flex items-center gap-2 text-teal-600 font-medium hover:gap-3 transition-all duration-150"
              >
                {t(a.seeWork)}
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
