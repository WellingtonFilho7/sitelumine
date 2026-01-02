# Etapa 4: Análise de Problemas de Contraste

**Data:** 02/01/2026  
**Foco:** Correções de UX visual, contraste e acessibilidade mobile

---

## Problemas Identificados

### 1. Botão "Formas de apoiar" (App.tsx linha 136)
**Localização:** Seção Pilares Institucionais  
**Problema:** `border-[#0B4F6C]` + `text-[#F7941D]` (laranja)  
**Contraste:** Laranja (#F7941D) sobre fundo branco é OK, mas borda azul escura confunde  
**Solução:** Mudar texto para azul escuro (#0B4F6C) para consistência

**Antes:**
```tsx
className="px-8 py-3 border-2 border-[#0B4F6C] text-[#F7941D] rounded-full hover:bg-[#0B4F6C] hover:text-white transition-all"
```

**Depois:**
```tsx
className="px-8 py-3 border-2 border-[#0B4F6C] text-[#0B4F6C] rounded-full hover:bg-[#0B4F6C] hover:text-white transition-all"
```

---

### 2. Botão "Formas de apoiar" (Hero.tsx linha 37)
**Localização:** Hero section  
**Problema:** Mesmo problema - `border-[#0B4F6C]` + `text-[#F7941D]`  
**Solução:** Mudar texto para azul escuro (#0B4F6C)

**Antes:**
```tsx
className="border-2 border-[#0B4F6C] text-[#F7941D] px-8 py-4 rounded-full hover:bg-[#0B4F6C] hover:text-white transition-all inline-flex items-center justify-center font-semibold"
```

**Depois:**
```tsx
className="border-2 border-[#0B4F6C] text-[#0B4F6C] px-8 py-4 rounded-full hover:bg-[#0B4F6C] hover:text-white transition-all inline-flex items-center justify-center font-semibold"
```

---

### 3. Links de navegação mobile (Header.tsx linha 87)
**Localização:** Menu mobile  
**Problema:** `text-[#4A5568]` (cinza médio) pode ter contraste insuficiente em alguns dispositivos  
**Solução:** Aumentar contraste para `text-gray-700` (#374151)

**Antes:**
```tsx
className="block w-full text-left py-3 px-4 text-[#4A5568] hover:text-[#0B4F6C] hover:bg-[#EFF5F8] rounded-lg transition-all"
```

**Depois:**
```tsx
className="block w-full text-left py-3 px-4 text-gray-700 hover:text-[#0B4F6C] hover:bg-[#EFF5F8] rounded-lg transition-all"
```

---

### 4. Links de navegação desktop (Header.tsx linha 51)
**Localização:** Menu desktop  
**Problema:** Mesmo problema - `text-[#4A5568]`  
**Solução:** Aumentar contraste para `text-gray-700`

**Antes:**
```tsx
className="text-[#4A5568] hover:text-[#0B4F6C] px-4 py-2 rounded-lg hover:bg-[#EFF5F8] transition-all"
```

**Depois:**
```tsx
className="text-gray-700 hover:text-[#0B4F6C] px-4 py-2 rounded-lg hover:bg-[#EFF5F8] transition-all"
```

---

## Paleta de Cores (Mantida)

- **Azul Primário:** #0B4F6C (títulos, botões principais)
- **Azul Secundário:** #2B7A9B (hover)
- **Laranja:** #F7941D (CTAs, destaques) - **REMOVIDO de botões outline**
- **Verde WhatsApp:** #25D366
- **Cinza Escuro:** #374151 (gray-700) - **NOVO para links**
- **Cinza Médio:** #4A5568 - **SUBSTITUÍDO**

---

## Ratios de Contraste (WCAG 2.1)

### Antes
- Laranja (#F7941D) sobre branco: ~3.5:1 (⚠️ AA Large apenas)
- Cinza médio (#4A5568) sobre branco: ~6.5:1 (✅ AA)

### Depois
- Azul escuro (#0B4F6C) sobre branco: ~8.2:1 (✅ AAA)
- Cinza escuro (#374151) sobre branco: ~10.7:1 (✅ AAA)

---

## Commits Planejados

1. **Corrigir botões outline (App.tsx e Hero.tsx)**
2. **Melhorar contraste de links (Header.tsx)**
3. **Adicionar focus-visible para acessibilidade**
4. **Ajustar touch targets mobile (min 44x44px)**
5. **Documentação**

---

## Regras

- ✅ Manter paleta existente
- ✅ Não mudar layout
- ✅ Não mudar textos
- ✅ Mudanças pequenas e reversíveis
- ✅ Gerar preview para validação mobile
