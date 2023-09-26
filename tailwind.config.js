/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        colors: {
        'red': '#D0545E',
        'rose': '#F0C8CC',
        'pink': '#F2B6BB'
      },
    },
  },
  fontFamily: {
    sans: ['Helvetica Neue', 'sans-serif']
  },
  plugins: [],
}


