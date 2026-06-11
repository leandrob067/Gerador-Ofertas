import { useMemo, useState } from 'react';
import { dateToKin } from '../lib/mayanCalendar';
import { gerarMantra } from '../lib/mantras';
import { elementoCores } from '../data/selos';

function todayISO() {
  return new Date().toISOString().slice(0, 10);
}

export default function MantraCard() {
  const [isoDate, setIsoDate] = useState(todayISO());

  const kin = useMemo(() => dateToKin(new Date(`${isoDate}T00:00:00Z`)), [isoDate]);
  const mantra = useMemo(() => gerarMantra(kin), [kin]);
  const cor = elementoCores[kin.selo.elemento];

  return (
    <div className="card flex flex-col gap-4">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <h3 className="font-display text-xl font-bold text-cosmos-gold">
          Mantra de Ativação Galáctica
        </h3>
        <input
          type="date"
          value={isoDate}
          onChange={(e) => setIsoDate(e.target.value)}
          className="rounded-lg border border-white/20 bg-cosmos-deep px-3 py-2 text-maya-branco"
        />
      </div>

      <div className={`rounded-xl border-l-4 ${cor.text} border-current bg-cosmos-deep/60 p-4`}>
        <p className="text-xs uppercase tracking-widest text-maya-branco/50">
          Kin {kin.kinNumber} — Tom {kin.tom.id} {kin.tom.nomePt} · Selo {kin.selo.nomePt}
        </p>
        <pre className="mt-2 whitespace-pre-wrap font-body text-base leading-relaxed text-maya-branco">
          {mantra}
        </pre>
      </div>
    </div>
  );
}
