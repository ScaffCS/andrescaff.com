export default function Home() {
  return (
    <main className="min-h-screen bg-bg-primary">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
        {/* Logo placeholder */}
        <div className="mb-12">
          <span className="text-4xl font-bold text-text-primary tracking-tight">
            scaff<span className="text-accent-teal">.</span>
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-bold text-text-primary max-w-4xl leading-tight">
          Suas melhores ideias merecem virar realidade.
        </h1>

        {/* Sub-headline */}
        <p className="mt-6 text-lg md:text-xl text-text-secondary max-w-2xl">
          Product leader, mentor e builder. 9+ anos em tecnologia, 7+ em
          produto, 250+ startups mentoreadas.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a
            href="/portfolio"
            className="px-8 py-3 bg-accent-teal text-bg-primary font-semibold rounded-lg hover:bg-accent-teal-hover transition-colors"
          >
            Ver portfólio
          </a>
          <a
            href="/sobre"
            className="px-8 py-3 border border-border-subtle text-text-primary rounded-lg hover:border-border-hover transition-colors"
          >
            Conhecer minha história
          </a>
        </div>

        {/* Credenciais */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-text-muted text-sm">
          <div>
            <span className="text-2xl font-bold text-text-primary block">
              250+
            </span>
            startups mentoreadas
          </div>
          <div>
            <span className="text-2xl font-bold text-text-primary block">
              9+
            </span>
            anos em tech
          </div>
          <div>
            <span className="text-2xl font-bold text-text-primary block">
              7+
            </span>
            anos em produto
          </div>
          <div>
            <span className="text-2xl font-bold text-text-primary block">
              10
            </span>
            anos como professor
          </div>
        </div>
      </section>
    </main>
  );
}
