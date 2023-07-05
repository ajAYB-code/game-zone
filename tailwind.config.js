/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          primary: '#fd1c1c',
          dark: '#241f1f',
      }
    },
  },
  plugins: [],
}

