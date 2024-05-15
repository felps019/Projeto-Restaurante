/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"], /* Qualquer arquivo na pasta raiz pode ter */
  theme: {
    fontFamily: {
      'sans': ['Poppins', 'sans-serif']
    },
    
    extend: {
      backgroundImage:{
        "home": "url('/assets/bg.png')"
      }
    },
  },
  plugins: [],
}

