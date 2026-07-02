---
status: testing
phase: 4
source: [04-01-SUMMARY.md]
started: 2026-07-02T11:09:52-03:00
updated: 2026-07-02T11:09:52-03:00
---

## Current Test
<!-- OVERWRITE each test - shows where we are -->

number: 3
name: Filtros Subsequentes
expected: |
  Após testar "Bots", clique em "APIs" e verifique se a lista muda para mostrar apenas os projetos relacionados a APIs. Em seguida, clique em "Todos" para confirmar que a visão completa foi restaurada perfeitamente.
awaiting: none

## Tests

### 1. Grade de Projetos e Proporção
expected: Role a página para baixo até a seção "Projetos em Destaque". Você deve ver uma grade com projetos mockados centralizada na tela. Clique na aba "Landing Pages" e garanta que o card restante não estica bizarramente em altura e que a grade inteira se encontra perfeitamente alinhada no centro tanto na versão mobile quanto desktop.
result: passed

### 2. Funcionamento do Filtro
expected: Acima da grade de projetos há uma lista de botões (Todos, Bots, APIs, Landing Pages). O botão "Todos" deve estar destacado. Clique no botão "Bots". A grade deve ser filtrada para mostrar apenas os projetos que são Bots (Discord Moderation Bot e Telegram Crypto Notificator). O botão "Bots" deve ficar em destaque.
result: passed

### 3. Filtros Subsequentes
expected: Após testar "Bots", clique em "APIs" e verifique se a lista muda para mostrar apenas os projetos relacionados a APIs. Em seguida, clique em "Todos" para confirmar que a visão completa foi restaurada perfeitamente.
result: passed

## Summary

total: 3
passed: 3
issues: 0
pending: 0
skipped: 0

## Gaps
- **Alinhamento e Proporção do Grid** (Resolvido no Plan 02)
- **Abas de Filtro Não Centralizadas** (Resolvido no Plan 03)
- **Logo Invisível no Light Theme** (Resolvido no Plan 04)
- **Navegação de Âncoras em Outras Páginas** (Resolvido no Plan 05)
- **Botões Ghost Invisíveis em Outras Páginas** (Resolvido no Plan 05)
- **Botão Currículo Ausente no Mobile**: O botão "Currículo" (junto com os botões sociais) foi colocado dentro de uma div que oculta no mobile (`hidden md:flex`). Eles precisam ser incorporados dentro do componente `MobileMenu` para que o usuário possa baixar o currículo pelo celular.
