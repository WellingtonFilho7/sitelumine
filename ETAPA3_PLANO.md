# Etapa 3: Contato Funcional

**Branch:** `feature/etapa-3-contato-funcional`  
**Foco:** Contato funcional, confiança institucional, simplicidade operacional  
**Data:** 02/01/2026

---

## Objetivos

- ✅ Formulário de contato funcional
- ✅ Anti-spam integrado (honeypot)
- ✅ Redirect pós-envio para página de confirmação
- ✅ Solução externa simples (FormSubmit)
- ❌ SEM backend próprio
- ❌ SEM dependências novas
- ❌ SEM refatoração grande

---

## Solução Escolhida: FormSubmit

**URL:** https://formsubmit.co  
**Como funciona:** Form HTML nativo → POST para `https://formsubmit.co/{email}`  
**Recursos usados:**
- Honeypot (anti-spam)
- Redirect customizável
- Email de confirmação automático
- Zero configuração

---

## Commits Planejados (até 5)

### Commit 1: Criar componente ContactForm
**Objetivo:** Criar formulário HTML nativo com FormSubmit  
**Impacto:** 🟢 Alto | **Risco:** 🟢 Baixo  
**Arquivos:** `src/components/ContactForm.tsx` (novo)

### Commit 2: Criar página de confirmação
**Objetivo:** Página de agradecimento pós-envio  
**Impacto:** 🟢 Médio | **Risco:** 🟢 Baixo  
**Arquivos:** `src/components/ContactSuccess.tsx` (novo)

### Commit 3: Integrar formulário na seção Contato
**Objetivo:** Substituir conteúdo estático por formulário funcional  
**Impacto:** 🟢 Alto | **Risco:** 🟢 Baixo  
**Arquivos:** `src/App.tsx` (editar seção Contato)

### Commit 4: Adicionar validação client-side
**Objetivo:** Validação HTML5 nativa + feedback visual  
**Impacto:** 🟢 Médio | **Risco:** 🟢 Baixo  
**Arquivos:** `src/components/ContactForm.tsx` (editar)

### Commit 5: Adicionar email no .env.example
**Objetivo:** Documentar email usado no FormSubmit  
**Impacto:** 🟢 Baixo | **Risco:** 🟢 Baixo  
**Arquivos:** `.env.example` (editar)

---

## Regras de Execução

- Commits pequenos e reversíveis
- Cada commit testado individualmente
- Build deve passar após cada commit
- Nenhuma dependência nova
- Sem backend próprio
