/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Special Elite", "sans-serif"],
      typewriter: ['"Special Elite"'],
      fasthand: ["Fasthand"],
    },
    extend: {
      colors: {
        dark: "#141414",
        primary: "#b002ff",
        secondary: "#07ead9",
        tertiary: "#705e97",
        "mac-red": "#FF606C",
        "mac-yellow": "#FFBD44",
        "mac-green": "#00CA4E",
      },
      screens: {
        xs: "481px",
      },
    },
  },
  plugins: [],
};
