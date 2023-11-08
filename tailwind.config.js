/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    letterSpacing: {
      tightest: '-.18px',
      tighter: '-.15px',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.1em',
      widest: '.25em',
    },

    extend: {
      colors: {
        'titel': '#002147',
        'primary': '#004fe1',
        'secondary': '#f5b016',
      },
      
    },
  },
  plugins: [require("daisyui")],
}


