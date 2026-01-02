# Etapa 2: Estabilidade e Estrutura

**Branch:** `feature/etapa-2-estabilidade`  
**Foco:** Estabilidade, previsibilidade de build, clareza estrutural mínima  
**Data:** 02/01/2026

---

## Objetivos

- ✅ Melhorar estabilidade do build
- ✅ Aumentar previsibilidade do código
- ✅ Adicionar clareza estrutural mínima
- ❌ NÃO mudar layout
- ❌ NÃO mudar identidade visual
- ❌ NÃO mudar textos públicos

---

## Commits Planejados (até 5)

### Commit 1: Adicionar .eslintrc e corrigir warnings
**Objetivo:** Padronizar código e eliminar warnings de lint  
**Impacto:** 🟢 Médio | **Risco:** 🟢 Baixo  
**Arquivos:** `.eslintrc.json`, ajustes em componentes

### Commit 2: Adicionar README.md completo na raiz
**Objetivo:** Documentar estrutura do projeto e comandos  
**Impacto:** 🟢 Baixo | **Risco:** 🟢 Baixo  
**Arquivos:** `README.md` (raiz)

### Commit 3: Adicionar .env.example e configurar variáveis
**Objetivo:** Preparar para configurações externas (PIX, contatos)  
**Impacto:** 🟢 Médio | **Risco:** 🟢 Baixo  
**Arquivos:** `.env.example`, `vite.config.ts`, `App.tsx`

### Commit 4: Adicionar scripts úteis no package.json
**Objetivo:** Facilitar desenvolvimento (lint, preview, type-check)  
**Impacto:** 🟢 Baixo | **Risco:** 🟢 Baixo  
**Arquivos:** `package.json`

### Commit 5: Adicionar .gitignore melhorado
**Objetivo:** Evitar commit de arquivos desnecessários  
**Impacto:** 🟢 Baixo | **Risco:** 🟢 Baixo  
**Arquivos:** `.gitignore`

---

## Regras de Execução

- Mudanças pequenas e reversíveis
- Cada commit testado individualmente
- Build deve passar após cada commit
- Nenhuma mudança visual ou de conteúdo
