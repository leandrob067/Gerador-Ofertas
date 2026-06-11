/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Os 4 elementos / cores maias (ciclo Vermelho > Branco > Azul > Amarelo)
        maya: {
          vermelho: {
            DEFAULT: '#C0392B', // Iniciar
            light: '#E57368',
            dark: '#7B241C',
          },
          branco: {
            DEFAULT: '#F4F1EA', // Refinar
            light: '#FFFFFF',
            dark: '#C9C3B5',
          },
          azul: {
            DEFAULT: '#2E86AB', // Transformar
            light: '#6FB7D6',
            dark: '#1B4F66',
          },
          amarelo: {
            DEFAULT: '#F4C430', // Amadurecer
            light: '#FBE08A',
            dark: '#A6831F',
          },
        },
        // Fundo "espaço-tempo" / cósmico
        cosmos: {
          DEFAULT: '#0B0E23',
          deep: '#05060F',
          nebula: '#1B1F3B',
          gold: '#D4AF37',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      backgroundImage: {
        'radial-cosmos': 'radial-gradient(circle at top, #1B1F3B 0%, #05060F 70%)',
      },
    },
  },
  plugins: [],
};
