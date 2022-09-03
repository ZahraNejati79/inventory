/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Vazirmatn"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
