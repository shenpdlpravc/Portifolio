# Portfolio do Desenvolvedor

## What This Is

Um site de portfólio pessoal construído em Next.js e TailwindCSS, focado em exibir projetos (principalmente bots, APIs e landing pages). Serve como uma vitrine interativa e responsiva para recrutadores avaliarem as habilidades técnicas do desenvolvedor.

## Core Value

Demonstrar competência técnica e criatividade de forma clara e acessível, facilitando para potenciais empregadores o entendimento e o teste dos projetos expostos.

## Requirements

### Validated

- ✓ Estrutura base de portfólio (seções: Sobre, Vitrine de Projetos, Contato/Currículo) — v1.0
- ✓ Identidade visual que mistura minimalismo, criatividade e dinamismo (suporte a Dark Mode) — v1.0
- ✓ Componentes modulares dedicados para exibir Bots (com descrições/links) — v1.0
- ✓ Componentes dedicados para listar APIs (possibilidade de mostrar endpoints ou documentação) — v1.0
- ✓ Vitrine otimizada para exibir Landing Pages — v1.0
- ✓ Navegação otimizada para tech recruiters (acesso rápido a repositórios, demos e currículo) — v1.0

### Active

(Planejamento da próxima versão em andamento)

### Out of Scope

- [Funções complexas de e-commerce/freelance] — O foco atual é atração para vagas, não venda direta de serviços.
- [Projetos já populados] — A plataforma está criada como uma "casca" pronta para receber os *futuros* projetos.

## Context

O v1.0 foi concluído com sucesso. A base estrutural sólida em Next.js + Tailwind está estabelecida, com um design minimalista, dark mode e uma grid responsiva robusta para filtragem de categorias.

## Constraints

- **Público-alvo**: O design e a experiência do usuário devem focar na eficiência para quem avalia candidatos (recrutadores e líderes técnicos).
- **Manutenibilidade**: A arquitetura precisa ser simples de atualizar, pois novos projetos serão adicionados com frequência.

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Foco em Recrutadores | Direciona a arquitetura de informação do site para conversão em entrevistas | ✓ Good |
| Design Híbrido | Minimalista mas dinâmico: mostra habilidade sem prejudicar a leitura | ✓ Good |
| Animações de Layout | Decisão de manter a grid simples para a filtragem, em vez do framer-motion | ✓ Good |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd-transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd-complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-07-02 after v1.0 milestone*
