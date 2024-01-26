/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#040C2C',
        'secondary': '#2F2A50'
      },
      spacing: {
        'w2xl' : '80%', 
        'wxl' : '90%',
        'wlg' : '91%', 
        'wmd' : '92%', 
        'wsm' : '94%'
      }, 
      maxWidth: {
        'wall' : '95%'
      }
    },
  },
  plugins: [],
}