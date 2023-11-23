/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],

  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  
  theme: {
    extend: {
      spacing: {
        '100': '400px', 
        '200': '500px', 
        '90': '370px', 
      },
    },
  },
  plugins: [require("daisyui")],
}

