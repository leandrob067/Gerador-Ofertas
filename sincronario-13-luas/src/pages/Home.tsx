import KinConverter from '../components/KinConverter';

export default function Home() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-6 px-4 py-10">
      <div>
        <h1 className="font-display text-3xl font-bold sm:text-4xl">
          Saia da <span className="text-maya-vermelho">Matrix Fantasma</span> do tempo
        </h1>
        <p className="mt-2 text-maya-branco/70">
          O calendário gregoriano foi desenhado para o trabalho e os impostos
          ("tempo é dinheiro"). A Lei do Tempo propõe a equação{' '}
          <strong className="text-cosmos-gold">Tempo + Energia = Arte</strong> —
          a matemática natural que governa biologia, ciclos lunares e
          criatividade. Comece descobrindo o Kin de hoje.
        </p>
      </div>
      <KinConverter />
    </div>
  );
}
