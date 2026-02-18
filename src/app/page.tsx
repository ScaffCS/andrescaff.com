import Link from "next/link";
import {
  ArrowRight,
  Boxes,
  Code2,
  Users,
  MessageCircle,
  Calendar,
  Award,
  GraduationCap,
  Briefcase,
  Cpu,
} from "lucide-react";

const featuredProjects = [
  {
    icon: Boxes,
    category: "Produto",
    title: "Plataforma TMS Enterprise",
    description:
      "Estratégia de produto e rentabilidade para plataforma de logística usada por grandes embarcadores.",
  },
  {
    icon: Cpu,
    category: "IA & Code",
    title: "Life-OS",
    description:
      "Sistema de gestão pessoal com IA — finanças, hábitos e planejamento. Construído com Claude + Next.js.",
  },
  {
    icon: Users,
    category: "Comunidade",
    title: "CS Meetup Brasil",
    description:
      "De 1 evento em 1 cidade para 23 eventos em 13 cidades com 32 voluntários.",
  },
];

const credentials = [
  { number: "250+", label: "startups mentoreadas" },
  { number: "9+", label: "anos em tech" },
  { number: "7+", label: "anos em produto" },
  { number: "10", label: "anos como professor" },
];

export default function Home() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 text-center bg-grid">
        {/* Subtle radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,212,170,0.08)_0%,_transparent_70%)]" />

        <div className="relative z-10 max-w-4xl">
          <h1 className="animate-fade-up stagger-1 text-4xl font-extrabold leading-[1.1] tracking-tight text-text-primary sm:text-5xl md:text-7xl">
            Suas melhores ideias
            <br />
            <span className="text-accent-teal">merecem virar realidade.</span>
          </h1>

          <p className="animate-fade-up stagger-2 mt-6 text-lg text-text-secondary md:text-xl max-w-2xl mx-auto">
            Product leader, mentor e builder. 9+ anos em tecnologia, 7+ em
            produto, 250+ startups mentoreadas.
          </p>

          <div className="animate-fade-up stagger-3 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 rounded-lg bg-accent-teal px-8 py-3.5 font-semibold text-bg-primary transition-all duration-150 hover:bg-accent-teal-hover hover:gap-3 glow-teal"
            >
              Ver portfólio
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/sobre"
              className="inline-flex items-center gap-2 rounded-lg border border-border-subtle px-8 py-3.5 font-medium text-text-primary transition-colors duration-150 hover:border-accent-teal/40 hover:text-accent-teal"
            >
              Conhecer minha história
            </Link>
          </div>
        </div>
      </section>

      {/* ============ PORTFÓLIO EM DESTAQUE ============ */}
      <section className="bg-bg-secondary py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-sm font-mono text-accent-teal tracking-wider uppercase">
                Portfólio
              </p>
              <h2 className="mt-2 text-3xl font-bold text-text-primary md:text-4xl">
                O que eu já construí
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="hidden md:inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-accent-teal transition-colors"
            >
              Ver todos os projetos
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {featuredProjects.map((project) => {
              const Icon = project.icon;
              return (
                <div
                  key={project.title}
                  className="group rounded-xl border border-border-subtle bg-bg-card p-6 transition-all duration-200 hover:border-accent-teal/30 hover:bg-bg-card/80"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-teal/10">
                      <Icon size={20} className="text-accent-teal" />
                    </div>
                    <span className="text-xs font-mono text-text-muted uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary group-hover:text-accent-teal transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                    {project.description}
                  </p>
                </div>
              );
            })}
          </div>

          <Link
            href="/portfolio"
            className="mt-8 inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-accent-teal transition-colors md:hidden"
          >
            Ver todos os projetos
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* ============ QUEM EU SOU — PREVIEW ============ */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            {/* Photo placeholder */}
            <div className="relative aspect-[4/5] rounded-2xl border border-border-subtle bg-bg-secondary overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-text-muted">
                  <GraduationCap size={48} className="mx-auto mb-3 opacity-30" />
                  <p className="text-sm">Foto em breve</p>
                </div>
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-2 -right-2 h-24 w-24 rounded-full bg-accent-teal/10 blur-2xl" />
            </div>

            {/* Bio */}
            <div>
              <p className="text-sm font-mono text-accent-teal tracking-wider uppercase">
                Sobre
              </p>
              <h2 className="mt-2 text-3xl font-bold text-text-primary md:text-4xl">
                Quem eu sou
              </h2>
              <p className="mt-6 text-text-secondary leading-relaxed text-lg">
                Professor por 10 anos, empreendedor, product leader. São 9 anos
                em tecnologia, 7 em produto, 6 em logística — e mais de 250
                startups mentoreadas pelo caminho. Ensinar e destravar pessoas é
                o que eu faço de melhor.
              </p>
              <p className="mt-4 text-text-secondary leading-relaxed">
                Hoje, ajudo fundadores e empresas a pensar junto sobre suas
                ideias, validar o que faz sentido, e construir na prática.
              </p>
              <Link
                href="/sobre"
                className="mt-8 inline-flex items-center gap-2 text-accent-teal font-medium hover:gap-3 transition-all duration-150"
              >
                Conhecer minha história
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CREDENCIAIS ============ */}
      <section className="bg-bg-secondary py-20 px-6">
        <div className="mx-auto max-w-6xl">
          {/* Numbers */}
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {credentials.map((item) => (
              <div key={item.label} className="text-center">
                <span className="block text-4xl font-extrabold text-accent-teal md:text-5xl">
                  {item.number}
                </span>
                <span className="mt-2 block text-sm text-text-secondary">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* Mentions */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-text-muted">
            <div className="flex items-center gap-2">
              <Award size={16} className="text-accent-amber" />
              <span>Top 100 CS Professionals (2020)</span>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase size={16} className="text-accent-amber" />
              <span>Mentor Plug and Play</span>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase size={16} className="text-accent-amber" />
              <span>Mentor ACATE Miditec</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CTA CONSULTORIA ============ */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-mono text-accent-amber tracking-wider uppercase">
            Consultoria
          </p>
          <h2 className="mt-2 text-3xl font-bold text-text-primary md:text-4xl">
            Quer trabalhar junto?
          </h2>
          <p className="mt-6 text-lg text-text-secondary max-w-xl mx-auto">
            Eu ajudo startups e empresas de logística a pensar junto, validar
            ideias e construir o que faz sentido.
          </p>
          <Link
            href="/consultoria"
            className="mt-8 inline-flex items-center gap-2 rounded-lg border border-accent-amber/50 bg-accent-amber/10 px-8 py-3.5 font-semibold text-accent-amber transition-all duration-150 hover:bg-accent-amber/20 hover:gap-3"
          >
            Conheça a consultoria
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* ============ CTA FINAL / CONTATO ============ */}
      <section className="relative bg-bg-secondary py-24 px-6 bg-grid">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(0,212,170,0.06)_0%,_transparent_70%)]" />
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-text-primary md:text-4xl">
            Quer trocar uma ideia?
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            A primeira conversa é por minha conta.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contato"
              className="inline-flex items-center gap-2 rounded-lg bg-accent-teal px-8 py-3.5 font-semibold text-bg-primary transition-all duration-150 hover:bg-accent-teal-hover glow-teal"
            >
              <MessageCircle size={18} />
              Fala comigo
            </Link>
            <Link
              href="/contato"
              className="inline-flex items-center gap-2 rounded-lg border border-border-subtle px-8 py-3.5 font-medium text-text-primary transition-colors duration-150 hover:border-accent-teal/40"
            >
              <Calendar size={18} />
              Agendar horário
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
