/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
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
          white25: "#E6E6E6",
          white50: "#F6F6F6",
          white75: "#FBFBFB",
          white100: "#FFFFFF",
          gray25: "#C2C2C2",
          gray50: "#909090",
          gray75: "#2D2D2D",
          gray80: "#4B4B4B",
          gray100: "#1E1E1E",
        },
      },
    },
  },
  plugins: [],
};
