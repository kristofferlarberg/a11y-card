const {
  fontFamily,
} = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "var(--font-inter)",
          ...fontFamily.sans,
        ],
      },
    },
  },
  plugins: [],
};
