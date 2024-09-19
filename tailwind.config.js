/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'flow-purple': '#8629FF',
        'flow-black': '#1D1D1B',
        'flow-gray': '#808080',
        'flow-deep-blue': '#004080',
        'flow-vibrant-green': '#00CC66',
        'flow-light-gray': '#F0F0F0',
      },
      fontFamily: {
        'pastrami': ['Pastrami', 'cursive'],
        'avenir': ['Avenir', 'sans-serif'],
      },
    },
  },
  plugins: [],
}