const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'jet': '#3B3941',
      'copper-red': '#D17A5D',
      'cultured': '#F5F6F4',
      'xanadu': '#7D8570',
      'cool-grey': '#8695BF'
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-mina)', ...fontFamily.sans]
      }
    },
  },
  plugins: [],
}
