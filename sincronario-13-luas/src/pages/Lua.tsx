import MoonPanel from '../components/MoonPanel';

export default function Lua() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-6 px-4 py-10">
      <div>
        <h1 className="font-display text-3xl font-bold">Influência da Lua e Cronobiologia</h1>
        <p className="mt-2 text-maya-branco/70">
          O corpo humano é majoritariamente água — assim como a superfície da
          Terra, sujeita às marés. A cronobiologia estuda como ciclos externos
          (luz, lua, estações) regulam ritmos internos (sono, hormônios,
          digestão, humor). O calendário de 7 dias ignora completamente esses
          ciclos.
        </p>
      </div>
      <MoonPanel />
    </div>
  );
}
