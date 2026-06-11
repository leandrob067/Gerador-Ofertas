import { useMemo } from 'react';
import TzolkinGrid from '../components/TzolkinGrid';
import { dateToKin } from '../lib/mayanCalendar';
import { luas, diaForaDoTempo } from '../data/luas';

export default function Sincronario() {
  const kinHoje = useMemo(() => dateToKin(new Date()), []);

  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-6 px-4 py-10">
      <div>
        <h1 className="font-display text-3xl font-bold">Os Calendários Maias e o Sincronário</h1>
        <p className="mt-2 text-maya-branco/70">
          O <strong>Tzolkin</strong> é o módulo harmônico de 260 energias
          (20 Selos x 13 Tons). O <strong>Sincronário das 13 Luas</strong> reorganiza
          o ano em 13 meses iguais de 28 dias (364 dias) + 1 Dia Fora do Tempo,
          totalizando 365 dias — sem precisar de meses desiguais nem de uma
          "semana" arbitrária de 7 dias desconectada da natureza.
        </p>
      </div>

      <TzolkinGrid highlightKin={kinHoje.kinNumber} />

      <div className="card">
        <h2 className="font-display text-xl font-bold text-cosmos-gold">
          Tempo Artificial vs. Tempo Natural (4ª dimensão)
        </h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl bg-maya-vermelho/10 p-4">
            <p className="font-display font-semibold text-maya-vermelho">12:60 (Mecânico)</p>
            <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-maya-branco/70">
              <li>12 meses de tamanhos diferentes (28-31 dias)</li>
              <li>60 minutos / 60 segundos — base sexagesimal sem relação com ciclos vivos</li>
              <li>Semana de 7 dias imposta por convenção religiosa/comercial</li>
              <li>Linear: passado → presente → futuro como uma linha de produção</li>
            </ul>
          </div>
          <div className="rounded-xl bg-maya-azul/10 p-4">
            <p className="font-display font-semibold text-maya-azul">13:20 (Radial / Natural)</p>
            <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-maya-branco/70">
              <li>13 luas iguais de 28 dias = 364 dias</li>
              <li>+ 1 Dia Fora do Tempo (25/jul) = 365 dias</li>
              <li>Tzolkin de 260 dias = ciclo de gestação humana média</li>
              <li>Radial: o "Agora" é o centro de onde passado e futuro irradiam</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card">
        <h2 className="font-display text-xl font-bold text-cosmos-gold">As 13 Luas do Ano</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {luas.map((lua) => (
            <div key={lua.id} className="rounded-xl bg-cosmos-deep/60 p-4">
              <p className="font-display font-semibold">
                {lua.id}. {lua.nomePt} — {lua.poder}
              </p>
              <p className="text-xs text-maya-branco/50">{lua.periodoAproximado}</p>
              <p className="mt-1 text-sm text-maya-branco/70">{lua.descricao}</p>
            </div>
          ))}
          <div className="rounded-xl bg-cosmos-gold/10 p-4 sm:col-span-2">
            <p className="font-display font-semibold text-cosmos-gold">
              {diaForaDoTempo.nomePt} — {diaForaDoTempo.data}
            </p>
            <p className="mt-1 text-sm text-maya-branco/70">{diaForaDoTempo.descricao}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
