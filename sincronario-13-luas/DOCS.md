# Sincronário 13 Luas — Escopo Técnico e de UX

Plataforma educativa interativa baseada na Lei do Tempo (José Argüelles) e no
Sincronário das 13 Luas (inspirado em Vania Temporini), que converte datas
gregorianas em Kin/Selo/Tom/Lua e ensina a "matemática do tempo natural"
(Tempo + Energia = Arte).

---

## 1. Stack Técnica

- **Frontend**: React 18 + TypeScript + Vite + TailwindCSS + React Router
- **Lógica do calendário**: módulo puro (`src/lib/mayanCalendar.ts`), sem
  dependências externas — testável isoladamente e reutilizável em backend
  (Node) ou app mobile (React Native) no futuro.
- **Backend**: não é necessário para o MVP (tudo roda no cliente). Se for
  preciso persistir progresso do usuário (onboarding de 13 dias, diário de
  Kin), recomenda-se um backend leve (FastAPI/Node) + banco (Postgres/SQLite)
  — fora do escopo deste scaffold inicial.

---

## 2. Mapa do Site (Sitemap)

```
/                → Home / Conversor & Sincronizador (Seção 1)
/sincronario     → Tzolkin (260) + Sincronário 13 Luas (Seção 2)
/lua             → Influência da Lua e Cronobiologia (Seção 3)
/mantra          → Mantra do Dia + Glossário interativo (Seção 4)
/energia         → Dinâmica da Energia (pineal, SNA, chakras) (Seção 5)
/equilibrio      → Calculadora Tempo x Energia (Seção 6)
```

Navegação fixa no topo (componente `Nav.tsx`), com 6 itens — mapeando 1:1
para as 6 seções pedidas no briefing.

---

## 3. Arquitetura de Dados

### 3.1 Entidades principais

| Entidade | Cardinalidade | Campos-chave |
|---|---|---|
| `Selo` (Selo Solar) | 20 | `id`, `nomeMaia`, `nomePt`, `elemento` (cor), `acao`, `essencia`, `poder`, `descricao` |
| `Tom` (Tom Galáctico) | 13 | `id`, `nomePt`, `verbo`, `poder`, `pergunta`, `fraseLigacao`, `descricao` |
| `Lua` | 13 | `id`, `nomePt`, `poder`, `periodoAproximado`, `descricao` |
| `Kin` | 260 (derivado) | `kinNumber` = `((JDN - C) mod 260) + 1`; `selo = selos[(kin-1) % 20]`; `tom = tons[(kin-1) % 13]` |
| `DiaForaDoTempo` | 1 (+1 em bissextos) | `nomePt`, `data`, `descricao` |

### 3.2 Algoritmo central (`src/lib/mayanCalendar.ts`)

1. **Data Gregoriana → Julian Day Number (JDN)**: fórmula padrão de
   Fliegel & Van Flandern (determinística, sem fuso horário — sempre UTC).
2. **JDN → Kin**: `kin = ((JDN - DREAMSPELL_CORRELATION) mod 260) + 1`.
   - `DREAMSPELL_CORRELATION` é uma **constante calibrável**. A matemática
     modular (260) é universal; a correlação com uma data específica varia
     entre tradições (GMT 584283 clássico vs. Dreamspell vs. Lei do Tempo).
     O scaffold já inclui instruções de calibração no código-fonte.
3. **Kin → Selo + Tom**: `selo = (kin-1) % 20`, `tom = (kin-1) % 13`
   (avançam simultaneamente, criando as 260 combinações únicas).
4. **Data Gregoriana → Posição no Sincronário 13 Luas**:
   - Ano sincronário começa em **26/julho**.
   - `dayOfCycle = diferença em dias desde 26/jul`.
   - Se `dayOfCycle < 364`: `lua = floor(dayOfCycle/28)`, `diaDaLua = dayOfCycle % 28 + 1`.
   - Se `dayOfCycle >= 364`: é o **Dia Fora do Tempo** (25/jul) — e em anos
     bissextos, há um segundo dia "fora da contagem" (dia bissexto).

### 3.3 Por que isso é uma "matriz de 260"?

20 Selos x 13 Tons = 260 combinações únicas, cada uma ocorrendo exatamente
uma vez por ciclo de 260 dias (Tzolkin). Como `mdc(20,13) = 1`, a sequência
percorre **todas** as combinações antes de repetir — por isso o Tzolkin é
representado como uma grade de 13x20 (ou 20x13) no componente
`TzolkinGrid.tsx`.

---

## 4. Design System Conceitual

### 4.1 Paleta — Os 4 Elementos Maias

| Cor | Token Tailwind | Hex | Significado | Selos associados |
|---|---|---|---|---|
| Vermelho | `maya-vermelho` | `#C0392B` | **Iniciar** | Imix, Chicchan, Muluc, Ben, Caban |
| Branco | `maya-branco` | `#F4F1EA` | **Refinar** | Ik, Cimi, Oc, Ix, Etznab |
| Azul | `maya-azul` | `#2E86AB` | **Transformar** | Akbal, Manik, Chuen, Men, Cauac |
| Amarelo | `maya-amarelo` | `#F4C430` | **Amadurecer** | Kan, Lamat, Eb, Cib, Ahau |

### 4.2 Fundo "Espaço-Tempo"

- `cosmos.deep` (`#05060F`) e `cosmos.nebula` (`#1B1F3B`): fundo gradiente
  radial (`bg-radial-cosmos`), remetendo ao céu noturno / observação
  astronômica maia.
- `cosmos.gold` (`#D4AF37`): cor de destaque (CTA, Kin do dia, títulos),
  remetendo ao Sol e à "Lei do Tempo" como luz/conhecimento.

### 4.3 Tipografia

- **Display** (`Space Grotesk`): títulos, números de Kin — geométrica,
  remete a glifos/códigos.
- **Body** (`Inter`): textos longos, alta legibilidade.

### 4.4 Componentes-padrão

- `.card`: painel translúcido com borda sutil — usado para todos os blocos
  de conteúdo/interatividade.
- `.pill`: badges de navegação e tags de glossário.
- `.btn-primary`: CTA dourado sobre fundo escuro.

---

## 5. Roteiro de Onboarding (5–10 minutos por dia)

Objetivo: reprogramar o usuário para checar o **Kin do dia** em vez do "dia
da semana", em uma rotina curta e repetível.

**Dia 0 — Boas-vindas (1x, ~10 min)**
1. Tela inicial explica a "Matrix Fantasma" (1 min de leitura).
2. Usuário insere a data de hoje → vê Kin, Selo, Tom e Lua (Home).
3. Botão "Entenda o Tzolkin" → leva para `/sincronario` (2 min).
4. CTA final: "Volte amanhã para descobrir seu próximo Kin".

**Rotina diária (5–10 min)**
1. **(1 min)** Abrir a Home → ver o Kin do dia automaticamente (data atual
   pré-preenchida).
2. **(2 min)** Ler o Mantra de Ativação Galáctica (`/mantra`) e repeti-lo em
   voz alta.
3. **(2 min)** Checar o painel da Lua (`/lua`) — perceber a fase lunar e
   ajustar expectativas de energia para o dia.
4. **(3–5 min)** Usar a Calculadora de Equilíbrio (`/equilibrio`) — ajustar
   os sliders conforme o estado real do dia anterior, e ler a recomendação.

**Reforço semanal (1x por semana 13 dias = 1 "selo" do Tzolkin)**
- Revisar `/sincronario` para entender em qual "selo de 13 dias" (onda
  encantada) o usuário está.

---

## 6. Prompts para Geração Visual (referência para Midjourney/DALL·E/Canva)

> Use estes prompts para gerar ilustrações/ícones que complementem a UI.
> Estilo geral: **flat illustration, paleta dos 4 elementos maias (vermelho
> #C0392B, branco #F4F1EA, azul #2E86AB, amarelo #F4C430), fundo cósmico
> escuro #05060F, traços geométricos inspirados em glifos maias, sem texto.**

1. **Hero da Home**: "Glândula pineal estilizada como um terceiro olho
   dourado irradiando raios de luz que se conectam a símbolos de 20 selos
   solares maias dispostos em círculo, fundo cósmico escuro com estrelas,
   estilo flat geométrico, paleta vermelho/branco/azul/amarelo + dourado."

2. **Tzolkin / Sincronário**: "Grade circular (mandala) de 260 pontos
   organizados em 13 anéis concêntricos de 20 símbolos cada, representando
   o Tzolkin maia, cores cíclicas vermelho-branco-azul-amarelo, fundo
   espacial escuro, estilo infográfico minimalista."

3. **Influência da Lua**: "Silhueta de corpo humano em posição de
   meditação, com linhas de energia conectando a glândula pineal à lua em
   suas 8 fases dispostas em arco acima da cabeça, paleta azul e dourado
   sobre fundo escuro, estilo line-art com preenchimentos sutis."

4. **Dinâmica da Energia (chakras/SNA)**: "Corte transversal estilizado de
   um corpo humano sentado, mostrando 7 centros de energia coloridos ao
   longo da coluna conectados por uma linha de luz dourada que sobe até a
   glândula pineal, sistema nervoso representado como ramificações
   prateadas finas, fundo cósmico escuro."

5. **Calculadora de Equilíbrio (Tempo x Energia)**: "Duas balanças
   sobrepostas formando um símbolo de infinito, um lado com um relógio
   mecânico quebrado (vermelho), outro lado com uma espiral dourada de luz
   (representando energia natural), composição minimalista, fundo escuro
   #05060F."

6. **Ícone/Favicon**: "Símbolo circular minimalista: três círculos
   concêntricos dourados sobre fundo azul-noite escuro, representando o
   'olho do tempo', estilo flat vetorial, alta legibilidade em tamanho
   pequeno (favicon)."

---

## 7. Próximos Passos (fora do escopo deste scaffold)

- Calibrar `DREAMSPELL_CORRELATION` com fonte oficial escolhida.
- Persistência de progresso do onboarding (login + banco de dados).
- Testes unitários para `mayanCalendar.ts` (casos de borda: virada de ano
  sincronário, anos bissextos, Dia Fora do Tempo).
- Internacionalização (i18n) caso o site seja expandido para outros idiomas.
- Animações (Framer Motion) para a "Dinâmica da Energia" (Seção 5).
