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
      width: {
        601: "37.5625rem",
        360: "22.5rem",
        382: "23.875rem",
        428: "26.75rem",
      },
      height: {
        704: "44rem",
        538: "33.625rem",
        414: "25.875rem",
        86: "5.375rem",
        658: "41.125rem",
      },
    },
  },
  plugins: [],
};
