/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage:{
       'hero-pattern': "url('/assets/min1.png')",
      }
    },
  },
  plugins: [],
}

