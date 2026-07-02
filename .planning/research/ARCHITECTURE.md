# Architecture Research

## Component Boundaries
- **Core Layout**: Navbar, Footer, Layout wrapper (gestão de tema).
- **Views**: Home, Projetos (Sub-rotas ou abas para Bots, APIs, LPs), Contato.
- **Project Modules**: 
  - `BotCard`: Exibe status, tech stack e botão de demo.
  - `ApiCard`: Exibe endpoints principais e link da doc.
  - `LpCard`: Exibe preview image e link.

## Data Flow
- Dados dos projetos são estáticos (JSON/MD) alimentando os componentes para máxima performance (SSG se Next.js).
- Futuras APIs externas podem ser consumidas client-side para exibir status "Live" dos bots.
