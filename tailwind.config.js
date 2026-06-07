/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,js}",
    "./_layouts/**/*.{html,js}",
    "./_includes/**/*.{html,js}",
    "./_posts/**/*.{md,html}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
