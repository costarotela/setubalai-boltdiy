const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: '#3498db',
        secondary: '#455a64',
        accent: '#8bc34a',
        background: '#f7f7f7'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
