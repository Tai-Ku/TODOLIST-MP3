/** @type {import('tailwindcss').Config} */
module.exports = {
  // xài tailwincss cho những cái đuôi ./src/**/*.{html,js} thì nó mới ăn được
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {},
  },
  plugins: [],
};
