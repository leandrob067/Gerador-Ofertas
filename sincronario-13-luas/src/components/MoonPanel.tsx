/**
 * Painel educativo sobre o ciclo lunar e cronobiologia.
 * Calcula a fase lunar aproximada usando um ciclo sinódico médio de
 * 29.530588 dias a partir de uma lua nova de referência conhecida
 * (06/jan/2000, 18:14 UTC — referência amplamente publicada).
 */
const SYNODIC_MONTH = 29.530588853;
const KNOWN_NEW_MOON = Date.UTC(2000, 0, 6, 18, 14);

const FASES = [
  { nome: 'Lua Nova', emoji: '🌑', influencia: 'Início, introspecção, baixa energia física — bom para planejar.' },
  { nome: 'Lua Crescente', emoji: '🌒', influencia: 'Energia em ascensão — bom para iniciar projetos e ações.' },
  { nome: 'Quarto Crescente', emoji: '🌓', influencia: 'Tensão criativa — momento de ajustar o rumo.' },
  { nome: 'Lua Gibosa Crescente', emoji: '🌔', influencia: 'Refinamento — revisar antes da entrega.' },
  { nome: 'Lua Cheia', emoji: '🌕', influencia: 'Pico de energia e fluidos corporais — emoções amplificadas, sono mais leve.' },
  { nome: 'Lua Gibosa Minguante', emoji: '🌖', influencia: 'Gratidão e compartilhamento — colher resultados.' },
  { nome: 'Quarto Minguante', emoji: '🌗', influencia: 'Liberação — soltar o que não serve mais.' },
  { nome: 'Lua Minguante', emoji: '🌘', influencia: 'Descanso e recuperação — priorize o sono e a digestão.' },
];

export function getMoonPhase(date: Date) {
  const daysSinceNew = (date.getTime() - KNOWN_NEW_MOON) / 86400000;
  const phaseFraction = ((daysSinceNew % SYNODIC_MONTH) + SYNODIC_MONTH) % SYNODIC_MONTH / SYNODIC_MONTH;
  const phaseIndex = Math.floor(phaseFraction * 8) % 8;
  const idadeDias = phaseFraction * SYNODIC_MONTH;
  return { ...FASES[phaseIndex], phaseFraction, idadeDias };
}

export default function MoonPanel() {
  const fase = getMoonPhase(new Date());

  return (
    <div className="card flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <span className="text-6xl">{fase.emoji}</span>
        <div>
          <p className="font-display text-2xl font-bold">{fase.nome}</p>
          <p className="text-sm text-maya-branco/70">
            Dia {fase.idadeDias.toFixed(1)} do ciclo de ~29,5 dias
          </p>
        </div>
      </div>
      <p className="text-sm leading-relaxed text-maya-branco/80">{fase.influencia}</p>

      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl bg-cosmos-deep/60 p-4">
          <p className="font-display font-semibold text-maya-azul">Sistema Natural (Radial)</p>
          <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-maya-branco/70">
            <li>13 luas de 28 dias = 364 + 1 dia fora do tempo</li>
            <li>Ritmo sincronizado com fluidos corporais e ciclo lunar</li>
            <li>Glândula pineal regulada por luz/ciclos cósmicos</li>
            <li>Sistema parassimpático no comando — descanso e digestão</li>
          </ul>
        </div>
        <div className="rounded-xl bg-maya-vermelho/10 p-4">
          <p className="font-display font-semibold text-maya-vermelho">Sistema Artificial (Mecânico)</p>
          <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-maya-branco/70">
            <li>12 meses desiguais (28 a 31 dias)</li>
            <li>Semana de 7 dias sem base biológica</li>
            <li>Relógio mecânico fragmenta o ritmo natural</li>
            <li>Sistema simpático cronicamente ativado — estresse, "tempo é dinheiro"</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
