import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  GraduationCap,
  Rocket,
  Briefcase,
  Cpu,
  Linkedin,
  Github,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Sobre — André Scaff",
  description:
    "Professor por 10 anos, empreendedor, product leader e builder. Conheça a história de quem está por trás da Scaff.",
};

const acts = [
  {
    number: "01",
    icon: GraduationCap,
    title: "O Professor",
    period: "10 anos",
    color: "text-accent-teal",
    bgColor: "bg-accent-teal/10",
    borderColor: "border-accent-teal/20",
    description:
      "Antes de tecnologia, André passou uma década ensinando. Não numa sala de aula qualquer — é o tipo de professor que senta do lado do aluno e ajuda a destrancar o raciocínio. Mentorar, simplificar o complexo e fazer outras pessoas encontrarem suas próprias respostas não é um serviço que ele oferece. É quem ele é.",
  },
  {
    number: "02",
    icon: Rocket,
    title: "O Empreendedor",
    period: "CS & Comunidade",
    color: "text-accent-amber",
    bgColor: "bg-accent-amber/10",
    borderColor: "border-accent-amber/20",
    description:
      "Co-fundou iniciativas que viraram referência em Customer Success no Brasil. O Cliente Cast (podcast com 60+ episódios), o CS Meetup Brasil (que ele levou de 1 evento em 1 cidade para 23 eventos em 13 cidades com 32 voluntários), e a Ontrack (uma startup de CS que levantou rodada angel). Em 2020, foi eleito por voto público um dos Top 100 profissionais de Customer Success do mundo pela Success Coaching. Essa fase trouxe a experiência real de criar do zero, errar, aprender e construir comunidade.",
  },
  {
    number: "03",
    icon: Briefcase,
    title: "O Product Leader",
    period: "9+ anos em tech",
    color: "text-accent-teal",
    bgColor: "bg-accent-teal/10",
    borderColor: "border-accent-teal/20",
    description:
      "Nos últimos 9 anos em tecnologia (7 em produto, 6 em logística), liderou times de produto e operações em empresas de tecnologia B2B SaaS. Passou pela Movidesk, onde ajudou a estruturar o produto que contribuiu para uma rodada Series A. E pelos últimos 6 anos na Loadsmart, liderando plataformas e programas de logística, integrações enterprise e times de até 30 pessoas. Hoje é Staff Product Manager, definindo estratégia de produto e caminho para rentabilidade de uma plataforma TMS usada por grandes embarcadores.",
  },
  {
    number: "04",
    icon: Cpu,
    title: "O Builder",
    period: "Agora",
    color: "text-accent-amber",
    bgColor: "bg-accent-amber/10",
    borderColor: "border-accent-amber/20",
    description:
      "Com o avanço da IA generativa, voltou às raízes de quem gosta de botar a mão na massa. Usa Claude, Claude Code, Cursor, Bolt, Lovable e outras ferramentas para prototipar e construir soluções reais. Não é o consultor que entrega um PDF de recomendações e vai embora. É o parceiro que senta do lado e constrói junto.",
  },
];

export default function SobrePage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="py-24 px-6 bg-grid relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(0,212,170,0.06)_0%,_transparent_60%)]" />
        <div className="relative z-10 mx-auto max-w-6xl">
          <p className="text-sm font-mono text-accent-teal tracking-wider uppercase animate-fade-up stagger-1">
            Sobre
          </p>
          <h1 className="mt-3 text-4xl font-extrabold text-text-primary md:text-6xl animate-fade-up stagger-2">
            Uma história em 4 atos
          </h1>
          <p className="mt-4 text-lg text-text-secondary max-w-2xl animate-fade-up stagger-3">
            Professor, empreendedor, product leader e builder. Cada fase
            construiu em cima da anterior.
          </p>
        </div>
      </section>

      {/* ============ TIMELINE — 4 ATOS ============ */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-4xl">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[23px] top-0 bottom-0 w-px bg-border-subtle md:left-1/2 md:-translate-x-px" />

            <div className="space-y-16">
              {acts.map((act, index) => {
                const Icon = act.icon;
                const isEven = index % 2 === 0;

                return (
                  <div key={act.number} className="relative">
                    {/* Timeline dot */}
                    <div
                      className={`absolute left-0 flex h-12 w-12 items-center justify-center rounded-full border-2 ${act.borderColor} ${act.bgColor} bg-bg-primary md:left-1/2 md:-translate-x-1/2 z-10`}
                    >
                      <Icon size={20} className={act.color} />
                    </div>

                    {/* Content card */}
                    <div
                      className={`ml-16 md:ml-0 md:w-[calc(50%-40px)] ${
                        isEven ? "md:mr-auto md:pr-0" : "md:ml-auto md:pl-0"
                      }`}
                    >
                      <div className="rounded-xl border border-border-subtle bg-bg-card p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <span className={`text-2xl font-extrabold ${act.color} opacity-40 font-mono`}>
                            {act.number}
                          </span>
                          <div>
                            <h3 className="text-xl font-bold text-text-primary">
                              {act.title}
                            </h3>
                            <p className="text-xs font-mono text-text-muted">
                              {act.period}
                            </p>
                          </div>
                        </div>
                        <p className="text-text-secondary leading-relaxed">
                          {act.description}
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

      {/* ============ FILOSOFIA ============ */}
      <section className="bg-bg-secondary py-20 px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-text-primary mb-10">
            No que eu acredito
          </h2>

          <div className="space-y-8">
            <blockquote className="border-l-2 border-accent-teal pl-6">
              <p className="text-lg text-text-secondary leading-relaxed italic">
                &ldquo;Eu acredito que a maioria das respostas já está com quem tá
                vivendo o problema. Meu trabalho é ajudar a organizar,
                questionar e testar até ficar claro o que vale a pena
                construir.&rdquo;
              </p>
            </blockquote>

            <blockquote className="border-l-2 border-accent-amber pl-6">
              <p className="text-lg text-text-secondary leading-relaxed italic">
                &ldquo;Hipóteses valem mais que opiniões. Construir vale mais que
                planejar. E simplicidade vale mais que qualquer framework
                bonito.&rdquo;
              </p>
            </blockquote>

            <blockquote className="border-l-2 border-accent-teal pl-6">
              <p className="text-lg text-text-secondary leading-relaxed italic">
                &ldquo;Aprendi isso dando aula por 10 anos: quem ensina de verdade
                não dá a resposta — ajuda o outro a chegar nela.&rdquo;
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ============ LINKS & PHOTO ============ */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            {/* Photo placeholder */}
            <div className="relative aspect-[4/5] rounded-2xl border border-border-subtle bg-bg-secondary overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,212,170,0.05)_0%,_transparent_70%)]" />
              <div className="absolute -bottom-2 -right-2 h-24 w-24 rounded-full bg-accent-teal/10 blur-2xl" />
            </div>

            {/* Connect */}
            <div>
              <h2 className="text-2xl font-bold text-text-primary">
                Onde me encontrar
              </h2>
              <p className="mt-4 text-text-secondary leading-relaxed">
                Se quiser saber mais, trocar uma ideia, ou acompanhar o que
                estou construindo.
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href="https://linkedin.com/in/andrescaff"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-border-subtle bg-bg-card p-4 hover:border-accent-teal/30 transition-colors group"
                >
                  <Linkedin
                    size={24}
                    className="text-text-muted group-hover:text-accent-teal transition-colors"
                  />
                  <div>
                    <p className="font-medium text-text-primary">LinkedIn</p>
                    <p className="text-sm text-text-secondary">
                      /in/andrescaff
                    </p>
                  </div>
                </a>

                <a
                  href="https://github.com/ScaffCS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-border-subtle bg-bg-card p-4 hover:border-accent-teal/30 transition-colors group"
                >
                  <Github
                    size={24}
                    className="text-text-muted group-hover:text-accent-teal transition-colors"
                  />
                  <div>
                    <p className="font-medium text-text-primary">GitHub</p>
                    <p className="text-sm text-text-secondary">@ScaffCS</p>
                  </div>
                </a>
              </div>

              <Link
                href="/portfolio"
                className="mt-8 inline-flex items-center gap-2 text-accent-teal font-medium hover:gap-3 transition-all duration-150"
              >
                Veja o que já construí
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
