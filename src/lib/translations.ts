export type Locale = "en" | "pt";

export const translations = {
  // ============ NAV ============
  nav: {
    home: { en: "Home", pt: "Home" },
    work: { en: "Work", pt: "Trabalho" },
    about: { en: "About", pt: "Sobre" },
    now: { en: "Now", pt: "Agora" },
    contact: { en: "Contact", pt: "Contato" },
  },

  // ============ FOOTER ============
  footer: {
    tagline: {
      en: "Product Manager & AI Builder",
      pt: "Product Manager & AI Builder",
    },
    builtWith: { en: "Built with", pt: "Feito com" },
    rights: {
      en: "André Scaff.",
      pt: "André Scaff.",
    },
  },

  // ============ HOME ============
  home: {
    subtitle: {
      en: "Product Manager & AI Builder",
      pt: "Product Manager & AI Builder",
    },
    greeting: { en: "Hi, I'm André", pt: "Oi, eu sou o André" },
    bio1: {
      en: "I'm a product leader who builds things. 9+ years shipping B2B SaaS products, and now using AI to go from idea to working software. Based in Blumenau, Brazil.",
      pt: "Sou um product leader que constrói. 9+ anos entregando produtos B2B SaaS, e agora usando IA para ir de ideia a software funcionando. Baseado em Blumenau, Brasil.",
    },
    bio2: {
      en: "Currently Staff PM at",
      pt: "Atualmente Staff PM na",
    },
    bio2Company: { en: "Loadsmart", pt: "Loadsmart" },
    bio2Rest: {
      en: ", leading logistics platforms for enterprise shippers.",
      pt: ", liderando plataformas de logística para grandes embarcadores.",
    },
    thatsMe: { en: "that's me ↑", pt: "esse sou eu ↑" },
    photoAlt: { en: "Your photo here", pt: "Sua foto aqui" },

    // What I Do
    whatIDo: { en: "What I Do", pt: "O que eu faço" },
    whatIDoHeadline: {
      en: "Building products, leading teams, shipping with AI.",
      pt: "Construindo produtos, liderando times, entregando com IA.",
    },
    capabilities: [
      {
        title: { en: "Product Strategy", pt: "Estratégia de Produto" },
        description: {
          en: "Roadmaps, prioritization, and go-to-market for B2B SaaS platforms.",
          pt: "Roadmaps, priorização e go-to-market para plataformas B2B SaaS.",
        },
      },
      {
        title: { en: "AI-Powered Dev", pt: "Dev com IA" },
        description: {
          en: "Building real products with Claude, Next.js, and modern AI tools.",
          pt: "Construindo produtos reais com Claude, Next.js e ferramentas modernas de IA.",
        },
      },
      {
        title: { en: "Team Leadership", pt: "Liderança de Times" },
        description: {
          en: "Led cross-functional teams of up to 30 people across product and ops.",
          pt: "Liderei times multifuncionais de até 30 pessoas entre produto e operações.",
        },
      },
      {
        title: { en: "Community", pt: "Comunidade" },
        description: {
          en: "Built Brazil's largest CS community. 250+ startups mentored.",
          pt: "Criei a maior comunidade de CS do Brasil. 250+ startups mentoradas.",
        },
      },
    ],

    // Featured Work
    featuredWork: { en: "Featured Work", pt: "Destaques" },
    featuredWorkHeadline: {
      en: "Things I've built",
      pt: "Coisas que construí",
    },
    viewAllWork: { en: "View all work", pt: "Ver tudo" },
    featuredProjects: [
      {
        tag: { en: "Product", pt: "Produto" },
        title: { en: "TMS Enterprise Platform", pt: "Plataforma TMS Enterprise" },
        description: {
          en: "Product strategy and path to profitability for a logistics platform used by major enterprise shippers.",
          pt: "Estratégia de produto e caminho para rentabilidade de uma plataforma de logística usada por grandes embarcadores.",
        },
        meta: { en: "Loadsmart — Staff PM", pt: "Loadsmart — Staff PM" },
      },
      {
        tag: { en: "AI & Code", pt: "IA & Code" },
        title: { en: "Life-OS", pt: "Life-OS" },
        description: {
          en: "Personal management system with AI — finances, habits, and planning. Built with Claude + Next.js + Supabase.",
          pt: "Sistema pessoal de gestão com IA — finanças, hábitos e planejamento. Feito com Claude + Next.js + Supabase.",
        },
        stack: ["Next.js", "Claude API", "Supabase"],
      },
      {
        tag: { en: "Community", pt: "Comunidade" },
        title: { en: "CS Meetup Brasil", pt: "CS Meetup Brasil" },
        description: {
          en: "Built Brazil's largest Customer Success community. From 1 event in 1 city to 23 events in 13 cities.",
          pt: "Criei a maior comunidade de Customer Success do Brasil. De 1 evento em 1 cidade para 23 eventos em 13 cidades.",
        },
        meta: { en: "32 volunteers", pt: "32 voluntários" },
      },
    ],

    // Credentials
    credentials: [
      {
        number: "9+",
        label: { en: "years in tech", pt: "anos em tech" },
      },
      {
        number: "7+",
        label: { en: "years in product", pt: "anos em produto" },
      },
      {
        number: "250+",
        label: { en: "startups mentored", pt: "startups mentoradas" },
      },
      {
        number: "10",
        label: { en: "years as a teacher", pt: "anos como professor" },
      },
    ],
    badges: [
      { en: "Top 100 CS Professionals (2020)", pt: "Top 100 CS Professionals (2020)" },
      { en: "Plug and Play Mentor", pt: "Mentor Plug and Play" },
      { en: "ACATE Miditec Mentor", pt: "Mentor ACATE Miditec" },
    ],
  },

  // ============ WORK ============
  work: {
    title: { en: "Things I've built", pt: "Coisas que construí" },
    subtitle: {
      en: "9+ years of product leadership, AI-powered development, and community building. Here's the highlight reel.",
      pt: "9+ anos de liderança de produto, desenvolvimento com IA e construção de comunidade. O resumo dos destaques.",
    },

    // Section nav pills
    sectionProduct: { en: "Product Leadership", pt: "Liderança de Produto" },
    sectionAI: { en: "AI & Code", pt: "IA & Code" },
    sectionCommunity: { en: "Community", pt: "Comunidade" },

    // Product Leadership
    productHeadline: { en: "Product Leadership", pt: "Liderança de Produto" },
    productSubtitle: {
      en: "B2B SaaS platforms, integrations, and enterprise strategy.",
      pt: "Plataformas B2B SaaS, integrações e estratégia enterprise.",
    },
    challengeLabel: { en: "Challenge", pt: "Desafio" },
    approachLabel: { en: "Approach", pt: "Abordagem" },
    impactLabel: { en: "Impact", pt: "Impacto" },

    productProjects: [
      {
        title: { en: "TMS Enterprise Platform", pt: "Plataforma TMS Enterprise" },
        company: { en: "Loadsmart — Staff PM (current)", pt: "Loadsmart — Staff PM (atual)" },
        challenge: {
          en: "Define product strategy and path to profitability for a TMS platform used by major enterprise shippers.",
          pt: "Definir estratégia de produto e caminho para rentabilidade de uma plataforma TMS usada por grandes embarcadores.",
        },
        approach: {
          en: "Led teams of up to 30 people, aligned roadmap with business strategy, focused on enterprise integrations.",
          pt: "Liderei times de até 30 pessoas, alinhei roadmap com estratégia de negócio, foco em integrações enterprise.",
        },
        impact: {
          en: "Reference logistics tech platform in the US market.",
          pt: "Plataforma de referência em logistics tech no mercado americano.",
        },
      },
      {
        title: { en: "Private & Dedicated Fleet Programs", pt: "Programas de Frota Privada & Dedicada" },
        company: { en: "Loadsmart — Product Lead (current)", pt: "Loadsmart — Product Lead (atual)" },
        challenge: {
          en: "Create and scale fleet programs serving large shippers with complex operations.",
          pt: "Criar e escalar programas de frota servindo grandes embarcadores com operações complexas.",
        },
        approach: {
          en: "Product design from discovery to scale, legacy system integrations, dynamic pricing.",
          pt: "Design de produto do discovery à escala, integrações com sistemas legados, pricing dinâmico.",
        },
        impact: {
          en: "Programs operating at scale with multiple enterprise clients.",
          pt: "Programas operando em escala com múltiplos clientes enterprise.",
        },
      },
      {
        title: { en: "Customer Success SaaS", pt: "SaaS de Customer Success" },
        company: { en: "Movidesk", pt: "Movidesk" },
        challenge: {
          en: "Structure the product that would help the company achieve a Series A round.",
          pt: "Estruturar o produto que ajudaria a empresa a conquistar uma rodada Series A.",
        },
        approach: {
          en: "Product management focused on competitive differentiation and retention metrics.",
          pt: "Gestão de produto focada em diferenciação competitiva e métricas de retenção.",
        },
        impact: {
          en: "Contributed to securing a Series A investment round.",
          pt: "Contribuí para a conquista de uma rodada de investimento Series A.",
        },
      },
      {
        title: { en: "Enterprise Integrations & APIs", pt: "Integrações Enterprise & APIs" },
        company: { en: "Loadsmart — Integration Platform (current)", pt: "Loadsmart — Plataforma de Integração (atual)" },
        challenge: {
          en: "Build an integration layer connecting the platform with clients' ERPs and TMS systems.",
          pt: "Construir uma camada de integração conectando a plataforma com ERPs e sistemas TMS dos clientes.",
        },
        approach: {
          en: "API architecture, webhooks, and connectors for enterprise systems.",
          pt: "Arquitetura de APIs, webhooks e conectores para sistemas enterprise.",
        },
        impact: {
          en: "Significant reduction in new client onboarding time.",
          pt: "Redução significativa no tempo de onboarding de novos clientes.",
        },
      },
    ],

    // AI & Code
    aiHeadline: { en: "AI & Code", pt: "IA & Code" },
    aiSubtitle: {
      en: "Products built from scratch with generative AI.",
      pt: "Produtos construídos do zero com IA generativa.",
    },
    aiAnnotation: {
      en: "This is what I'm most excited about right now",
      pt: "Isso é o que mais me empolga agora",
    },
    learnedLabel: { en: "What I learned", pt: "O que aprendi" },

    aiProjects: [
      {
        tag: { en: "Full-stack AI App", pt: "App Full-stack com IA" },
        title: { en: "Life-OS", pt: "Life-OS" },
        description: {
          en: "Personal management system with AI — finances, habits, planning, and analytics. A complete production app.",
          pt: "Sistema pessoal de gestão com IA — finanças, hábitos, planejamento e analytics. Um app completo em produção.",
        },
        stack: ["Next.js", "Supabase", "Claude API", "Tailwind"],
        learned: {
          en: "How to build a complete product with generative AI as copilot.",
          pt: "Como construir um produto completo com IA generativa como copiloto.",
        },
      },
      {
        tag: { en: "AI-Built Portfolio", pt: "Portfolio feito com IA" },
        title: { en: "andrescaff.com", pt: "andrescaff.com" },
        description: {
          en: "This very site — designed and built entirely with Claude Code. From branding to deployment, AI-first workflow.",
          pt: "Este próprio site — projetado e construído inteiramente com Claude Code. Do branding ao deploy, workflow AI-first.",
        },
        stack: ["Next.js", "Tailwind", "Claude Code", "Vercel"],
        learned: {
          en: "UX design + full-stack dev with AI-powered coding tools.",
          pt: "Design UX + dev full-stack com ferramentas de coding com IA.",
        },
      },
      {
        tag: { en: "Rapid Prototyping", pt: "Prototipagem Rápida" },
        title: { en: "Design Studio Website", pt: "Site de Estúdio de Design" },
        description: {
          en: "Institutional website for an interior design studio. Built from concept to deploy using AI tools.",
          pt: "Site institucional para um estúdio de design de interiores. Do conceito ao deploy usando ferramentas de IA.",
        },
        stack: ["Next.js", "Tailwind", "Vercel"],
        learned: {
          en: "Rapid prototyping and visual iteration with AI tools.",
          pt: "Prototipagem rápida e iteração visual com ferramentas de IA.",
        },
      },
    ],

    // Community
    communityHeadline: { en: "Community & Entrepreneurship", pt: "Comunidade & Empreendedorismo" },
    communitySubtitle: {
      en: "Things I built outside of my day job.",
      pt: "Coisas que construí fora do meu trabalho principal.",
    },
    communityProjects: [
      {
        title: { en: "CS Meetup Brasil", pt: "CS Meetup Brasil" },
        description: {
          en: "Brazil's largest Customer Success community.",
          pt: "A maior comunidade de Customer Success do Brasil.",
        },
        detail: {
          en: "From 1 event in 1 city to 23 events in 13 cities with 32 volunteers.",
          pt: "De 1 evento em 1 cidade para 23 eventos em 13 cidades com 32 voluntários.",
        },
        impact: {
          en: "Created the community that didn't exist in the country.",
          pt: "Criei a comunidade que não existia no país.",
        },
      },
      {
        title: { en: "Cliente Cast", pt: "Cliente Cast" },
        description: {
          en: "Reference podcast in Customer Success and CX in Brazil.",
          pt: "Podcast referência em Customer Success e CX no Brasil.",
        },
        detail: {
          en: "60+ episodes with industry leaders.",
          pt: "60+ episódios com líderes da indústria.",
        },
        impact: {
          en: "Go-to resource for CS professionals in Brazil.",
          pt: "Recurso de referência para profissionais de CS no Brasil.",
        },
      },
      {
        title: { en: "Ontrack", pt: "Ontrack" },
        description: {
          en: "Customer Success startup. Co-founded and raised angel round.",
          pt: "Startup de Customer Success. Co-fundei e levantamos rodada anjo.",
        },
        detail: { en: "", pt: "" },
        impact: {
          en: "Experience of creating a startup from scratch and raising capital.",
          pt: "Experiência de criar uma startup do zero e levantar capital.",
        },
      },
      {
        title: { en: "Top 100 CS Professionals", pt: "Top 100 CS Professionals" },
        description: {
          en: "Global recognition by Success Coaching in 2020.",
          pt: "Reconhecimento global pela Success Coaching em 2020.",
        },
        detail: {
          en: "Elected by public vote among professionals worldwide.",
          pt: "Eleito por voto público entre profissionais do mundo todo.",
        },
        impact: {
          en: "International validation of CS work.",
          pt: "Validação internacional do trabalho em CS.",
        },
      },
    ],
  },

  // ============ ABOUT ============
  about: {
    title: { en: "A story in 4 acts", pt: "Uma história em 4 atos" },
    subtitle: {
      en: "Teacher, entrepreneur, product leader, and builder. Each chapter built on top of the previous one.",
      pt: "Professor, empreendedor, product leader e builder. Cada capítulo construído sobre o anterior.",
    },
    acts: [
      {
        number: "01",
        title: { en: "The Teacher", pt: "O Professor" },
        period: { en: "10 years", pt: "10 anos" },
        description: {
          en: "Before tech, I spent a decade teaching. Not in just any classroom — I'm the kind of teacher who sits next to the student and helps unlock their thinking. Mentoring, simplifying the complex, and helping others find their own answers isn't something I offer as a service. It's who I am.",
          pt: "Antes de tech, passei uma década ensinando. Não em qualquer sala de aula — sou o tipo de professor que senta ao lado do aluno e ajuda a destravar o raciocínio. Mentorar, simplificar o complexo e ajudar os outros a encontrarem suas próprias respostas não é algo que eu ofereço como serviço. É quem eu sou.",
        },
      },
      {
        number: "02",
        title: { en: "The Entrepreneur", pt: "O Empreendedor" },
        period: { en: "CS & Community", pt: "CS & Comunidade" },
        description: {
          en: "I co-founded initiatives that became CS references in Brazil. Cliente Cast (a podcast with 60+ episodes), CS Meetup Brasil (which I scaled from 1 event in 1 city to 23 events in 13 cities with 32 volunteers), and Ontrack (a CS startup where we raised an angel round). In 2020, I was voted one of the Top 100 Customer Success professionals in the world. This phase gave me the real experience of building from scratch, failing, learning, and creating community.",
          pt: "Co-fundei iniciativas que se tornaram referências de CS no Brasil. Cliente Cast (podcast com 60+ episódios), CS Meetup Brasil (que escalei de 1 evento em 1 cidade para 23 eventos em 13 cidades com 32 voluntários), e Ontrack (uma startup de CS onde levantamos uma rodada anjo). Em 2020, fui eleito um dos Top 100 profissionais de Customer Success do mundo. Essa fase me deu a experiência real de construir do zero, falhar, aprender e criar comunidade.",
        },
      },
      {
        number: "03",
        title: { en: "The Product Leader", pt: "O Product Leader" },
        period: { en: "9+ years in tech", pt: "9+ anos em tech" },
        description: {
          en: "Over the last 9 years in tech (7 in product, 6 in logistics), I've led product and operations teams at B2B SaaS companies. I worked at Movidesk, where I helped structure the product that contributed to a Series A round. For the past 6 years I've been at Loadsmart, leading logistics platforms, enterprise integrations, and teams of up to 30 people. I'm currently a Staff Product Manager, defining product strategy and the path to profitability for a TMS platform used by major enterprise shippers.",
          pt: "Nos últimos 9 anos em tech (7 em produto, 6 em logística), liderei times de produto e operações em empresas B2B SaaS. Trabalhei na Movidesk, onde ajudei a estruturar o produto que contribuiu para uma rodada Series A. Nos últimos 6 anos estou na Loadsmart, liderando plataformas de logística, integrações enterprise e times de até 30 pessoas. Atualmente sou Staff Product Manager, definindo estratégia de produto e o caminho para rentabilidade de uma plataforma TMS usada por grandes embarcadores.",
        },
      },
      {
        number: "04",
        title: { en: "The Builder", pt: "O Builder" },
        period: { en: "Now", pt: "Agora" },
        description: {
          en: "With the rise of generative AI, I went back to my roots of getting my hands dirty. I use Claude, Claude Code, Cursor, and other tools to prototype and build real solutions. I'm not the kind of PM who just writes specs — I sit down and build alongside the team.",
          pt: "Com a ascensão da IA generativa, voltei às minhas raízes de colocar a mão na massa. Uso Claude, Claude Code, Cursor e outras ferramentas para prototipar e construir soluções reais. Não sou o tipo de PM que só escreve specs — eu sento e construo junto com o time.",
        },
      },
    ],
    beliefsTitle: { en: "What I believe in", pt: "No que eu acredito" },
    beliefs: [
      {
        en: "I believe most answers are already with whoever is living the problem. My job is to help organize, question, and test until it's clear what's worth building.",
        pt: "Acredito que a maioria das respostas já está com quem vive o problema. Meu trabalho é ajudar a organizar, questionar e testar até ficar claro o que vale construir.",
      },
      {
        en: "Hypotheses are worth more than opinions. Building is worth more than planning. And simplicity is worth more than any fancy framework.",
        pt: "Hipóteses valem mais que opiniões. Construir vale mais que planejar. E simplicidade vale mais que qualquer framework sofisticado.",
      },
      {
        en: "I learned this from 10 years of teaching: whoever truly teaches doesn't give the answer — they help the other person find it.",
        pt: "Aprendi isso em 10 anos de ensino: quem realmente ensina não dá a resposta — ajuda a outra pessoa a encontrá-la.",
      },
    ],
    connectTitle: { en: "Where to find me", pt: "Onde me encontrar" },
    connectSubtitle: {
      en: "If you want to learn more, exchange ideas, or follow what I'm building.",
      pt: "Se quiser saber mais, trocar ideias ou acompanhar o que estou construindo.",
    },
    seeWork: { en: "See what I've built", pt: "Veja o que construí" },
  },

  // ============ NOW ============
  now: {
    title: { en: "What I'm up to", pt: "No que estou focado" },
    nowMovement: { en: "/now movement", pt: "movimento /now" },
    lastUpdated: { en: "Last updated", pt: "Última atualização" },
    lastUpdatedDate: { en: "March 2026", pt: "Março 2026" },

    workingOnTitle: { en: "Working on", pt: "Trabalhando em" },
    workingOn: [
      {
        title: { en: "Staff PM at Loadsmart", pt: "Staff PM na Loadsmart" },
        description: {
          en: "Leading product strategy for our TMS enterprise platform. Focused on profitability path and enterprise integrations.",
          pt: "Liderando estratégia de produto para nossa plataforma TMS enterprise. Foco no caminho para rentabilidade e integrações enterprise.",
        },
      },
      {
        title: { en: "Life-OS", pt: "Life-OS" },
        description: {
          en: "Iterating on my personal management system. Current focus: financial analytics and AI-powered insights.",
          pt: "Iterando no meu sistema pessoal de gestão. Foco atual: analytics financeiro e insights com IA.",
        },
        isAI: true,
      },
      {
        title: { en: "This website", pt: "Este site" },
        description: {
          en: "Rebranding from consultancy to personal portfolio. Designed and built entirely with Claude Code.",
          pt: "Rebranding de consultoria para portfolio pessoal. Projetado e construído inteiramente com Claude Code.",
        },
        isAI: true,
      },
    ],

    learningTitle: { en: "Learning", pt: "Aprendendo" },
    learning: [
      {
        title: {
          en: "AI-assisted development patterns",
          pt: "Padrões de desenvolvimento assistido por IA",
        },
        description: {
          en: "How to use Claude Code, Cursor, and AI tools to go from PM spec to working product. Building a methodology.",
          pt: "Como usar Claude Code, Cursor e ferramentas de IA para ir de spec de PM a produto funcionando. Construindo uma metodologia.",
        },
      },
      {
        title: {
          en: "Full-stack development with Next.js",
          pt: "Desenvolvimento full-stack com Next.js",
        },
        description: {
          en: "Server Components, Server Actions, Supabase integration, TypeScript patterns. Learning by building real products.",
          pt: "Server Components, Server Actions, integração com Supabase, padrões TypeScript. Aprendendo construindo produtos reais.",
        },
      },
    ],

    stackTitle: { en: "Current stack", pt: "Stack atual" },
    stack: [
      { name: "Claude Code", description: { en: "AI coding partner", pt: "Parceiro de código IA" } },
      { name: "Next.js", description: { en: "Full-stack framework", pt: "Framework full-stack" } },
      { name: "Supabase", description: { en: "Backend + Auth", pt: "Backend + Auth" } },
      { name: "Tailwind CSS", description: { en: "Styling", pt: "Estilização" } },
      { name: "Vercel", description: { en: "Deploy", pt: "Deploy" } },
      { name: "TypeScript", description: { en: "Type safety", pt: "Tipagem" } },
    ],

    readingTitle: { en: "Reading", pt: "Lendo" },
    readingNote: {
      en: "These are placeholders — update with what you're actually reading!",
      pt: "Esses são placeholders — atualize com o que você está realmente lendo!",
    },
    reading: [
      { title: "Inspired", author: "Marty Cagan" },
      { title: "Build", author: "Tony Fadell" },
    ],

    basedInTitle: { en: "Based in", pt: "Baseado em" },
    basedIn: {
      en: "Blumenau, SC — Brazil. Working remotely for US-based companies.",
      pt: "Blumenau, SC — Brasil. Trabalhando remotamente para empresas americanas.",
    },
  },

  // ============ CONTACT ============
  contact: {
    title: { en: "Let's connect", pt: "Vamos conversar" },
    subtitle: {
      en: "Want to chat about product, AI, or just say hi? Here's how to reach me.",
      pt: "Quer conversar sobre produto, IA, ou só dar um oi? Aqui está como me encontrar.",
    },
    replyNote: {
      en: "I usually reply within a day or two!",
      pt: "Geralmente respondo em um ou dois dias!",
    },
    linkedin: {
      title: { en: "LinkedIn", pt: "LinkedIn" },
      description: {
        en: "Best for professional conversations",
        pt: "Melhor para conversas profissionais",
      },
    },
    github: {
      title: { en: "GitHub", pt: "GitHub" },
      description: {
        en: "See what I'm building",
        pt: "Veja o que estou construindo",
      },
    },
    email: {
      title: { en: "Email", pt: "Email" },
      description: { en: "For anything else", pt: "Para qualquer outra coisa" },
    },
    location: {
      city: { en: "Blumenau, SC", pt: "Blumenau, SC" },
      detail: {
        en: "Brazil — working remotely",
        pt: "Brasil — trabalhando remotamente",
      },
    },
  },

  // ============ TAB TITLE ============
  tabBlurTitle: { en: "Come back! 👋", pt: "Volta! 👋" },
} as const;

export type Translations = typeof translations;
