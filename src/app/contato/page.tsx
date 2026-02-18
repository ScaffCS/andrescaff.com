import type { Metadata } from "next";
import { MessageCircle, Calendar, Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contato — André Scaff",
  description:
    "Quer trocar uma ideia, trabalhar junto, ou só bater um papo? Manda mensagem. A primeira conversa é por minha conta.",
};

export default function ContatoPage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="py-24 px-6 bg-grid relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(0,212,170,0.06)_0%,_transparent_60%)]" />
        <div className="relative z-10 mx-auto max-w-6xl">
          <p className="text-sm font-mono text-accent-teal tracking-wider uppercase animate-fade-up stagger-1">
            Contato
          </p>
          <h1 className="mt-3 text-4xl font-extrabold text-text-primary md:text-6xl animate-fade-up stagger-2">
            Vamos conversar?
          </h1>
          <p className="mt-4 text-lg text-text-secondary max-w-2xl animate-fade-up stagger-3">
            Se você quer trocar uma ideia, trabalhar junto, ou só bater um papo
            — manda mensagem. A primeira conversa é por minha conta.
          </p>
        </div>
      </section>

      {/* ============ CONTENT ============ */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact channels */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-text-primary">
                Como falar comigo
              </h2>

              {/* WhatsApp */}
              <a
                href="#"
                className="flex items-center gap-4 rounded-xl border border-border-subtle bg-bg-card p-5 hover:border-accent-teal/30 transition-colors group"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-teal/10">
                  <MessageCircle
                    size={24}
                    className="text-accent-teal"
                  />
                </div>
                <div>
                  <p className="font-semibold text-text-primary group-hover:text-accent-teal transition-colors">
                    WhatsApp
                  </p>
                  <p className="text-sm text-text-secondary">
                    Resposta rápida, direto no ponto.
                  </p>
                </div>
              </a>

              {/* Calendly */}
              <a
                href="#"
                className="flex items-center gap-4 rounded-xl border border-border-subtle bg-bg-card p-5 hover:border-accent-amber/30 transition-colors group"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-amber/10">
                  <Calendar size={24} className="text-accent-amber" />
                </div>
                <div>
                  <p className="font-semibold text-text-primary group-hover:text-accent-amber transition-colors">
                    Agendar horário
                  </p>
                  <p className="text-sm text-text-secondary">
                    30 minutos, sem compromisso. Escolha o melhor dia.
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:contato@andrescaff.com"
                className="flex items-center gap-4 rounded-xl border border-border-subtle bg-bg-card p-5 hover:border-accent-teal/30 transition-colors group"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-bg-secondary">
                  <Mail size={24} className="text-text-muted" />
                </div>
                <div>
                  <p className="font-semibold text-text-primary group-hover:text-accent-teal transition-colors">
                    Email
                  </p>
                  <p className="text-sm text-text-secondary">
                    contato@andrescaff.com
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 rounded-xl border border-border-subtle bg-bg-card p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-bg-secondary">
                  <MapPin size={24} className="text-text-muted" />
                </div>
                <div>
                  <p className="font-semibold text-text-primary">Localização</p>
                  <p className="text-sm text-text-secondary">
                    Florianópolis, SC — Brasil. Atendimento remoto para qualquer
                    lugar.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="rounded-2xl border border-border-subtle bg-bg-card p-8">
              <h2 className="text-2xl font-bold text-text-primary mb-2">
                Manda uma mensagem
              </h2>
              <p className="text-sm text-text-secondary mb-8">
                Me conta o que tá na sua cabeça. Respondo em até 24h.
              </p>

              <form className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-text-secondary mb-1.5"
                  >
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Seu nome"
                    className="w-full rounded-lg border border-border-subtle bg-bg-secondary px-4 py-3 text-text-primary placeholder:text-text-muted focus:border-accent-teal focus:outline-none focus:ring-1 focus:ring-accent-teal/50 transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-text-secondary mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="seu@email.com"
                    className="w-full rounded-lg border border-border-subtle bg-bg-secondary px-4 py-3 text-text-primary placeholder:text-text-muted focus:border-accent-teal focus:outline-none focus:ring-1 focus:ring-accent-teal/50 transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-text-secondary mb-1.5"
                  >
                    Me conta o que tá na sua cabeça
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Uma ideia, um desafio, uma pergunta... pode ser qualquer coisa."
                    className="w-full rounded-lg border border-border-subtle bg-bg-secondary px-4 py-3 text-text-primary placeholder:text-text-muted focus:border-accent-teal focus:outline-none focus:ring-1 focus:ring-accent-teal/50 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-accent-teal px-8 py-3.5 font-semibold text-bg-primary transition-all duration-150 hover:bg-accent-teal-hover glow-teal"
                >
                  Enviar mensagem
                </button>

                <p className="text-xs text-text-muted text-center">
                  Sem spam, sem newsletter. Só respondo o que você mandar.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
