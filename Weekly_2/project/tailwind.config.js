/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        color1: "#48c3d6",
        color2: "#283754",
      },
    },
  },
  daisyui: {
    themes: ["cupcake"],
  },
  plugins: [require("daisyui")],
};
