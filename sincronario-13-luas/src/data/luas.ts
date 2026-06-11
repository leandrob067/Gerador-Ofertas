export interface Lua {
  id: number; // 1-13
  nomePt: string;
  poder: string;
  periodoAproximado: string; // intervalo gregoriano aproximado (ano não-bissexto)
  descricao: string;
}

// O Sincronário das 13 Luas tem 13 meses de 28 dias = 364 dias,
// mais o "Dia Fora do Tempo" (25/jul), totalizando 365 dias.
// O Ano Novo Galáctico começa em 26 de julho.
export const luas: Lua[] = [
  { id: 1, nomePt: 'Lua Magnética', poder: 'Propósito', periodoAproximado: '26/jul – 22/ago', descricao: 'Unifica o propósito do ano. Momento de definir intenções com clareza.' },
  { id: 2, nomePt: 'Lua Lunar', poder: 'Desafio', periodoAproximado: '23/ago – 19/set', descricao: 'Revela os desafios e polaridades a serem trabalhados.' },
  { id: 3, nomePt: 'Lua Elétrica', poder: 'Serviço', periodoAproximado: '20/set – 17/out', descricao: 'Ativa o serviço — colocar a intenção em movimento.' },
  { id: 4, nomePt: 'Lua Auto-Existente', poder: 'Forma', periodoAproximado: '18/out – 14/nov', descricao: 'Define formas e estruturas necessárias para o propósito.' },
  { id: 5, nomePt: 'Lua Entoada', poder: 'Radiância', periodoAproximado: '15/nov – 12/dez', descricao: 'Empodera e irradia o que foi estruturado.' },
  { id: 6, nomePt: 'Lua Rítmica', poder: 'Igualdade', periodoAproximado: '13/dez – 09/jan', descricao: 'Organiza o ritmo, equilibrando todas as áreas da vida.' },
  { id: 7, nomePt: 'Lua Ressonante', poder: 'Sintonia', periodoAproximado: '10/jan – 06/fev', descricao: 'Sintoniza canais internos e externos.' },
  { id: 8, nomePt: 'Lua Galáctica', poder: 'Integridade', periodoAproximado: '07/fev – 06/mar', descricao: 'Harmoniza com integridade tudo o que foi sintonizado.' },
  { id: 9, nomePt: 'Lua Solar', poder: 'Intenção', periodoAproximado: '07/mar – 03/abr', descricao: 'Pulsa a realização da intenção original.' },
  { id: 10, nomePt: 'Lua Planetária', poder: 'Manifestação', periodoAproximado: '04/abr – 01/mai', descricao: 'Manifesta concretamente os resultados do ciclo.' },
  { id: 11, nomePt: 'Lua Espectral', poder: 'Liberação', periodoAproximado: '02/mai – 29/mai', descricao: 'Libera o que não serve mais, abrindo espaço.' },
  { id: 12, nomePt: 'Lua Cristal', poder: 'Cooperação', periodoAproximado: '30/mai – 26/jun', descricao: 'Coopera universalmente, refletindo os aprendizados do ano.' },
  { id: 13, nomePt: 'Lua Cósmica', poder: 'Presença', periodoAproximado: '27/jun – 24/jul', descricao: 'Transcende o ciclo, integrando tudo antes do recomeço.' },
];

export const diaForaDoTempo = {
  nomePt: 'Dia Fora do Tempo',
  data: '25/jul',
  descricao:
    'Um dia que não pertence a nenhuma semana, mês ou ano contado pela matemática artificial. ' +
    'É um espaço de celebração, perdão e arte — o "ponto zero" entre um ciclo e outro.',
};
