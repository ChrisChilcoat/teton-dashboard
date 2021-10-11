const colors = require('tailwindcss/colors')
const { textColor } = require('tailwindcss/defaultTheme')

module.exports = {
  experimental: {
    applyComplexClasses: true,
  },
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class' or 'false'
  theme: {
    extend: {
      colors: {
        gray: colors.coolGray,
        blue: colors.sky,
        red: colors.rose,
        pink: colors.fuchsia,
      },
      fontFamily: {
        varela: "'Varela Round', sans-serif"
      },
      scale: {
        '98': '.98',
        '102': '1.02',
      },
      minWidth: {
        '2/5': '40%'
      },
      minHeight: {
        '0': '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
      },
    },
  },
  variants: {
    extend: {
      scale: ['active', 'group-hover', 'focus', 'group-focus'],
      opacity: ['active', 'group-hover', 'focus', 'group-focus', 'disabled'],
      borderColor: ['active', 'group-hover', 'focus', 'group-focus', 'disabled'],  
      backgroundColor: ['active', 'group-hover', 'focus', 'group-focus', 'disabled'],
      textColor: ['disabled']
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    // ...
  ],
}