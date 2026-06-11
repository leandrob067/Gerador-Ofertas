import { useMemo, useState } from 'react';
import { dateToKin, dateToMoon, diasDaSemanaGregoriana } from '../lib/mayanCalendar';
import { elementoCores } from '../data/selos';
import { diaForaDoTempo } from '../data/luas';

function todayISO() {
  return new Date().toISOString().slice(0, 10);
}

export default function KinConverter() {
  const [isoDate, setIsoDate] = useState(todayISO());

  const { kin, moon, dataObj } = useMemo(() => {
    const dataObj = new Date(`${isoDate}T00:00:00Z`);
    return {
      dataObj,
      kin: dateToKin(dataObj),
      moon: dateToMoon(dataObj),
    };
  }, [isoDate]);

  const diaSemanaGregoriano = diasDaSemanaGregoriana[dataObj.getUTCDay()];
  const cor = elementoCores[kin.selo.elemento];

  return (
    <div className="card flex flex-col gap-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <label htmlFor="data" className="block text-sm text-maya-branco/70">
            Sua data gregoriana
          </label>
          <input
            id="data"
            type="date"
            value={isoDate}
            onChange={(e) => setIsoDate(e.target.value)}
            className="mt-1 rounded-lg border border-white/20 bg-cosmos-deep px-3 py-2 text-maya-branco"
          />
        </div>
        <div className="text-sm text-maya-branco/60">
          No calendário artificial, hoje é{' '}
          <span className="font-semibold text-maya-branco">{diaSemanaGregoriano}</span>.
          <br />
          Esse nome não existe na biologia — é uma convenção criada para
          organizar trabalho e impostos.
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl bg-cosmos-deep/60 p-4 text-center">
          <p className="text-xs uppercase tracking-widest text-maya-branco/50">Kin do Dia</p>
          <p className="font-display text-4xl font-bold text-cosmos-gold">{kin.kinNumber}</p>
          <p className="mt-1 text-sm text-maya-branco/70">de 260</p>
        </div>

        <div className={`rounded-xl p-4 text-center ${cor.bg}/20 border border-white/10`}>
          <p className="text-xs uppercase tracking-widest text-maya-branco/50">Selo Solar</p>
          <p className={`font-display text-2xl font-bold ${cor.text}`}>
            {kin.selo.nomePt}
          </p>
          <p className="text-sm text-maya-branco/70">
            {kin.selo.nomeMaia} · {cor.label}
          </p>
        </div>

        <div className="rounded-xl bg-cosmos-deep/60 p-4 text-center">
          <p className="text-xs uppercase tracking-widest text-maya-branco/50">Tom Galáctico</p>
          <p className="font-display text-2xl font-bold text-maya-azul">
            Tom {kin.tom.id} — {kin.tom.nomePt}
          </p>
          <p className="text-sm text-maya-branco/70">{kin.tom.poder}</p>
        </div>
      </div>

      <div className="rounded-xl border border-cosmos-gold/30 bg-cosmos-gold/5 p-4">
        <p className="text-xs uppercase tracking-widest text-cosmos-gold/80">
          Sincronário das 13 Luas
        </p>
        {moon.isDayOutOfTime ? (
          <p className="mt-1 font-display text-xl font-semibold">
            {diaForaDoTempo.nomePt}{moon.isLeapDay ? ' (Dia Bissexto)' : ''} — {diaForaDoTempo.descricao}
          </p>
        ) : (
          <p className="mt-1 font-display text-xl font-semibold">
            {moon.lua?.nomePt} — Dia {moon.diaDaLua}/28 (Semana {moon.semana}, dia {moon.diaDaSemana} de 7)
          </p>
        )}
      </div>

      <p className="text-sm leading-relaxed text-maya-branco/70">
        A glândula pineal não responde a "segunda-feira". Ela responde a ciclos
        reais: a luz do sol, as fases da lua e o ritmo de 13 luas x 28 dias —
        o mesmo ritmo do ciclo lunar/menstrual médio. Ao se sincronizar com o
        Kin do dia, você troca o relógio mecânico por um relógio biológico.
      </p>
    </div>
  );
}
