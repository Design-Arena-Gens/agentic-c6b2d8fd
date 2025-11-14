/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: '#0b0d10',
          soft: '#0f1216',
          edge: '#11151a'
        },
        accent: {
          DEFAULT: '#7bdff2',
          soft: '#a1e8f7'
        }
      },
      boxShadow: {
        soft: '0 10px 40px rgba(0,0,0,0.25)'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' }
        }
      },
      animation: {
        float: 'float 8s ease-in-out infinite'
      }
    }
  },
  darkMode: 'class',
  plugins: []
};
