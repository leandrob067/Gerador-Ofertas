export interface Tom {
  id: number; // 1-13
  nomePt: string;
  verbo: string; // verbo de ativação ("Eu ___")
  poder: string; // poder/qualidade do tom
  pergunta: string; // pergunta cósmica do tom
  fraseLigacao: string; // frase de ligação usada no mantra
  descricao: string;
}

export const tons: Tom[] = [
  { id: 1, nomePt: 'Magnético', verbo: 'Atraio', poder: 'o propósito', pergunta: 'Qual é o propósito?', fraseLigacao: 'Unifico-me com a intenção de atrair', descricao: 'Inicia o ciclo. Unifica e atrai o propósito, dando o primeiro impulso.' },
  { id: 2, nomePt: 'Lunar', verbo: 'Polarizo', poder: 'o desafio', pergunta: 'Qual é o desafio?', fraseLigacao: 'Reconheço a polaridade para enfrentar', descricao: 'Revela a polaridade e o desafio que precisa ser equilibrado.' },
  { id: 3, nomePt: 'Elétrico', verbo: 'Ativo', poder: 'o serviço', pergunta: 'Como sirvo?', fraseLigacao: 'Ligo o circuito para ativar', descricao: 'Ativa o serviço, criando o vínculo entre intenção e ação.' },
  { id: 4, nomePt: 'Auto-Existente', verbo: 'Defino', poder: 'a forma', pergunta: 'Qual é a forma?', fraseLigacao: 'Meço e defino a estrutura de', descricao: 'Define a forma e mede o que é necessário para se manifestar.' },
  { id: 5, nomePt: 'Entoado', verbo: 'Comando', poder: 'a radiância', pergunta: 'Como expresso meu poder de forma radiante?', fraseLigacao: 'Empodero-me para irradiar', descricao: 'Empodera o centro, irradiando comando e radiância.' },
  { id: 6, nomePt: 'Rítmico', verbo: 'Organizo', poder: 'a igualdade', pergunta: 'Como me organizo em igualdade?', fraseLigacao: 'Equilibro o ritmo para organizar', descricao: 'Organiza o fluxo, criando equilíbrio e igualdade entre as partes.' },
  { id: 7, nomePt: 'Ressonante', verbo: 'Canalizo', poder: 'a sintonia', pergunta: 'Como sintonizo o canal?', fraseLigacao: 'Sintonizo-me para canalizar', descricao: 'Sintoniza canais, amplificando a ressonância e o alinhamento.' },
  { id: 8, nomePt: 'Galáctico', verbo: 'Harmonizo', poder: 'a integridade', pergunta: 'Como harmonizo a integridade?', fraseLigacao: 'Modelo com integridade para harmonizar', descricao: 'Harmoniza modelos, trazendo integridade ao todo.' },
  { id: 9, nomePt: 'Solar', verbo: 'Pulso', poder: 'a intenção', pergunta: 'Qual é minha intenção pulsante?', fraseLigacao: 'Realizo o pulso de', descricao: 'Pulsa a realização da intenção, dando vida ao propósito.' },
  { id: 10, nomePt: 'Planetário', verbo: 'Manifesto', poder: 'a perfeição', pergunta: 'Como manifesto com perfeição?', fraseLigacao: 'Produzo para manifestar', descricao: 'Manifesta na matéria, produzindo o resultado perfeito.' },
  { id: 11, nomePt: 'Espectral', verbo: 'Libero', poder: 'a dissolução', pergunta: 'O que preciso liberar?', fraseLigacao: 'Dissolvo para liberar', descricao: 'Dissolve estruturas antigas, liberando espaço para o novo.' },
  { id: 12, nomePt: 'Cristal', verbo: 'Dedico', poder: 'a cooperação', pergunta: 'Como coopero universalmente?', fraseLigacao: 'Universalizo para dedicar', descricao: 'Dedica-se à cooperação universal, refletindo como um cristal.' },
  { id: 13, nomePt: 'Cósmico', verbo: 'Transcendo', poder: 'a presença', pergunta: 'Como persisto além do tempo?', fraseLigacao: 'Permaneço presente para transcender', descricao: 'Transcende o ciclo, ancorando a presença atemporal antes de recomeçar.' },
];
