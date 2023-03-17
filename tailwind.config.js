/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        neon: {
          '0%': {boxShadow: '0 0 0px 0px #2DDE98'  },
          '100%': {boxShadow: '0 0 15px 5px #2DDE98'  },
        },
      },
      animation: {
        'neon': 'neon 2s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [],

}
