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
          blue: "#3B82F4"
        },
        secondary: {
          gray: "#2D2D2D",
        },
        palette: {
          white25: "#E8E8E8",
          white50: "#F1F1F1",
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
