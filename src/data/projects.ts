export type ProjectCategory = "bot" | "api" | "landing-page"

export interface Project {
  id: string
  title: string
  description: string
  category: ProjectCategory
  tags: string[]
  docLink?: string
  githubLink?: string
  coverImage?: string
}

export const projects: Project[] = [
  {
    id: "bot-discord-mod",
    title: "Discord Moderation Bot",
    description: "Um bot inteligente focado em moderação automática utilizando filtros NLP para o Discord.",
    category: "bot",
    tags: ["Node.js", "Discord.js", "NLP"],
    githubLink: "#"
  },
  {
    id: "api-payments",
    title: "Gateway Middleware API",
    description: "API escalável desenvolvida para atuar como middleware integrador entre sistemas de e-commerce e provedores de pagamento.",
    category: "api",
    tags: ["Express", "TypeScript", "Redis"],
    docLink: "#"
  },
  {
    id: "lp-saas",
    title: "SaaS Analytics LP",
    description: "Landing page de alta conversão para uma plataforma de análise de dados, com animações dinâmicas e design dark mode.",
    category: "landing-page",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "bot-telegram-notificator",
    title: "Telegram Crypto Notificator",
    description: "Bot automatizado que envia alertas de preços e oportunidades do mercado de criptomoedas em tempo real.",
    category: "bot",
    tags: ["Python", "Telegram API", "Webhooks"],
    githubLink: "#"
  },
  {
    id: "api-auth",
    title: "Centralized Auth Service",
    description: "Microsserviço de autenticação OAuth2 e JWT pronto para ser plugado em arquiteturas distribuídas.",
    category: "api",
    tags: ["NestJS", "PostgreSQL", "JWT"],
    docLink: "#"
  }
]

