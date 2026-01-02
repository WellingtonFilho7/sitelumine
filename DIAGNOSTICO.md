# Diagnóstico Técnico - Site Instituto Lumine

**Data:** 02/01/2026  
**Repositório:** WellingtonFilho7/sitelumine  
**Branch:** main  
**Última atualização:** 27 minutos atrás

---

## 1. Mapa do Repositório

### Stack Tecnológica
- **Framework:** React 18.3.1 com Vite 6.3.5
- **Linguagem:** TypeScript (sem tsconfig.json configurado)
- **Estilização:** TailwindCSS com classes utilitárias inline
- **Componentes UI:** Radix UI (accordion, dialog, form, etc.) + shadcn/ui
- **Ícones:** Lucide React
- **Formulários:** React Hook Form 7.55.0
- **Build:** Vite com SWC para transpilação rápida

### Estrutura de Rotas/Páginas
- **SPA (Single Page Application)** sem roteamento dinâmico
- Navegação por âncoras (#sobre, #apoiar, #faq, #contato)
- Seções principais: Hero, Pilares, Proposta Educacional, Quem Somos, Impacto, Formas de Apoiar, FAQ, Contato
- **Componente FloatingDonateButton existe mas NÃO está sendo usado no App.tsx**

### Estilos
- TailwindCSS com paleta customizada (azul #0B4F6C, laranja #F7941D)
- Classes inline em todos os componentes
- Gradientes e transições CSS para interatividade
- Design responsivo com breakpoints md/lg
- Sem arquivo de configuração Tailwind visível na raiz

### Integrações
- **Nenhuma integração ativa** (sem formulário funcional, sem analytics, sem CRM)
- Links para WhatsApp (83 99910-1946) e Instagram (@instituto.lumine)
- E-mail de contato (contato@institutolumine.org) apenas como link mailto
- Chave PIX hardcoded no código (eae0b735-1a54-4b66-a791-3d0dc30aa728)

### Deploy
- **Plataforma:** Vercel (configurado via vercel.json)
- **Build:** `npm run build` gera pasta `build/` com assets estáticos
- **Domínio:** Não identificado no repositório
- **CI/CD:** Automático via Vercel (push para main)

---

## 2. 10 Maiores Riscos Técnicos para Produção

| # | Risco | Severidade | Impacto | Mitigação |
|---|-------|-----------|---------|-----------|
| 1 | **Sem SEO básico** (title genérico, sem meta description, sem Open Graph) | 🔴 Alta | Baixa visibilidade em buscadores e redes sociais | Adicionar meta tags no index.html |
| 2 | **Botão WhatsApp flutuante não está sendo usado** (componente existe mas não renderiza) | 🔴 Alta | Perda de conversões diretas via WhatsApp | Importar e adicionar FloatingDonateButton no App.tsx |
| 3 | **Seção Contato sem formulário funcional** (apenas links estáticos) | 🟠 Média | Visitantes não conseguem enviar mensagens diretas | Implementar formulário com validação e backend |
| 4 | **Vulnerabilidade de segurança no Vite 6.3.5** (1 moderate severity) | 🟠 Média | Possível exploração de falhas de segurança | Atualizar para Vite 6.4.1+ via `npm audit fix` |
| 5 | **Sem tsconfig.json** (TypeScript sem configuração explícita) | 🟡 Baixa | Possíveis erros de tipo não detectados | Criar tsconfig.json com strict mode |
| 6 | **Chave PIX exposta no código-fonte** (hardcoded) | 🟡 Baixa | Dificuldade para alterar sem rebuild | Mover para variável de ambiente |
| 7 | **Sem analytics ou tracking** (Google Analytics, Meta Pixel, etc.) | 🟡 Baixa | Impossível medir conversões e tráfego | Adicionar Google Analytics 4 |
| 8 | **Imagens externas (Unsplash) sem fallback robusto** | 🟡 Baixa | Quebra visual se Unsplash ficar indisponível | Hospedar imagens localmente ou em CDN próprio |
| 9 | **Sem validação de acessibilidade** (ARIA labels parciais) | 🟡 Baixa | Dificuldade para usuários com deficiência visual | Revisar e completar atributos ARIA |
| 10 | **Build sem otimização de bundle** (180KB JS gzipped) | 🟡 Baixa | Carregamento lento em conexões 3G | Code splitting e lazy loading de componentes |

**Legenda de Severidade:**  
🔴 Alta = Impede conversões ou prejudica SEO  
🟠 Média = Afeta experiência ou segurança  
🟡 Baixa = Melhoria técnica ou preventiva

---

## 3. Plano de Implementação em 3 Etapas

### **Etapa 1: Conversão e Contato** (até 5 commits)
**Objetivo:** Maximizar conversões sem alterar design ou textos públicos.

| Commit | Descrição | Impacto | Risco |
|--------|-----------|---------|-------|
| 1 | Adicionar botão WhatsApp flutuante visível com mensagem pré-preenchida | 🟢 Alto | 🟢 Baixo |
| 2 | Adicionar SEO básico: title, description, Open Graph no index.html | 🟢 Alto | 🟢 Baixo |
| 3 | Melhorar seção Contato com CTA claro e estrutura para formulário | 🟢 Médio | 🟢 Baixo |
| 4 | Corrigir vulnerabilidade do Vite (atualizar para 6.4.1+) | 🟢 Médio | 🟢 Baixo |
| 5 | Adicionar tsconfig.json com configurações básicas | 🟢 Baixo | 🟢 Baixo |

**Regras:**
- Não mudar identidade visual (cores, fontes, logos)
- Não alterar textos públicos existentes
- Não remover rotas ou seções
- Não adicionar dependências novas (exceto se estritamente necessário)
- Mudanças pequenas e verificáveis

---

### **Etapa 2: Analytics e Otimização** (até 5 commits)
**Objetivo:** Medir resultados e melhorar performance.

| Commit | Descrição | Impacto | Risco |
|--------|-----------|---------|-------|
| 1 | Adicionar Google Analytics 4 (via gtag.js) | 🟢 Alto | 🟢 Baixo |
| 2 | Implementar lazy loading para componentes pesados | 🟢 Médio | 🟡 Médio |
| 3 | Hospedar imagens localmente (substituir Unsplash) | 🟢 Médio | 🟢 Baixo |
| 4 | Adicionar meta tag de verificação do Google Search Console | 🟢 Baixo | 🟢 Baixo |
| 5 | Otimizar bundle com code splitting (Vite) | 🟢 Baixo | 🟡 Médio |

---

### **Etapa 3: Formulário e Integrações** (até 5 commits)
**Objetivo:** Capturar leads e automatizar comunicação.

| Commit | Descrição | Impacto | Risco |
|--------|-----------|---------|-------|
| 1 | Implementar formulário de contato funcional (React Hook Form) | 🟢 Alto | 🟡 Médio |
| 2 | Adicionar validação e feedback visual no formulário | 🟢 Médio | 🟢 Baixo |
| 3 | Integrar backend para envio de e-mails (Vercel Serverless ou FormSubmit) | 🟢 Alto | 🟠 Alto |
| 4 | Adicionar proteção anti-spam leve (honeypot ou reCAPTCHA v3) | 🟢 Médio | 🟡 Médio |
| 5 | Criar página de confirmação de envio | 🟢 Baixo | 🟢 Baixo |

**Observação:** Etapa 3 pode exigir escolha entre 2 opções de backend (FormSubmit vs Vercel Serverless). Recomendação será apresentada antes da execução.

---

## Próximos Passos

✅ **Agora:** Executar Etapa 1 com até 5 commits  
⏳ **Depois:** Aguardar aprovação para Etapa 2  
⏳ **Futuro:** Aguardar aprovação para Etapa 3

---

**Gerado automaticamente por Manus AI**
