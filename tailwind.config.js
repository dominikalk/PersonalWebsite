/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#000000",
        primary: "#FB2576",
        secondary: "#3F0071",
        tertiary: "#150050",
      },
    },
  },
  plugins: [],
};
