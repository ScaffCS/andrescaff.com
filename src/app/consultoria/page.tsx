import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Lightbulb,
  Truck,
  Factory,
  Clock,
  FolderKanban,
  Handshake,
  MessageCircle,
  Calendar,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Consultoria — André Scaff",
  description:
    "Consultoria em produto, tecnologia e logística. Ajudo startups e empresas a pensar junto, validar ideias e construir o que faz sentido.",
};

const tracks = [
  {
    id: "startups",
    icon: Lightbulb,
    title: "Startups Early-Stage",
    color: "accent-teal",
    opening:
      "Você tem uma ideia — ou talvez várias. Mas ainda não sabe qual delas realmente vale o seu tempo e dinheiro. Ou talvez já começou a construir e sente que tá andando em círculos. Isso é normal. A maioria das startups trava não por falta de ideia, mas por falta de clareza.",
    items: [
      "Entender qual problema realmente vale resolver (e se alguém paga por isso)",
      "Validar hipóteses sem viés de confirmação — testar de verdade, não confirmar o que você quer ouvir",
      "Definir que tipo de empresa você quer construir (lifestyle, escala, exit — cada uma pede um caminho diferente)",
      "Estratégia de go-to-market que faz sentido pro seu estágio",
      "Experimentação com baixo custo antes de investir pesado",
    ],
  },
  {
    id: "logtech",
    icon: Truck,
    title: "Empresas de Tech para Logística",
    color: "accent-amber",
    opening:
      "Você tem um TMS, WMS, YMS ou outra plataforma de logística. O produto funciona, tem clientes, mas você sente que estagnou. Não sabe como priorizar o roadmap, como monetizar features, ou como se diferenciar num mercado cada vez mais competitivo.",
    items: [
      "Estratégia de produto e roadmap com priorização que faz sentido pro negócio",
      "Monetização e pricing — como transformar features em receita",
      "Arquitetura de integrações (APIs, webhooks, plataforma)",
      "Posicionamento competitivo no mercado de logtech",
      "Alinhamento entre produto, vendas e operação",
    ],
  },
  {
    id: "digitalizacao",
    icon: Factory,
    title: "Digitalização de Logística",
    color: "accent-teal",
    opening:
      "Você é embarcador ou transportadora e sabe que precisa digitalizar. Mas o dia a dia não para, a operação é complexa, e tecnologia parece um mundo à parte. Ou talvez você já tentou e não deu certo. Isso não é culpa sua — é que digitalização sem planejamento vira só mais um custo.",
    items: [
      "Diagnóstico de maturidade digital — entender onde você está e onde quer chegar",
      "Seleção de tecnologia que faz sentido pro seu tamanho e operação",
      "Planejamento de implantação realista (não o cenário ideal, o cenário possível)",
      "Preparação do time para a mudança (change management)",
      "Métricas e KPIs pra saber se tá funcionando",
    ],
  },
];

const formats = [
  {
    icon: Clock,
    title: "Por hora",
    description: "Mentorias e sessões pontuais",
    detail: "Ideal para tirar dúvidas ou pensar junto sobre um tema específico.",
  },
  {
    icon: FolderKanban,
    title: "Por projeto",
    description: "Escopo fechado com entregáveis e prazo",
    detail:
      "Para diagnósticos, estratégias ou projetos com começo, meio e fim.",
  },
  {
    icon: Handshake,
    title: "Advisory",
    description: "Participação como advisor",
    detail:
      "Para startups que querem um parceiro de longo prazo com skin in the game.",
  },
];

export default function ConsultoriaPage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="py-24 px-6 bg-grid relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(245,166,35,0.06)_0%,_transparent_60%)]" />
        <div className="relative z-10 mx-auto max-w-6xl">
          <p className="text-sm font-mono text-accent-amber tracking-wider uppercase animate-fade-up stagger-1">
            Consultoria
          </p>
          <h1 className="mt-3 text-4xl font-extrabold text-text-primary md:text-6xl animate-fade-up stagger-2">
            Vamos pensar junto
          </h1>
          <p className="mt-4 text-lg text-text-secondary max-w-2xl animate-fade-up stagger-3">
            Além de construir, eu ajudo outras pessoas a construírem. Se você
            tem um desafio de produto, tecnologia ou operação — a gente pode
            pensar junto.
          </p>

          {/* Track nav */}
          <div className="animate-fade-up stagger-4 mt-10 flex flex-wrap gap-3">
            {tracks.map((track) => (
              <a
                key={track.id}
                href={`#${track.id}`}
                className="rounded-lg border border-border-subtle px-4 py-2 text-sm text-text-secondary hover:border-accent-amber/40 hover:text-accent-amber transition-colors"
              >
                {track.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TRACKS ============ */}
      {tracks.map((track, index) => {
        const Icon = track.icon;
        const isAlt = index % 2 === 1;
        const colorClass =
          track.color === "accent-amber"
            ? "text-accent-amber"
            : "text-accent-teal";
        const bgColorClass =
          track.color === "accent-amber"
            ? "bg-accent-amber/10"
            : "bg-accent-teal/10";
        const borderColorClass =
          track.color === "accent-amber"
            ? "border-accent-amber/20"
            : "border-accent-teal/20";

        return (
          <section
            key={track.id}
            id={track.id}
            className={`py-20 px-6 scroll-mt-24 ${isAlt ? "bg-bg-secondary" : ""}`}
          >
            <div className="mx-auto max-w-4xl">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${bgColorClass}`}
                >
                  <Icon size={24} className={colorClass} />
                </div>
                <h2 className="text-2xl font-bold text-text-primary md:text-3xl">
                  {track.title}
                </h2>
              </div>

              <p className="text-text-secondary leading-relaxed text-lg mb-8">
                {track.opening}
              </p>

              <div>
                <h3 className="text-sm font-mono text-text-muted uppercase tracking-wider mb-4">
                  O que a gente faz junto
                </h3>
                <ul className="space-y-3">
                  {track.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2
                        size={18}
                        className={`${colorClass} mt-0.5 shrink-0`}
                      />
                      <span className="text-text-secondary">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        );
      })}

      {/* ============ FORMATOS ============ */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-text-primary mb-10 text-center">
            Formatos de trabalho
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {formats.map((format) => {
              const Icon = format.icon;
              return (
                <div
                  key={format.title}
                  className="rounded-xl border border-border-subtle bg-bg-card p-6 text-center hover:border-accent-amber/20 transition-colors"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-amber/10 mx-auto mb-4">
                    <Icon size={24} className="text-accent-amber" />
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary">
                    {format.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-accent-amber">
                    {format.description}
                  </p>
                  <p className="mt-3 text-sm text-text-secondary">
                    {format.detail}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="bg-bg-secondary py-20 px-6 bg-grid relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(245,166,35,0.06)_0%,_transparent_70%)]" />
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-text-primary md:text-4xl">
            Quer entender se faz sentido pro seu caso?
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Vamos conversar. A primeira conversa é por minha conta.
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
