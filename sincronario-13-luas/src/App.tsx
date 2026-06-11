import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import Sincronario from './pages/Sincronario';
import Lua from './pages/Lua';
import Mantra from './pages/Mantra';
import Energia from './pages/Energia';
import Equilibrio from './pages/Equilibrio';

export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sincronario" element={<Sincronario />} />
          <Route path="/lua" element={<Lua />} />
          <Route path="/mantra" element={<Mantra />} />
          <Route path="/energia" element={<Energia />} />
          <Route path="/equilibrio" element={<Equilibrio />} />
        </Routes>
      </main>
      <footer className="border-t border-white/10 px-4 py-6 text-center text-xs text-maya-branco/40">
        Inspirado nos ensinamentos de José Argüelles (Lei do Tempo) e Vania Temporini.
        Conteúdo educativo — não substitui orientação médica.
      </footer>
    </div>
  );
}
