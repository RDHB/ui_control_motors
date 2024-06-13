/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        xxl: '1800px',
      },
      colors: {
        "t-first": "#fffff5db",
        "t-second": "#ebebf599",
        "t-third": "#ebebf561",
        //palette color for graph
        "salmon": "#e27c7c",
        "black": "#333333", 
        "aqua3": "#3c4e4b", 
        "aqua2": "#189AB4", 
        "aqua1": "#05445E", 
        "aqua": "#6cd4c5",

        "b-first": "#1b1b1f",
        "b-second": "#222222",
        "b-third": "#282828",

      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
      },
      backgroundImage: {
        'wave-lines': "url('./src/assets/wavy-lines.svg')",
        'motor': "url('./src/assets/motor.svg')",
      },
      width:{
        '76': '19rem',
        '78': '19.5rem',
      }
    },
  },
  plugins: [],
}

