import MantraCard from '../components/MantraCard';
import Glossary from '../components/Glossary';

export default function Mantra() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-6 px-4 py-10">
      <div>
        <h1 className="font-display text-3xl font-bold">Mantra do Dia & Glossário</h1>
        <p className="mt-2 text-maya-branco/70">
          Cada Kin tem uma "fórmula de ativação" — uma frase que conecta a
          ação do Selo Solar com o poder do Tom Galáctico. Repita o mantra ao
          acordar para alinhar sua intenção com o Kin do dia.
        </p>
      </div>
      <MantraCard />
      <Glossary />
    </div>
  );
}
