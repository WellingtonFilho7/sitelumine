# Análise dos Botões Problemáticos

## Problema Identificado

Na imagem enviada pelo usuário, vejo claramente:

### Botão Azul Grande (Hero - Esquerda)
- **Localização:** Seção Hero, lado esquerdo
- **Aparência:** Botão azul escuro grande, arredondado
- **Problema:** TEXTO INVISÍVEL (deveria dizer "Conheça o Lumine")
- **Classe atual:** `bg-[#0B4F6C] text-white`
- **Índice no screenshot:** 8

### Botão Outline (Hero - Direita)
- **Localização:** Seção Hero, lado direito
- **Aparência:** Botão com borda azul
- **Status:** ✅ Texto VISÍVEL ("Formas de apoiar")
- **Classe atual:** `border-2 border-[#0B4F6C] text-[#0B4F6C]`

## Hipótese do Problema

O botão azul com `bg-[#0B4F6C] text-white` está com texto invisível porque:

1. **Possibilidade 1:** Algum CSS está sobrescrevendo `text-white`
2. **Possibilidade 2:** O texto está sendo renderizado com a mesma cor do fundo
3. **Possibilidade 3:** Problema de z-index ou opacity

## Botões WhatsApp Flutuantes

**Status:** Presentes no código (linha 540 do App.tsx)
**Problema:** Não aparecem no site

**Possíveis causas:**
1. CSS de posicionamento incorreto
2. z-index muito baixo
3. Condição de exibição não sendo atendida
4. Build não incluiu o componente

## Ação Necessária

1. Verificar CSS compilado do botão azul
2. Adicionar !important em text-white
3. Verificar se FloatingDonateButton está sendo renderizado
4. Testar em navegador real
