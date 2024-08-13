/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  
  theme: {
    extend: {
      colors: {
        'Yellow': "#FCF9C2",
        'Blue': "#89C4D4",
        'Green': "#4A5042",
        'Purple': "#9D6AA1",
        'Orange': "#FE9A22",
        },
    },
  },
  plugins: [],
}

