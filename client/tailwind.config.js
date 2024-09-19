/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "ui-sans-serif", "system-ui"],
        serif: ["Merriweather", "serif"],
        mono: ["Menlo", "monospace"],
        raleway: ["Raleway", "sans-serif"],
      },
      colors: {
        customBlue: "#0A2640",
        darkBlue: "#0A2640", // Add your custom color here
        lessBlue: "#0c4c3ad5", // Add your custom color here
      },
    },
  },
  plugins: [],
};
