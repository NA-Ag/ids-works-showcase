import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui-components/src/**/*.{js,ts,jsx,tsx}",
    "../../packages/admin-frontend/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vault: {
          blue: '#005C97',
          darkBlue: '#003366',
          wine: '#722F37',
          darkWine: '#4A0404',
          yellow: '#FFD700',
          paper: '#FDFBF7',
          gray: '#36454F'
        }
      },
      fontFamily: {
        sans: ['Archivo', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      keyframes: {
        loading: {
          '0%': { width: '0%' },
          '50%': { width: '85%' },
          '100%': { width: '85%' }
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.9' }
        },
        scroll: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' }
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        loading: 'loading 2s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 3s ease-in-out infinite',
        scroll: 'scroll 5s linear infinite',
        'fade-in': 'fade-in 0.5s ease-out forwards'
      }
    }
  },
  plugins: [],
}