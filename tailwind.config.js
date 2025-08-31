/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './management.html',
    './strategy.html',
    './loot.html',
    './irl-loot.html'
  ],
  theme: {
    extend: {
      colors: {
        'wow-gold': '#FFB100',
        'wow-blue': '#0081FF',
        'wow-red': '#FF0000',
      },
      height: {
        '15': '3.75rem',
        '18': '4.5rem',
        '20': '5rem',
        '24': '6rem',
        '28': '7rem',
        '32': '8rem',
      },
    },
  },
  plugins: [],
}
