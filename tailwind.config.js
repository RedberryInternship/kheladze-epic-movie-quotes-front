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
      padding: {
        7222: "4.5rem",
      },
      zIndex: {
        60: 60,
      },
      backgroundColor: {
        modalColor: "#222030",
      },
      width: {
        601: "37.5625rem",
        360: "22.5rem",
        382: "23.875rem",
        428: "26.75rem",
        1000: "62.5rem",
        1420: "88.75rem",
        778: "48.625rem",
        688: "43rem",
        961: "60.063rem",
        528: "33rem",
        809: "50.563rem",
      },
      height: {
        704: "44rem",
        538: "33.625rem",
        414: "25.875rem",
        400: "25rem",
        441: "27.563rem",
        471: "29.438rem",
        86: "5.375rem",
        658: "41.125rem",
        1000: "62.5rem",
        367: "22.938rem",
        812: "50.75rem",
        750: "46.875rem",
        562: "35.125rem",
      },
    },
  },
  plugins: [],
};
