---
phase: 5
title: Componentes de Cards (Bots, APIs, LPs)
status: pending
---

# UAT: Phase 5 - Componentes de Cards

## Current Test
<!-- OVERWRITE each test - shows where we are -->

number: 3
name: Variação de Card de Bots
expected: |
  Selecione a aba "Bots". Verifique se o título do projeto é acompanhado de alguma indicação visual de ser um Bot e se há um ícone do Github junto ao projeto, com as tags de tecnologia (NLP, Python, etc.) em destaque.
awaiting: none

## Tests

### 1. Variação de Card de Landing Page
expected: Acesse a página inicial (Home) e role até a seção "Projetos em Destaque". Selecione a aba "Landing Pages". O card exibido deve conter uma imagem de capa atrativa na parte superior (acima do título e da descrição).
result: passed

### 2. Variação de Card de APIs
expected: Selecione a aba "APIs". Os projetos listados devem apresentar um link/botão extra de "Documentação" ou ícone externo para acessar os detalhes da API.
result: passed

### 3. Variação de Card de Bots
expected: Selecione a aba "Bots". Verifique se o título do projeto é acompanhado de alguma indicação visual de ser um Bot e se há um ícone do Github junto ao projeto, com as tags de tecnologia (NLP, Python, etc.) em destaque.
result: passed

## Summary

total: 3
passed: 3
issues: 0
pending: 0
skipped: 0

## Gaps
- O usuário notou que as APIs estão com tags em cores diferentes (o estilo condicional que aplicamos para 'bots' pode ter causado estranheza ou um bug visual). É necessário padronizar a cor das tags.
