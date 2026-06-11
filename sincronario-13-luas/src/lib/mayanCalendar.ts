import { Selo, selos } from '../data/selos';
import { Tom, tons } from '../data/tons';
import { Lua, luas, diaForaDoTempo } from '../data/luas';

const MS_PER_DAY = 86400000;

export interface KinResult {
  kinNumber: number; // 1-260
  selo: Selo;
  tom: Tom;
}

export interface MoonResult {
  isDayOutOfTime: boolean;
  isLeapDay: boolean;
  lua: Lua | null;
  diaDaLua: number | null; // 1-28
  semana: number | null; // 1-4
  diaDaSemana: number | null; // 1-7
}

/**
 * Converte uma data gregoriana (UTC, sem horário) em Julian Day Number (JDN).
 * Algoritmo padrão (Fliegel & Van Flandern).
 */
export function toJulianDayNumber(date: Date): number {
  const y = date.getUTCFullYear();
  const m = date.getUTCMonth() + 1;
  const d = date.getUTCDate();
  const a = Math.floor((14 - m) / 12);
  const y2 = y + 4800 - a;
  const m2 = m + 12 * a - 3;
  return (
    d +
    Math.floor((153 * m2 + 2) / 5) +
    365 * y2 +
    Math.floor(y2 / 4) -
    Math.floor(y2 / 100) +
    Math.floor(y2 / 400) -
    32045
  );
}

/**
 * Constante de correlação entre o JDN e o Kin 1 do Tzolkin/Dreamspell.
 *
 * IMPORTANTE: a "matemática do tempo" (módulo 260) é universal e nunca muda,
 * mas a CORRELAÇÃO entre uma data gregoriana específica e um Kin específico
 * varia conforme a fonte (GMT 584283, Dreamspell de Argüelles, Lei do Tempo, etc).
 *
 * Este valor é um ponto de partida. Para calibrar:
 * 1. Pegue uma data com Kin conhecido em uma fonte de referência
 *    (ex: lawoftime.org, 13moon.com, ou o app oficial da Lei do Tempo).
 * 2. Calcule `toJulianDayNumber(dataReferencia)`.
 * 3. Ajuste DREAMSPELL_CORRELATION até que `dateToKin(dataReferencia).kinNumber`
 *    bata com o Kin conhecido.
 */
export const DREAMSPELL_CORRELATION = 1721422;

/** Retorna o Kin (1-260), Selo Solar (1-20) e Tom Galáctico (1-13) de uma data. */
export function dateToKin(date: Date): KinResult {
  const jdn = toJulianDayNumber(date);
  const kinNumber = (((jdn - DREAMSPELL_CORRELATION) % 260) + 260) % 260 + 1;
  const seloIndex = (kinNumber - 1) % 20;
  const tomIndex = (kinNumber - 1) % 13;
  return {
    kinNumber,
    selo: selos[seloIndex],
    tom: tons[tomIndex],
  };
}

/**
 * Retorna a posição da data no Sincronário das 13 Luas de 28 dias.
 *
 * O Ano Novo Galáctico começa em 26/julho. O ciclo tem 364 dias regulares
 * (13 luas x 28 dias) + o "Dia Fora do Tempo" (25/jul). Em anos bissextos,
 * existe um dia adicional ("Dia Verde"/dia bissexto) que também fica fora
 * da contagem das 13 luas.
 */
export function dateToMoon(date: Date): MoonResult {
  const year = date.getUTCFullYear();

  let cycleStart = Date.UTC(year, 6, 26); // 26 de julho deste ano
  if (date.getTime() < cycleStart) {
    cycleStart = Date.UTC(year - 1, 6, 26);
  }
  const cycleStartYear = new Date(cycleStart).getUTCFullYear();
  const nextCycleStart = Date.UTC(cycleStartYear + 1, 6, 26);

  const totalDaysInCycle = Math.round((nextCycleStart - cycleStart) / MS_PER_DAY); // 365 ou 366
  const dayOfCycle = Math.round((date.getTime() - cycleStart) / MS_PER_DAY); // 0-indexed

  const regularDays = 13 * 28; // 364

  if (dayOfCycle >= regularDays) {
    return {
      isDayOutOfTime: true,
      isLeapDay: totalDaysInCycle === 366 && dayOfCycle === regularDays + 1,
      lua: null,
      diaDaLua: null,
      semana: null,
      diaDaSemana: null,
    };
  }

  const moonIndex = Math.floor(dayOfCycle / 28); // 0-12
  const diaDaLua = (dayOfCycle % 28) + 1; // 1-28
  const semana = Math.floor((dayOfCycle % 28) / 7) + 1; // 1-4
  const diaDaSemana = ((dayOfCycle % 28) % 7) + 1; // 1-7

  return {
    isDayOutOfTime: false,
    isLeapDay: false,
    lua: luas[moonIndex],
    diaDaLua,
    semana,
    diaDaSemana,
  };
}

/** Conveniência: calcula Kin + posição lunar de uma vez. */
export function getSincronario(date: Date) {
  return {
    kin: dateToKin(date),
    lua: dateToMoon(date),
    diaForaDoTempo,
  };
}

/** Os 7 dias da semana gregoriana — usados apenas para fins comparativos/educativos. */
export const diasDaSemanaGregoriana = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado',
];
