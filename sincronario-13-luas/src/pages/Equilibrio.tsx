import EnergyBalanceCalculator from '../components/EnergyBalanceCalculator';

export default function Equilibrio() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-6 px-4 py-10">
      <div>
        <h1 className="font-display text-3xl font-bold">
          A Matemática do Equilíbrio
        </h1>
        <p className="mt-2 text-maya-branco/70">
          <strong className="text-cosmos-gold">Tempo + Energia = Arte</strong> —
          a máxima produtividade acontece com o mínimo esforço quando o tempo
          disponível e a energia disponível estão alinhados no "Agora", o
          único ponto onde passado e futuro se encontram. Ajuste os controles
          abaixo para ver seu balanço atual.
        </p>
      </div>
      <EnergyBalanceCalculator />
    </div>
  );
}
