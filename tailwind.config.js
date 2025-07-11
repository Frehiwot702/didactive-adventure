/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    		"./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'jetbrains': ["JetBrains Mono", "monospace"],
        'righteous': ["Righteous", "sans-serif"],
        'fira' : ["Fira Code", "monospace"],
        'sc': ["Source Code Pro", "monospace"],
        'dancing': [ "Dancing Script", 'cursive'],
        'monto': ["Montserrat", "sans-serif"],
        'banery': ['Banery', 'sans-serif']

      },
      colors: {
        lightGray: "#E8E8E8",
        darkGray: "#BFBFBF",
        mediumGray: '#4D4D4D',
        darkRed: "#8C1C13",
        lightRed: '#FF0000',
        blue: "#0A122A",
        yellow: "#FFE600",
        green: '#6F7B57',
        gray: '#F2F0E4'
      },
    },
  },
  plugins: [

  ],
}

