/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],

  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  
  theme: {
    extend: {
      spacing: {
        '90': '370px', 
        '100': '400px', 
        '200': '580px', 
        '220': '650px', 
        '250': '670px', 
        '270': '700px', 
      },
    },
  },
  plugins: [require("daisyui")],
}

