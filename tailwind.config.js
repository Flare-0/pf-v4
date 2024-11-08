/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white': '#ffffff',
        'black': '#000',
        'primary': '#5500FF',
        'secondary': '#AAFF00',
      },

      fontFamily: {
        'outfit': ['"Outfit"', 'serif'],
        'montserrat': ['"Montserrat"', 'sans-serif'],
        'space-mono': ['"Space Mono"', 'monospace'],
        'pixi': ['"spacepixi"', 'monospace'],
      },
    },
  },
  plugins: [],
}
