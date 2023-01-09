/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orangeWhite: "#DDCCAA",
      },
      backgroundImage: {
        interstellar: 'url("/image1.png")',
        tenenbaum: 'url("/image3.png")',
        rings: 'url("/image2.png")',
      },
    },
  },
  plugins: [],
};
