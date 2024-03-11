/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  
  theme: {
    extend: {
      colors: {
        'primaria': '#89C4D4',
        'fundo': '#FCF9C2',
        'secundaria': '#4A5042',
        'terciaria': '#9D6AA1',
        },
    },
  },
  plugins: [],
}

