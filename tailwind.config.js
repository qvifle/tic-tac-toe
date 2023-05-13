/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#191825',
        primary: '#C69870',
        darkprimary: '#af8764',
        accent: '#E384FF',
        accentLight: '#ADB795'
      },
      backgroundImage: {
        'main': "url('/bg.png')"
      },
      screens: {
        'iphone': '521px'
      }
    },
  },
  plugins: [],
}

