/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      brownReg: ["LLBrown400", "sans-serif"],
      brownLight: ["LLBrown300", "sans-serif"],
      brownRegItalic: ["LLBrownItalic400", "sans-serif"],
      brownLightItalic: ["LLBrownItalic300", "sans-serif"],
      shipporiReg: ["Shippori Mincho", "serif"],
      thin: ["LLBrown100", "sans-serif"]
    },
    extend: {
      colors: {
        white: '#fff',
        grey: '#5b5753',
        beige: '#ede8e3',
        brown: '#482827'
      }
    },
  },
  plugins: [],
}

