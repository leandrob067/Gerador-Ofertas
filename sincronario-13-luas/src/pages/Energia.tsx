const etapas = [
  {
    titulo: '1. Entrada — Glândula Pineal',
    cor: 'border-maya-branco',
    texto:
      'A luz e os ciclos cósmicos (sol, lua, Kin do dia) são captados pela ' +
      'glândula pineal, que regula a produção de melatonina e sincroniza o ' +
      'relógio biológico com o tempo natural.',
  },
  {
    titulo: '2. Processamento — Sistema Nervoso Autônomo',
    cor: 'border-maya-azul',
    texto:
      'O sinal é distribuído entre o sistema simpático (ação, alerta, "luta ou ' +
      'fuga") e o parassimpático (descanso, digestão, reparo). Em equilíbrio, ' +
      'a energia flui entre os dois conforme a necessidade do momento.',
  },
  {
    titulo: '3. Distribuição — Chakras / Centros de Energia',
    cor: 'border-maya-amarelo',
    texto:
      'A energia processada é distribuída pelos centros energéticos do corpo, ' +
      'cada um associado a uma função vital (sobrevivência, criatividade, ' +
      'vontade, amor, expressão, intuição, conexão).',
  },
  {
    titulo: '4. Organização — Sistema Parassimpático',
    cor: 'border-maya-vermelho',
    texto:
      'Quando o parassimpático está no comando, o corpo organiza digestão, ' +
      'reparo celular e sono — os ciclos biológicos acontecem sem esforço ' +
      'consciente.',
  },
];

export default function Energia() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-6 px-4 py-10">
      <div>
        <h1 className="font-display text-3xl font-bold">Dinâmica da Energia</h1>
        <p className="mt-2 text-maya-branco/70">
          Por onde a energia entra no corpo — e como o sistema nervoso decide
          para onde ela vai.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {etapas.map((etapa) => (
          <div key={etapa.titulo} className={`card border-l-4 ${etapa.cor}`}>
            <p className="font-display text-lg font-bold">{etapa.titulo}</p>
            <p className="mt-2 text-sm leading-relaxed text-maya-branco/80">{etapa.texto}</p>
          </div>
        ))}
      </div>

      <div className="card border-l-4 border-cosmos-gold">
        <p className="font-display text-lg font-bold text-cosmos-gold">
          Exemplo: raiva logo após comer
        </p>
        <p className="mt-2 text-sm leading-relaxed text-maya-branco/80">
          Ao comer, o corpo direciona energia para o sistema parassimpático
          (digestão). Se uma crise de raiva acontece nesse momento, o sistema
          simpático é ativado abruptamente — a energia que estava na digestão
          é desviada para os músculos e a vigilância. O resultado: digestão
          incompleta (inchaço, má absorção) e um ciclo biológico interrompido.
          Repetido diariamente, esse padrão desgasta o sistema nervoso e
          contribui para o esgotamento descrito na seção de Equilíbrio.
        </p>
      </div>
    </div>
  );
}
