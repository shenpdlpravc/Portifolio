# Plan Summary

**Phase:** 4
**Plan:** 05 (Gap Fix)
**Status:** Complete

**Tasks completed:**
1. Atualização do `src/app/layout.tsx` adicionando `text-foreground` explicitamente ao `<body>`. Isso impede que páginas renderizadas nativamente como erro pelo Next.js percam o mapeamento de cor, garantindo que botões (como GitHub, LinkedIn, Dark Mode) mantenham sua visibilidade.
2. Alteração de todas as âncoras relativas (ex: `#sobre`) para absolutas (ex: `/#sobre`) na `src/components/navbar.tsx` e `src/components/mobile-menu.tsx`. Com isso, links de navegação na Navbar funcionam mesmo que o usuário esteja numa subpágina (como o `/curriculo.pdf` ausente).

**Artifacts created:**
- `src/app/layout.tsx` (modificado)
- `src/components/navbar.tsx` (modificado)
- `src/components/mobile-menu.tsx` (modificado)
