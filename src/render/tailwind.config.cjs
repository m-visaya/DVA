/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        'roboto':'Roboto'
      },
      colors: {
        primary: {
          gray: "#5A5A5A",
        },
        secondary: {
          gray: "#2D2D2D",
        },
        palette: {
          gray25: "#C2C2C2",
          gray50: "#909090",
          gray75: "#2D2D2D",
          gray100: "#1E1E1E",
        },
      },
    },
  },
  plugins: [],
};
