import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Boxes,
  Code2,
  Users,
  Podcast,
  Rocket,
  Award,
  Network,
  Truck,
  Shield,
  Cpu,
  Globe,
  ArrowUpRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Portfólio — André Scaff",
  description:
    "Trajetória em produto, projetos com IA & Code, e iniciativas de comunidade e empreendedorismo.",
};

/* ============================================
   DATA — Portfolio items
   ============================================ */

const productCareer = [
  {
    icon: Truck,
    title: "Plataforma TMS Enterprise",
    context: "Loadsmart — Staff Product Manager",
    challenge:
      "Definir estratégia de produto e caminho para rentabilidade de plataforma TMS usada por grandes embarcadores.",
    approach:
      "Liderança de times de até 30 pessoas, alinhamento de roadmap com estratégia de negócio, foco em integrações enterprise.",
    impact: "Plataforma referência em logística tech nos EUA.",
  },
  {
    icon: Network,
    title: "Programas de Frota Privada e Dedicada",
    context: "Loadsmart — Product Lead",
    challenge:
      "Criar e escalar programas de frota que atendessem grandes embarcadores com operações complexas.",
    approach:
      "Design de produto desde discovery até scale, integrações com sistemas legados, pricing dinâmico.",
    impact: "Programas operando em escala com múltiplos clientes enterprise.",
  },
  {
    icon: Shield,
    title: "Produto SaaS de Customer Success",
    context: "Movidesk",
    challenge:
      "Estruturar o produto que ajudaria a empresa a alcançar uma rodada Series A.",
    approach:
      "Product management focado em diferenciação competitiva e métricas de retenção.",
    impact: "Contribuição para captação de rodada Series A.",
  },
  {
    icon: Boxes,
    title: "Integrações Enterprise e APIs",
    context: "Loadsmart — Plataforma de Integrações",
    challenge:
      "Construir camada de integrações que conectasse a plataforma com ERPs e TMSs dos clientes.",
    approach:
      "Arquitetura de APIs, webhooks, e conectores para sistemas enterprise.",
    impact: "Redução significativa do tempo de onboarding de novos clientes.",
  },
];

const aiProjects = [
  {
    icon: Cpu,
    title: "Life-OS",
    description:
      "Sistema de gestão pessoal com IA — finanças, hábitos e planejamento. Construído com Claude + Next.js + Supabase.",
    stack: ["Next.js", "Supabase", "Claude API", "Tailwind"],
    learning: "Como construir um produto completo com IA generativa como copiloto.",
  },
  {
    icon: Globe,
    title: "Site para Estúdio de Design",
    description:
      "Site institucional para estúdio de design de interiores e móveis. Construído com ferramentas de IA.",
    stack: ["Next.js", "Tailwind", "Vercel"],
    learning: "Prototipagem rápida e iteração visual com ferramentas de IA.",
  },
];

const communityProjects = [
  {
    icon: Podcast,
    title: "Cliente Cast",
    what: "Podcast referência em Customer Success e CX no Brasil.",
    built: "60+ episódios com líderes da indústria.",
    impact: "Referência para profissionais de CS no Brasil.",
  },
  {
    icon: Users,
    title: "CS Meetup Brasil",
    what: "Maior comunidade de Customer Success do Brasil.",
    built:
      "De 1 evento em 1 cidade para 23 eventos em 13 cidades com 32 voluntários.",
    impact: "Criou a comunidade que não existia no país.",
  },
  {
    icon: Rocket,
    title: "Ontrack",
    what: "Startup de Customer Success.",
    built: "Co-fundação e captação de rodada angel.",
    impact: "Experiência de criar uma startup do zero e levantar capital.",
  },
  {
    icon: Award,
    title: "Top 100 CS Professionals",
    what: "Reconhecimento global pela Success Coaching em 2020.",
    built: "Eleito por voto público entre profissionais do mundo todo.",
    impact: "Validação internacional do trabalho em CS.",
  },
];

export default function PortfolioPage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="py-24 px-6 bg-grid relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(0,212,170,0.06)_0%,_transparent_60%)]" />
        <div className="relative z-10 mx-auto max-w-6xl">
          <p className="text-sm font-mono text-accent-teal tracking-wider uppercase animate-fade-up stagger-1">
            Portfólio
          </p>
          <h1 className="mt-3 text-4xl font-extrabold text-text-primary md:text-6xl animate-fade-up stagger-2">
            O que eu já construí
          </h1>
          <p className="mt-4 text-lg text-text-secondary max-w-2xl animate-fade-up stagger-3">
            9+ anos de carreira em tecnologia, produto e comunidade. Aqui está o
            resumo do caminho.
          </p>
        </div>
      </section>

      {/* ============ TRAJETÓRIA EM PRODUTO ============ */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-10">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-teal/10">
              <Boxes size={20} className="text-accent-teal" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-text-primary">
                Trajetória em Produto
              </h2>
              <p className="text-sm text-text-secondary">
                Resumos de alto nível — sem dados confidenciais.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {productCareer.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-xl border border-border-subtle bg-bg-card p-6 hover:border-accent-teal/20 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-bg-secondary">
                      <Icon size={18} className="text-text-muted" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-text-primary">
                        {item.title}
                      </h3>
                      <p className="text-xs font-mono text-accent-teal mt-0.5">
                        {item.context}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 space-y-3 text-sm">
                    <div>
                      <span className="text-text-muted">Desafio:</span>
                      <p className="text-text-secondary">{item.challenge}</p>
                    </div>
                    <div>
                      <span className="text-text-muted">Abordagem:</span>
                      <p className="text-text-secondary">{item.approach}</p>
                    </div>
                    <div>
                      <span className="text-text-muted">Impacto:</span>
                      <p className="text-text-primary font-medium">
                        {item.impact}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ PROJETOS COM IA & CODE ============ */}
      <section className="bg-bg-secondary py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-10">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-amber/10">
              <Code2 size={20} className="text-accent-amber" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-text-primary">
                Projetos com IA & Code
              </h2>
              <p className="text-sm text-text-secondary">
                Construído com as mãos na massa usando ferramentas de IA.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {aiProjects.map((project) => {
              const Icon = project.icon;
              return (
                <div
                  key={project.title}
                  className="rounded-xl border border-border-subtle bg-bg-card p-6 hover:border-accent-amber/20 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-amber/10">
                      <Icon size={18} className="text-accent-amber" />
                    </div>
                    <h3 className="text-lg font-semibold text-text-primary">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-bg-secondary px-2.5 py-1 text-xs font-mono text-text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="mt-4 text-sm text-text-muted italic">
                    {project.learning}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ COMUNIDADE & EMPREENDEDORISMO ============ */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-10">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-teal/10">
              <Users size={20} className="text-accent-teal" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-text-primary">
                Comunidade & Empreendedorismo
              </h2>
              <p className="text-sm text-text-secondary">
                O que construí fora das empresas onde trabalhei.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {communityProjects.map((project) => {
              const Icon = project.icon;
              return (
                <div
                  key={project.title}
                  className="rounded-xl border border-border-subtle bg-bg-card p-6 hover:border-accent-teal/20 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Icon size={20} className="text-accent-teal" />
                    <h3 className="font-semibold text-text-primary">
                      {project.title}
                    </h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <p className="text-text-secondary">{project.what}</p>
                    <p className="text-text-secondary">{project.built}</p>
                    <p className="text-text-primary font-medium">
                      {project.impact}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="bg-bg-secondary py-20 px-6 bg-grid relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(0,212,170,0.06)_0%,_transparent_70%)]" />
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-text-primary md:text-4xl">
            Curtiu o que viu?
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Vamos trabalhar juntos.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/consultoria"
              className="inline-flex items-center gap-2 rounded-lg border border-accent-amber/50 bg-accent-amber/10 px-8 py-3.5 font-semibold text-accent-amber transition-all duration-150 hover:bg-accent-amber/20"
            >
              Conheça a consultoria
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/contato"
              className="inline-flex items-center gap-2 rounded-lg bg-accent-teal px-8 py-3.5 font-semibold text-bg-primary transition-all duration-150 hover:bg-accent-teal-hover glow-teal"
            >
              Fala comigo
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
