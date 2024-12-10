/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        'tgreen':'#49633C',
        'fbrown':'#D9D9D982',
        'fcardt':'#00000066',
      },
      backgroundImage:{
       'hero-pattern': "url('/assets/min1.png')",
      }
    },
  },
  plugins: [],
}

