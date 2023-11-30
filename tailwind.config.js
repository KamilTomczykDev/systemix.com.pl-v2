/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-green": "#044424",
        "brand-green-secondary": "#1a5438",
        "brand-red": "#c00d0e",
        "brand-red-secondary": "#ca2626",
        "grey-primary": "#f2f2f2",
        "grey-secondary": "#4b4b4b",
      },
    },
  },
  plugins: [],
};
