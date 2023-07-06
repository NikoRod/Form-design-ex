/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      keyframes: {
        moverCuadrado: {
          '0%': { transform: 'translateY(0) rotate(90deg);' },
          '50%': { transform: 'translateY(20px) rotate(180deg);' },
          '100%': { transform: 'translateY(0) rotate(360deg);' },
        },
        moverCirculo: {
          '0%': { transform: 'translateY(0);' },
          '50%': { transform: 'translateY(15px);' },
          '100%': { transform: 'translateY(0);' },
        },
      },

      animation: {
        'moverCuadrado1': 'moverCuadrado 5s infinite;',
        'moverCuadrado2': 'moverCuadrado 8s infinite;',
        'moverCirculo1': 'moverCirculo 5s infinite;',
        'moverCirculo2': 'moverCirculo 8s infinite;',
      },
    },
  },
  plugins: [],
}