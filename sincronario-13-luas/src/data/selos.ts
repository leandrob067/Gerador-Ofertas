export type Elemento = 'vermelho' | 'branco' | 'azul' | 'amarelo';

export interface Selo {
  id: number; // 1-20
  nomeMaia: string;
  nomePt: string;
  elemento: Elemento;
  acao: string; // verbo/ação arquetípica
  essencia: string; // qualidade essencial
  poder: string; // poder do selo
  descricao: string;
}

// A sequência de cores segue o ciclo dos 4 elementos repetido 5x (20 selos)
export const selos: Selo[] = [
  { id: 1, nomeMaia: 'Imix', nomePt: 'Dragão', elemento: 'vermelho', acao: 'nutrir', essencia: 'nascimento, memória ancestral', poder: 'ser', descricao: 'A força primordial que alimenta e dá origem a tudo. Representa o útero, a memória do ser e o cuidado incondicional.' },
  { id: 2, nomeMaia: 'Ik', nomePt: 'Vento', elemento: 'branco', acao: 'comunicar', essencia: 'espírito, respiração', poder: 'espírito', descricao: 'O sopro vital, a voz, a inspiração. Conecta a mente ao espírito através da respiração consciente.' },
  { id: 3, nomeMaia: 'Akbal', nomePt: 'Noite', elemento: 'azul', acao: 'sonhar', essencia: 'abundância interior, intuição', poder: 'abundância', descricao: 'O templo interno, o útero da noite onde nascem os sonhos e a intuição é cultivada.' },
  { id: 4, nomeMaia: 'Kan', nomePt: 'Semente', elemento: 'amarelo', acao: 'florescer', essencia: 'potencial, alvo', poder: 'mirar', descricao: 'O potencial que aguarda germinação. Representa foco, intenção plantada e crescimento consciente.' },
  { id: 5, nomeMaia: 'Chicchan', nomePt: 'Serpente', elemento: 'vermelho', acao: 'sobreviver', essencia: 'força vital, instinto', poder: 'vida', descricao: 'A energia vital que percorre o corpo (kundalini). Instinto puro e força de sobrevivência.' },
  { id: 6, nomeMaia: 'Cimi', nomePt: 'Enlaçador de Mundos', elemento: 'branco', acao: 'equalizar', essencia: 'transcendência, renascimento', poder: 'morte/vida', descricao: 'A ponte entre os mundos. Ensina a soltar o que já cumpriu seu ciclo para permitir renascimento.' },
  { id: 7, nomeMaia: 'Manik', nomePt: 'Mão', elemento: 'azul', acao: 'curar', essencia: 'realização, cura', poder: 'curar', descricao: 'A mão que cura e realiza. Representa a capacidade de transformar conhecimento em ação concreta.' },
  { id: 8, nomeMaia: 'Lamat', nomePt: 'Estrela', elemento: 'amarelo', acao: 'harmonizar', essencia: 'elegância, arte, beleza', poder: 'beleza', descricao: 'A harmonia que se irradia como arte. Representa a elegância natural presente em todas as formas de vida.' },
  { id: 9, nomeMaia: 'Muluc', nomePt: 'Lua', elemento: 'vermelho', acao: 'purificar', essencia: 'fluxo emocional, universalização', poder: 'fluir', descricao: 'As águas emocionais e a purificação. Convida à entrega e ao fluxo dos sentimentos.' },
  { id: 10, nomeMaia: 'Oc', nomePt: 'Cachorro', elemento: 'branco', acao: 'amar', essencia: 'lealdade, coração', poder: 'amor', descricao: 'O coração leal. Representa o amor incondicional, a amizade e a guia fiel do caminho.' },
  { id: 11, nomeMaia: 'Chuen', nomePt: 'Macaco', elemento: 'azul', acao: 'brincar', essencia: 'magia, criatividade espontânea', poder: 'magia', descricao: 'O brincalhão cósmico. Ensina que a magia da vida se revela quando soltamos o controle e brincamos.' },
  { id: 12, nomeMaia: 'Eb', nomePt: 'Humano', elemento: 'amarelo', acao: 'influenciar', essencia: 'livre-arbítrio, caminho pessoal', poder: 'livre-arbítrio', descricao: 'A jornada humana e as escolhas conscientes. Representa a sabedoria de caminhar com responsabilidade.' },
  { id: 13, nomeMaia: 'Ben', nomePt: 'Caminhante do Céu', elemento: 'vermelho', acao: 'explorar', essencia: 'intencionalidade, templo interior', poder: 'intenção', descricao: 'O pilar que conecta céu e terra. Representa a casa interior e a exploração de novos horizontes.' },
  { id: 14, nomeMaia: 'Ix', nomePt: 'Mago', elemento: 'branco', acao: 'encantar', essencia: 'atemporalidade, receptividade', poder: 'encantamento', descricao: 'A magia silenciosa do agora. Representa a receptividade e o acesso a dimensões além do tempo linear.' },
  { id: 15, nomeMaia: 'Men', nomePt: 'Águia', elemento: 'azul', acao: 'criar', essencia: 'visão, mente planetária', poder: 'visão', descricao: 'A visão de águia que enxerga o todo. Representa a mente planetária e a criatividade visionária.' },
  { id: 16, nomeMaia: 'Cib', nomePt: 'Guerreiro', elemento: 'amarelo', acao: 'questionar', essencia: 'destemor, inteligência', poder: 'inteligência sem medo', descricao: 'A inteligência que questiona sem medo. Representa a coragem de buscar respostas autênticas.' },
  { id: 17, nomeMaia: 'Caban', nomePt: 'Terra', elemento: 'vermelho', acao: 'evoluir', essencia: 'sincronicidade, navegação', poder: 'sincronicidade', descricao: 'A força evolutiva da Terra. Representa a navegação pelas sincronicidades da vida.' },
  { id: 18, nomeMaia: 'Etznab', nomePt: 'Espelho', elemento: 'branco', acao: 'refletir', essencia: 'verdade sem fim, ordem', poder: 'reflexão', descricao: 'O espelho que reflete a verdade sem distorção. Representa clareza, ordem e autoconhecimento.' },
  { id: 19, nomeMaia: 'Cauac', nomePt: 'Tempestade', elemento: 'azul', acao: 'transformar', essencia: 'auto-geração, energia', poder: 'transformação', descricao: 'A tempestade purificadora. Representa a auto-geração de energia através da transformação.' },
  { id: 20, nomeMaia: 'Ahau', nomePt: 'Sol', elemento: 'amarelo', acao: 'iluminar', essencia: 'vida universal, iluminação', poder: 'iluminação', descricao: 'A consciência solar que ilumina tudo. Representa a vida universal e a realização plena.' },
];

export const elementoCores: Record<Elemento, { bg: string; text: string; label: string; verbo: string }> = {
  vermelho: { bg: 'bg-maya-vermelho', text: 'text-maya-vermelho', label: 'Vermelho', verbo: 'Iniciar' },
  branco: { bg: 'bg-maya-branco', text: 'text-maya-branco', label: 'Branco', verbo: 'Refinar' },
  azul: { bg: 'bg-maya-azul', text: 'text-maya-azul', label: 'Azul', verbo: 'Transformar' },
  amarelo: { bg: 'bg-maya-amarelo', text: 'text-maya-amarelo', label: 'Amarelo', verbo: 'Amadurecer' },
};
