/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#09090b',
        surface: {
          DEFAULT: '#141417',
          low: '#0f0f12',
          lowest: '#08080a',
          high: '#1d1d22',
          highest: '#27272f',
          bright: '#32323d'
        },
        primary: {
          DEFAULT: '#c5a059',
          light: '#dfc18b',
          dark: '#9a7a47'
        },
        gold: {
          DEFAULT: '#c5a059',
          light: '#dfc18b',
          dark: '#9a7a47',
          accent: '#faeccf'
        },
        secondary: '#a1a1aa',
        borderGlass: 'rgba(197, 160, 89, 0.15)'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      }
    },
  },
  plugins: [],
}
