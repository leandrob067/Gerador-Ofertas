import { NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: 'Hoje (Conversor)' },
  { to: '/sincronario', label: 'Sincronário' },
  { to: '/lua', label: 'Lua & Cronobiologia' },
  { to: '/mantra', label: 'Mantra & Glossário' },
  { to: '/energia', label: 'Dinâmica da Energia' },
  { to: '/equilibrio', label: 'Equilíbrio' },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-10 border-b border-white/10 bg-cosmos-deep/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl flex-wrap items-center gap-2 px-4 py-3">
        <span className="mr-4 font-display text-lg font-bold text-cosmos-gold">
          13 Luas
        </span>
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === '/'}
            className={({ isActive }) =>
              `pill transition ${
                isActive
                  ? 'bg-cosmos-gold text-cosmos-deep'
                  : 'text-maya-branco/80 hover:bg-white/10'
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
