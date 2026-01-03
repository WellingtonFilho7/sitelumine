# Etapa 1: Conversão e Contato - Log de Commits

**Branch:** feature/etapa-1-conversao  
**Data:** 02/01/2026

---

## Commit 1: Adicionar botão WhatsApp flutuante visível

**Status:** 🔄 Em execução

### Objetivo
Ativar o componente FloatingDonateButton que já existe mas não está sendo usado, e adicionar botão WhatsApp flutuante com mensagem pré-preenchida.

### Arquivos alterados
- `campanha-lumine/src/App.tsx`
- `campanha-lumine/src/components/FloatingDonateButton.tsx`

### Mudanças
1. Importar FloatingDonateButton no App.tsx
2. Adicionar componente antes do fechamento da div principal
3. Modificar FloatingDonateButton para incluir botão WhatsApp com mensagem pré-preenchida

### Como testar
1. `npm run dev`
2. Rolar a página para baixo (>300px)
3. Verificar se aparecem 2 botões flutuantes: "Doar agora" e "WhatsApp"
4. Clicar no botão WhatsApp e verificar se abre com mensagem pré-preenchida

### Rollback
```bash
git revert HEAD
```

---

## Commit 2: Adicionar SEO básico

**Status:** ⏳ Aguardando

---

## Commit 3: Melhorar seção Contato

**Status:** ⏳ Aguardando

---

## Commit 4: Atualizar Vite

**Status:** ⏳ Aguardando

---

## Commit 5: Adicionar tsconfig.json

**Status:** ⏳ Aguardando

---
