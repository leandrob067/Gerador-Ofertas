import { useState } from 'react';
import { selos, elementoCores } from '../data/selos';
import { tons } from '../data/tons';
import { diasDaSemanaGregoriana } from '../lib/mayanCalendar';

const tabs = ['selos', 'tons', 'dias-gregorianos'] as const;
type Tab = (typeof tabs)[number];

const tabLabels: Record<Tab, string> = {
  selos: '20 Selos Solares',
  tons: '13 Tons Galácticos',
  'dias-gregorianos': 'Dias da Semana (Gregoriano)',
};

const explicacaoDiasGregorianos: Record<string, string> = {
  'Domingo': 'Dies Solis (dia do Sol) — origem romana, depois ressignificado como "dia do Senhor" no cristianismo.',
  'Segunda-feira': 'Dies Lunae (dia da Lua) — segundo dia da semana de trabalho no calendário comercial.',
  'Terça-feira': 'Dies Martis (dia de Marte) — associado ao deus da guerra.',
  'Quarta-feira': 'Dies Mercurii (dia de Mercúrio) — associado ao comércio e comunicação.',
  'Quinta-feira': 'Dies Iovis (dia de Júpiter) — associado à expansão e autoridade.',
  'Sexta-feira': 'Dies Veneris (dia de Vênus) — associado ao prazer e relacionamentos.',
  'Sábado': 'Dies Saturni (dia de Saturno) — associado a limites, trabalho e estrutura.',
};

export default function Glossary() {
  const [tab, setTab] = useState<Tab>('selos');

  return (
    <div className="card flex flex-col gap-4">
      <div className="flex flex-wrap gap-2">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`pill transition ${
              tab === t ? 'bg-cosmos-gold text-cosmos-deep' : 'bg-white/5 text-maya-branco/80 hover:bg-white/10'
            }`}
          >
            {tabLabels[t]}
          </button>
        ))}
      </div>

      {tab === 'selos' && (
        <div className="grid gap-3 sm:grid-cols-2">
          {selos.map((selo) => {
            const cor = elementoCores[selo.elemento];
            return (
              <div key={selo.id} className="rounded-xl bg-cosmos-deep/60 p-4">
                <p className={`font-display font-bold ${cor.text}`}>
                  {selo.id}. {selo.nomePt} ({selo.nomeMaia}) — {cor.label}
                </p>
                <p className="mt-1 text-sm text-maya-branco/70">{selo.descricao}</p>
              </div>
            );
          })}
        </div>
      )}

      {tab === 'tons' && (
        <div className="grid gap-3 sm:grid-cols-2">
          {tons.map((tom) => (
            <div key={tom.id} className="rounded-xl bg-cosmos-deep/60 p-4">
              <p className="font-display font-bold text-maya-azul">
                Tom {tom.id} — {tom.nomePt}
              </p>
              <p className="mt-1 text-sm text-maya-branco/70">{tom.descricao}</p>
              <p className="mt-1 text-xs italic text-cosmos-gold/80">{tom.pergunta}</p>
            </div>
          ))}
        </div>
      )}

      {tab === 'dias-gregorianos' && (
        <div className="grid gap-3 sm:grid-cols-2">
          {diasDaSemanaGregoriana.map((dia) => (
            <div key={dia} className="rounded-xl bg-maya-vermelho/10 p-4">
              <p className="font-display font-bold">{dia}</p>
              <p className="mt-1 text-sm text-maya-branco/70">{explicacaoDiasGregorianos[dia]}</p>
            </div>
          ))}
          <p className="sm:col-span-2 text-sm text-maya-branco/60">
            Nenhum desses dias corresponde a um ciclo biológico. São nomes de
            divindades/planetas usados para organizar o trabalho — a "Matrix"
            do tempo artificial.
          </p>
        </div>
      )}
    </div>
  );
}
