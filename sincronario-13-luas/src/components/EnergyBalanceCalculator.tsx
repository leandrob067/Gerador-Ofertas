import { useMemo, useState } from 'react';

interface Resultado {
  titulo: string;
  cor: string;
  texto: string;
}

function avaliar(energiaGasta: number, tempoDisponivel: number): Resultado {
  const energiaRestante = 100 - energiaGasta;
  const diff = energiaRestante - tempoDisponivel;

  if (diff < -25) {
    return {
      titulo: 'Alerta: Vegetação / Esgotamento',
      cor: 'border-maya-vermelho text-maya-vermelho',
      texto:
        'Você já gastou a maior parte da sua energia ANTES do tempo da experiência. ' +
        'O corpo chega ao "agora" sem combustível, e a mente entra em modo de ' +
        'sobrevivência (vegetação). Repetido por anos, esse padrão está associado ao ' +
        'esgotamento mental crônico (burnout) e à degeneração cognitiva (ex: Alzheimer). ' +
        'Ação: reduza compromissos, durma mais e recupere energia antes de agir.',
    };
  }

  if (diff > 25) {
    return {
      titulo: 'Desequilíbrio: Pressão da Matrix',
      cor: 'border-maya-amarelo text-maya-amarelo',
      texto:
        'Você tem energia disponível, mas o tempo da experiência está sendo ' +
        'espremido pela "Matrix" (agendas, prazos artificiais, notificações). ' +
        'Essa energia tende a virar ansiedade ou frustração por não encontrar ' +
        'espaço de expressão. Ação: crie blocos de tempo sem interrupções para ' +
        'que a energia disponível vire arte/produtividade real.',
    };
  }

  return {
    titulo: 'Fluxo: Tempo + Energia = Arte',
    cor: 'border-maya-azul text-maya-azul',
    texto:
      'Tempo e energia estão equilibrados. Esse é o estado de "Agora" — o único ' +
      'lugar onde passado e futuro se encontram. Aqui a ação acontece com o ' +
      'mínimo esforço e o máximo resultado: o estado de fluxo (Arte).',
  };
}

export default function EnergyBalanceCalculator() {
  const [energiaGasta, setEnergiaGasta] = useState(50);
  const [tempoDisponivel, setTempoDisponivel] = useState(50);

  const resultado = useMemo(
    () => avaliar(energiaGasta, tempoDisponivel),
    [energiaGasta, tempoDisponivel]
  );

  return (
    <div className="card flex flex-col gap-6">
      <div>
        <label className="flex justify-between text-sm text-maya-branco/70">
          <span>Energia já gasta antes do "agora" (estresse, multitarefas, preocupações)</span>
          <span className="font-semibold text-maya-branco">{energiaGasta}%</span>
        </label>
        <input
          type="range"
          min={0}
          max={100}
          value={energiaGasta}
          onChange={(e) => setEnergiaGasta(Number(e.target.value))}
          className="mt-2 w-full accent-maya-vermelho"
        />
      </div>

      <div>
        <label className="flex justify-between text-sm text-maya-branco/70">
          <span>Tempo disponível para viver a experiência presente</span>
          <span className="font-semibold text-maya-branco">{tempoDisponivel}%</span>
        </label>
        <input
          type="range"
          min={0}
          max={100}
          value={tempoDisponivel}
          onChange={(e) => setTempoDisponivel(Number(e.target.value))}
          className="mt-2 w-full accent-maya-azul"
        />
      </div>

      <div className={`rounded-xl border-l-4 bg-cosmos-deep/60 p-4 ${resultado.cor}`}>
        <p className="font-display text-lg font-bold">{resultado.titulo}</p>
        <p className="mt-2 text-sm leading-relaxed text-maya-branco/80">{resultado.texto}</p>
      </div>

      <div className="rounded-xl bg-white/5 p-4 text-sm leading-relaxed text-maya-branco/70">
        <p className="font-display font-semibold text-maya-branco">Exemplo prático:</p>
        <p className="mt-1">
          Se você tem uma crise de raiva logo após comer, a energia que deveria
          ir para a digestão (sistema parassimpático) é desviada para a reação
          de luta-ou-fuga (sistema simpático). O ciclo natural é quebrado, e o
          corpo "rouba" energia de um sistema para outro — gerando o
          desequilíbrio medido acima.
        </p>
      </div>
    </div>
  );
}
