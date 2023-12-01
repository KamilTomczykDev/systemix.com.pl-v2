/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
// prettier-ignore
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'fugaz': 'Fugaz One, sans-serif',
      },
      gridTemplateRows: {
        'product': "25px 2fr 1fr",
      },
      colors: {
        "brand-green": "#044424",
        "brand-green-secondary": "#1a5438",
        "brand-red": "#c00d0e",
        "brand-red-secondary": "#ca2626",
        "grey-primary": "#f2f2f2",
        "grey-secondary": "#4b4b4b",
      },
      screens: {
        "4xl": "2000px",
      },
    },
  },
  plugins: [],
};
