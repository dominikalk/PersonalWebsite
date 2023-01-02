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
    },
    extend: {
      colors: {
        // dark: "#2b1f31",
        dark: "#141414",
        // dark2: "#32253c",
        dark2: "#2b1f31",
        primary: "#b002ff",
        secondary: "#07ead9",
        tertiary: "#705e97",
        "mac-red": "#FF606C",
        "mac-yellow": "#FFBD44",
        "mac-green": "#00CA4E",
      },
    },
  },
  plugins: [],
};
