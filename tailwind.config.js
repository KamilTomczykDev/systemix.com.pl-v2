/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
// prettier-ignore
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        'main' : "1300px",
        'secondary' : "1000px"

      },
      boxShadow: {
        'medium' : '0 0 30px -15px rgba(0, 0, 0, 0.3)',
        'large' : '0 0 60px -15px rgba(0, 0, 0, 0.3)',
      },
      backgroundImage: {
        'new-arrivals' : "url('../src/assets/img/new-arrivals.jpg')",
        'we-take-care' : `url("/src/assets/img/we-take-care.jpg")`,
      },
      fontFamily: {
        'fugaz': 'Fugaz One, sans-serif',
      },
      gridTemplateRows: {
        'product': "40px 2fr 1fr",
      },
      colors: {
        "brand-green": "#044424",
        "brand-green-secondary": "#1a5438",
        "brand-red": "#c00d0e",
        "brand-red-secondary": "#ca2626",
        "grey-primary": "#f2f2f2",
        "grey-secondary": "#4b4b4b",
        'backdrop-color': 'rgba(255, 255, 255, 0.1)'
      },
      screens: {
        "4xl": "2000px",
        'xs': '400px',
      },
    },
  },
  plugins: [],
};
