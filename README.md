# Site Instituto Lumine

Site institucional do Instituto Lumine - Associação cristã sem fins lucrativos dedicada à educação cristã clássica para crianças em situação de vulnerabilidade.

**URL:** https://sitelumine.vercel.app

---

## 📋 Sobre o Projeto

O site foi desenvolvido para apresentar o Instituto Lumine, sua missão, metodologia educacional e formas de apoio. Construído com React, TypeScript e TailwindCSS, o projeto prioriza performance, acessibilidade e conversão.

### Tecnologias Principais

- **React 18.3.1** - Biblioteca UI
- **TypeScript** - Tipagem estática
- **Vite 6.4.1** - Build tool
- **TailwindCSS** - Estilização
- **Radix UI** - Componentes acessíveis
- **Lucide React** - Ícones

---

## 🚀 Começando

### Pré-requisitos

- Node.js 18+ 
- npm ou pnpm

### Instalação

```bash
# Clonar repositório
git clone https://github.com/WellingtonFilho7/sitelumine.git
cd sitelumine/campanha-lumine

# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev
```

O site estará disponível em `http://localhost:3000`

### Scripts Disponíveis

```bash
npm run dev        # Servidor de desenvolvimento
npm run build      # Build para produção
npm run lint       # Verificar código com ESLint
npm run lint:fix   # Corrigir problemas automaticamente
```

---

## 📁 Estrutura do Projeto

```
sitelumine/
├── campanha-lumine/          # Aplicação principal
│   ├── src/
│   │   ├── components/       # Componentes React
│   │   │   ├── ui/          # Componentes base (shadcn/ui)
│   │   │   ├── Header.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── FAQ.tsx
│   │   │   └── FloatingDonateButton.tsx
│   │   ├── assets/          # Imagens e assets
│   │   ├── styles/          # Estilos globais
│   │   ├── App.tsx          # Componente principal
│   │   └── main.tsx         # Entry point
│   ├── build/               # Build de produção (gerado)
│   ├── index.html           # HTML base
│   ├── package.json
│   ├── tsconfig.json
│   ├── vite.config.ts
│   └── eslint.config.js
├── DIAGNOSTICO.md           # Diagnóstico técnico completo
├── RELATORIO_ETAPA1.md      # Relatório da Etapa 1
├── ETAPA1_COMMITS.md        # Log de commits da Etapa 1
├── vercel.json              # Configuração Vercel
└── README.md                # Este arquivo
```

---

## 🎨 Identidade Visual

### Cores Principais

- **Azul Primário:** `#0B4F6C` (títulos, header, footer)
- **Azul Secundário:** `#2B7A9B` (hover, gradientes)
- **Laranja:** `#F7941D` (CTAs, destaques)
- **Verde WhatsApp:** `#25D366` (botão WhatsApp)

### Tipografia

- **Fonte:** System fonts (sans-serif)
- **Hierarquia:** Títulos em azul, corpo em cinza escuro

---

## 🔧 Configuração

### Variáveis de Ambiente

Não há variáveis de ambiente obrigatórias no momento. Configurações como chave PIX e contatos estão hardcoded no código.

### Build para Produção

```bash
npm run build
```

O build gera arquivos otimizados na pasta `build/`:
- HTML minificado
- CSS com PurgeCSS
- JS com code splitting
- Assets otimizados

---

## 🚢 Deploy

O projeto está configurado para deploy automático no **Vercel**:

1. Push para branch `main` → Deploy automático
2. Vercel detecta `vercel.json` e usa configuração customizada
3. Build executado: `npm run build`
4. Output: pasta `build/`

### Deploy Manual

```bash
# Via Vercel CLI
vercel deploy --prod
```

---

## 📊 Melhorias Implementadas

### Etapa 1: Conversão e Contato
- ✅ Botão WhatsApp flutuante
- ✅ Meta tags SEO e Open Graph
- ✅ CTA destacado na seção Contato
- ✅ Atualização de segurança (Vite 6.4.1)
- ✅ Configuração TypeScript

### Etapa 2: Estabilidade e Estrutura
- ✅ ESLint configurado
- ✅ README.md completo
- ⏳ Em andamento...

---

## 🤝 Contribuindo

Este é um projeto privado do Instituto Lumine. Para sugestões ou melhorias, entre em contato com a equipe.

---

## 📞 Contato

**Instituto Lumine**  
📧 contato@institutolumine.org  
📱 (83) 99910-1946 | (83) 99994-3792  
📍 Gurinhém, Paraíba  
🌐 https://sitelumine.vercel.app  
📷 [@instituto.lumine](https://instagram.com/instituto.lumine)

---

## 📄 Licença

© 2024 Instituto Lumine. Todos os direitos reservados.

---

**Desenvolvido com ❤️ para transformar vidas através da educação**
