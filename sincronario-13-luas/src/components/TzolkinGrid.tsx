import { selos, elementoCores } from '../data/selos';
import { tons } from '../data/tons';

interface Props {
  highlightKin?: number;
}

/**
 * Renderiza o módulo harmônico Tzolkin (260 = 20 Selos x 13 Tons) como uma
 * grade. Cada célula representa um Kin (1-260), calculado por:
 *   kin = ((tomIndex) + (seloIndex * 13)) ... mas a sequência real do
 * Tzolkin avança simultaneamente Selo e Tom a cada dia, então usamos a
 * fórmula: kin = n, selo = ((n-1) % 20) + 1, tom = ((n-1) % 13) + 1.
 */
export default function TzolkinGrid({ highlightKin }: Props) {
  const kins = Array.from({ length: 260 }, (_, i) => i + 1);

  return (
    <div className="card overflow-x-auto">
      <p className="mb-4 text-sm text-maya-branco/70">
        O Tzolkin é o módulo harmônico de <strong>260 energias</strong>{' '}
        (20 Selos Solares x 13 Tons Galácticos). Cada Kin se repete a cada
        260 dias, criando um ritmo independente do calendário gregoriano.
      </p>
      <div className="grid grid-cols-13 gap-1 sm:grid-cols-20" style={{ gridTemplateColumns: 'repeat(20, minmax(0, 1fr))' }}>
        {kins.map((kin) => {
          const seloIndex = (kin - 1) % 20;
          const tomIndex = (kin - 1) % 13;
          const selo = selos[seloIndex];
          const tom = tons[tomIndex];
          const cor = elementoCores[selo.elemento];
          const isHighlighted = kin === highlightKin;
          return (
            <div
              key={kin}
              title={`Kin ${kin}: Tom ${tom.id} ${tom.nomePt} · ${selo.nomePt} (${selo.nomeMaia})`}
              className={`flex aspect-square items-center justify-center rounded text-[9px] font-bold transition ${cor.bg}/30 ${
                isHighlighted ? 'ring-2 ring-cosmos-gold' : ''
              }`}
            >
              {kin}
            </div>
          );
        })}
      </div>
    </div>
  );
}
