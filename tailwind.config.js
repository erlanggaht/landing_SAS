/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode : "class",
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'card1': "url('./assets/newProd.jpg')",
        'card2': "url('./assets/servimg.webp')",
        'erlangga' : "url('./assets/erlangga.jpg')",
        'yusuf' : "url('./assets/yusuf.jpg')",
        'haszrul' : "url('./assets/haszrul.jpg')",
        'dede' : "url('./assets/dede.jpeg')",
        'rini' : "url('./assets/rini.jpeg')",
        'santi' : "url('./assets/santi.jpg')",
        'sinta' : "url('./assets/sinta.jpeg')",
        'dawok' : "url('./assets/dawok.jpeg')"




      },
      colors : {
        base : '#F1F1F1',
        dark : "#373737",
        yellowBase : "#068DA9",
        otherColor : '#146C94'
      }
    },
  },
  plugins: [],
}
