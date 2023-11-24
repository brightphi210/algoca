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
        '200': '500px', 
        '220': '620px', 
        '250': '670px', 
      },
    },
  },
  plugins: [require("daisyui")],
}

