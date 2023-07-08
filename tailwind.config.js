/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          primary: '#fd1c1c',
          secondary: '#ffe602',
          dark: '#241f1f',
      }
    },
  },
  variants: {
    extend: {
      scale: ['group-hover'],
    }
  },
  plugins: [],
}

