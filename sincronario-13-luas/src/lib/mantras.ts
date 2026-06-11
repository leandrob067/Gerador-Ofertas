import { KinResult } from './mayanCalendar';

/**
 * Gera o "Mantra de Ativação Galáctica" do Kin do dia, no formato
 * inspirado na afirmação clássica do Dreamspell:
 * "[Tom] [Selo] para o fim de [ação], [ligação do tom] [poder do tom].
 *  Eu seleo o resultado de [essência] com o tom [n] de [poder]."
 */
export function gerarMantra({ kinNumber, selo, tom }: KinResult): string {
  const linha1 = `${tom.verbo} ${selo.nomePt} (${selo.nomeMaia}) para o fim de ${selo.acao}.`;
  const linha2 = `${tom.fraseLigacao} ${tom.poder}.`;
  const linha3 = `Eu seleo o resultado de ${selo.essencia} com o Tom ${tom.id} — ${tom.nomePt} — de ${tom.poder}.`;
  const linha4 = `Kin ${kinNumber}: pergunta do dia — "${tom.pergunta}"`;
  return [linha1, linha2, linha3, linha4].join('\n');
}
