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
      en: "Product Manager",
      pt: "Product Manager",
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
      en: "Product Manager",
      pt: "Product Manager",
    },
    greeting: { en: "André Scaff", pt: "André Scaff" },
    bio1: {
      en: "Staff Product Manager at Loadsmart, where I work on logistics platforms for enterprise shippers. 9 years in tech, 7 in product. Before that, I was a teacher for a decade.",
      pt: "Staff Product Manager na Loadsmart, onde trabalho com plataformas de logística para grandes embarcadores. 9 anos em tech, 7 em produto. Antes disso, fui professor por uma década.",
    },
    bio2: {
      en: "Based in Blumenau, Brazil.",
      pt: "Baseado em Blumenau, Brasil.",
    },
    thatsMe: { en: "that's me ↑", pt: "esse sou eu ↑" },
    photoAlt: { en: "Your photo here", pt: "Sua foto aqui" },

    // Featured Work
    featuredWorkHeadline: {
      en: "Work",
      pt: "Trabalho",
    },
    viewAllWork: { en: "See all work", pt: "Ver tudo" },
    featuredProjects: [
      {
        title: { en: "TMS Enterprise Platform", pt: "Plataforma TMS Enterprise" },
        description: {
          en: "Product strategy for Loadsmart's TMS platform, used by some of the largest shippers in the US. Focused on profitability and enterprise adoption.",
          pt: "Estratégia de produto para a plataforma TMS da Loadsmart, usada por alguns dos maiores embarcadores dos EUA. Foco em rentabilidade e adoção enterprise.",
        },
        meta: { en: "Loadsmart · Staff PM", pt: "Loadsmart · Staff PM" },
      },
      {
        title: { en: "Life-OS", pt: "Life-OS" },
        description: {
          en: "Personal system for finances, habits, and planning. Built from scratch with Claude, Next.js, and Supabase.",
          pt: "Sistema pessoal para finanças, hábitos e planejamento. Construído do zero com Claude, Next.js e Supabase.",
        },
        meta: { en: "Side project", pt: "Projeto pessoal" },
      },
      {
        title: { en: "CS Meetup Brasil", pt: "CS Meetup Brasil" },
        description: {
          en: "Started as 1 event in 1 city. Grew to 23 events across 13 cities, run by 32 volunteers.",
          pt: "Começou como 1 evento em 1 cidade. Cresceu para 23 eventos em 13 cidades, gerido por 32 voluntários.",
        },
        meta: { en: "Community project · 2017–2020", pt: "Projeto comunitário · 2017–2020" },
      },
    ],
  },

  // ============ WORK ============
  work: {
    title: { en: "Work", pt: "Trabalho" },

    projects: [
      {
        title: { en: "TMS Enterprise Platform", pt: "Plataforma TMS Enterprise" },
        subtitle: { en: "Loadsmart · Staff PM", pt: "Loadsmart · Staff PM" },
        description: {
          en: "Defining product strategy and the path to profitability for Loadsmart's TMS, used by major enterprise shippers in the US. Leading a team of up to 30 across product and operations, with focus on enterprise integrations and roadmap alignment.",
          pt: "Definindo estratégia de produto e o caminho para rentabilidade do TMS da Loadsmart, usado por grandes embarcadores nos EUA. Liderando um time de até 30 pessoas entre produto e operações, com foco em integrações enterprise e alinhamento de roadmap.",
        },
      },
      {
        title: { en: "Fleet Programs", pt: "Programas de Frota" },
        subtitle: { en: "Loadsmart · Product Lead", pt: "Loadsmart · Product Lead" },
        description: {
          en: "Created and scaled private and dedicated fleet programs for large shippers with complex operations. Product design from discovery to scale, including legacy system integrations and dynamic pricing. Multiple enterprise clients operating at scale.",
          pt: "Criei e escalei programas de frota privada e dedicada para grandes embarcadores com operações complexas. Design de produto do discovery à escala, incluindo integrações com sistemas legados e pricing dinâmico. Múltiplos clientes enterprise operando em escala.",
        },
      },
      {
        title: { en: "Integration Platform", pt: "Plataforma de Integração" },
        subtitle: { en: "Loadsmart · Staff PM", pt: "Loadsmart · Staff PM" },
        description: {
          en: "Built the integration layer connecting Loadsmart with clients' ERPs and TMS systems — APIs, webhooks, and enterprise connectors. Significantly reduced onboarding time for new clients.",
          pt: "Construí a camada de integração conectando a Loadsmart com ERPs e sistemas TMS dos clientes — APIs, webhooks e conectores enterprise. Reduziu significativamente o tempo de onboarding de novos clientes.",
        },
      },
      {
        title: { en: "Customer Success Platform", pt: "Plataforma de Customer Success" },
        subtitle: { en: "Movidesk", pt: "Movidesk" },
        description: {
          en: "Product management focused on competitive differentiation and retention. Helped structure the product that contributed to the company's Series A round.",
          pt: "Gestão de produto focada em diferenciação competitiva e retenção. Ajudei a estruturar o produto que contribuiu para a rodada Series A da empresa.",
        },
      },
      {
        title: { en: "Life-OS", pt: "Life-OS" },
        subtitle: { en: "Side project · Next.js, Supabase, Claude API, Tailwind", pt: "Projeto pessoal · Next.js, Supabase, Claude API, Tailwind" },
        description: {
          en: "Personal system for managing finances, habits, planning, and analytics. A full production app built from scratch using AI as development partner.",
          pt: "Sistema pessoal para gerenciar finanças, hábitos, planejamento e analytics. Um app completo em produção, construído do zero usando IA como parceiro de desenvolvimento.",
        },
      },
      {
        title: { en: "andrescaff.com", pt: "andrescaff.com" },
        subtitle: { en: "Next.js, Tailwind, Claude Code, Vercel", pt: "Next.js, Tailwind, Claude Code, Vercel" },
        description: {
          en: "This site. Designed and built entirely with Claude Code, from branding to deployment.",
          pt: "Este site. Projetado e construído inteiramente com Claude Code, do branding ao deploy.",
        },
      },
      {
        title: { en: "Design Studio Website", pt: "Site de Estúdio de Design" },
        subtitle: { en: "Client project · Next.js, Tailwind, Vercel", pt: "Projeto para cliente · Next.js, Tailwind, Vercel" },
        description: {
          en: "Institutional website for an interior design studio. From concept to deploy using AI tools.",
          pt: "Site institucional para um estúdio de design de interiores. Do conceito ao deploy usando ferramentas de IA.",
        },
      },
      {
        title: { en: "CS Meetup Brasil", pt: "CS Meetup Brasil" },
        subtitle: { en: "Community project · 2017–2020", pt: "Projeto comunitário · 2017–2020" },
        description: {
          en: "Started as 1 event in 1 city. Grew to 23 events across 13 cities with 32 volunteers. Created the Customer Success community that didn't exist in Brazil.",
          pt: "Começou como 1 evento em 1 cidade. Cresceu para 23 eventos em 13 cidades com 32 voluntários. Criei a comunidade de Customer Success que não existia no Brasil.",
        },
      },
      {
        title: { en: "Cliente Cast", pt: "Cliente Cast" },
        subtitle: { en: "Podcast · 60+ episodes", pt: "Podcast · 60+ episódios" },
        description: {
          en: "Podcast about Customer Success and CX in Brazil. 60+ episodes with industry leaders.",
          pt: "Podcast sobre Customer Success e CX no Brasil. 60+ episódios com líderes da indústria.",
        },
      },
      {
        title: { en: "Ontrack", pt: "Ontrack" },
        subtitle: { en: "Startup · Co-founder", pt: "Startup · Co-fundador" },
        description: {
          en: "Customer Success startup. Co-founded, raised an angel round. First experience building a company from scratch.",
          pt: "Startup de Customer Success. Co-fundei, levantamos uma rodada anjo. Primeira experiência construindo uma empresa do zero.",
        },
      },
      {
        title: { en: "Top 100 CS Professionals", pt: "Top 100 CS Professionals" },
        subtitle: { en: "Recognition · 2020", pt: "Reconhecimento · 2020" },
        description: {
          en: "Selected by public vote among Customer Success professionals worldwide. By Success Coaching.",
          pt: "Selecionado por voto público entre profissionais de Customer Success do mundo todo. Pela Success Coaching.",
        },
      },
    ],
  },

  // ============ ABOUT ============
  about: {
    title: { en: "About", pt: "Sobre" },
    bio: [
      {
        en: "I spent my first decade of professional life as a teacher. Not lecturing from the front of the room — sitting next to students, helping them think through problems on their own. That experience shaped how I work today more than anything else.",
        pt: "Passei minha primeira década profissional como professor. Não dando aula na frente da sala — sentando ao lado dos alunos, ajudando-os a pensar nos problemas por conta própria. Essa experiência moldou como trabalho hoje mais do que qualquer outra coisa.",
      },
      {
        en: "I got into tech through Customer Success. Co-founded Cliente Cast (a podcast, 60+ episodes), built CS Meetup Brasil from 1 event in 1 city to 23 events across 13 cities, and co-founded Ontrack, a CS startup where we raised an angel round. In 2020, I was voted one of the Top 100 Customer Success professionals globally.",
        pt: "Entrei em tech por Customer Success. Co-fundei o Cliente Cast (podcast, 60+ episódios), construí o CS Meetup Brasil de 1 evento em 1 cidade para 23 eventos em 13 cidades, e co-fundei a Ontrack, uma startup de CS onde levantamos uma rodada anjo. Em 2020, fui eleito um dos Top 100 profissionais de Customer Success do mundo.",
      },
      {
        en: "For the past 9 years I've been in tech, 7 of them in product management, 6 in logistics. I worked at Movidesk, where I helped structure the product for their Series A. Then joined Loadsmart, where I've been for 6 years — leading logistics platforms, enterprise integrations, and teams of up to 30 people. Currently Staff Product Manager, working on TMS strategy for enterprise shippers.",
        pt: "Nos últimos 9 anos estou em tech, 7 deles em gestão de produto, 6 em logística. Trabalhei na Movidesk, onde ajudei a estruturar o produto para a Series A. Depois entrei na Loadsmart, onde estou há 6 anos — liderando plataformas de logística, integrações enterprise e times de até 30 pessoas. Atualmente Staff Product Manager, trabalhando em estratégia de TMS para embarcadores enterprise.",
      },
      {
        en: "More recently, I've been building with AI tools. Not just writing specs and handing off — actually building. Claude Code, Cursor, Next.js. I like having my hands in the code.",
        pt: "Mais recentemente, tenho construído com ferramentas de IA. Não só escrevendo specs e passando adiante — realmente construindo. Claude Code, Cursor, Next.js. Gosto de ter as mãos no código.",
      },
      {
        en: "I'm based in Blumenau, in southern Brazil.",
        pt: "Moro em Blumenau, no sul do Brasil.",
      },
    ],
    links: {
      linkedin: { en: "LinkedIn — /in/andrescaff", pt: "LinkedIn — /in/andrescaff" },
      github: { en: "GitHub — @ScaffCS", pt: "GitHub — @ScaffCS" },
      email: { en: "Email — contato@andrescaff.com", pt: "Email — contato@andrescaff.com" },
    },
  },

  // ============ NOW ============
  now: {
    title: { en: "Now", pt: "Agora" },
    nowMovement: { en: "nownownow.com", pt: "nownownow.com" },
    lastUpdated: { en: "Last updated", pt: "Última atualização" },
    lastUpdatedDate: { en: "March 2026", pt: "Março 2026" },

    workingOnTitle: { en: "Working on", pt: "Trabalhando em" },
    workingOn: [
      {
        en: "**Loadsmart** — Product strategy for the TMS enterprise platform. Profitability and enterprise integrations.",
        pt: "**Loadsmart** — Estratégia de produto para a plataforma TMS enterprise. Rentabilidade e integrações enterprise.",
      },
      {
        en: "**Life-OS** — Iterating on financial analytics and AI-powered insights.",
        pt: "**Life-OS** — Iterando em analytics financeiro e insights com IA.",
      },
      {
        en: "**This site** — Rebuilding as personal portfolio. Built with Claude Code.",
        pt: "**Este site** — Reconstruindo como portfolio pessoal. Feito com Claude Code.",
      },
    ],

    learningTitle: { en: "Learning", pt: "Aprendendo" },
    learning: [
      {
        en: "AI-assisted development — using Claude Code, Cursor, and AI tools to go from spec to working product. Figuring out the workflow.",
        pt: "Desenvolvimento assistido por IA — usando Claude Code, Cursor e ferramentas de IA para ir de spec a produto funcionando. Descobrindo o workflow.",
      },
      {
        en: "Next.js deeper — Server Components, Server Actions, Supabase, TypeScript. Learning by building.",
        pt: "Next.js mais fundo — Server Components, Server Actions, Supabase, TypeScript. Aprendendo construindo.",
      },
    ],

    toolsTitle: { en: "Tools", pt: "Ferramentas" },
    tools: {
      en: "Claude Code, Next.js, Supabase, Tailwind, Vercel, TypeScript",
      pt: "Claude Code, Next.js, Supabase, Tailwind, Vercel, TypeScript",
    },

    basedInTitle: { en: "Based in", pt: "Baseado em" },
    basedIn: {
      en: "Blumenau, SC — Brazil. Remote.",
      pt: "Blumenau, SC — Brasil. Remoto.",
    },
  },

  // ============ CONTACT ============
  contact: {
    title: { en: "Contact", pt: "Contato" },
    linkedin: {
      label: { en: "LinkedIn", pt: "LinkedIn" },
      handle: "/in/andrescaff",
    },
    github: {
      label: { en: "GitHub", pt: "GitHub" },
      handle: "@ScaffCS",
    },
    email: {
      label: { en: "Email", pt: "Email" },
      handle: "contato@andrescaff.com",
    },
    location: {
      en: "Blumenau, SC — Brazil",
      pt: "Blumenau, SC — Brasil",
    },
  },

  // ============ TAB TITLE ============
  tabBlurTitle: { en: "Come back! 👋", pt: "Volta! 👋" },
} as const;

export type Translations = typeof translations;
