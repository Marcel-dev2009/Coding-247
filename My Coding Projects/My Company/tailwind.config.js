/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
    fontFamily:{
      body: ['Raleway']
    },
    colors:{
      primary:'#ff6363',
      secondary: {
        100: '#e2e2d5',
        200: '#888883',
      }
    }
  },
  variants: {},
  plugins: [],
}
}