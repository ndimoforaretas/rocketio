/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      screens: {
        widescreen: {
          raw: "(min-aspect-ratio: 3/2)",
        },
        tallscreen: {
          raw: "(min-aspect-ratio: 1/2)",
        },
      },
    },
  },
  plugins: [],
};
