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
      typography(theme) {
        return {
          dark: {
            css: {
              color: theme("colors.gray.300"),
              '[class~="lead"]': { color: theme("colors.gray.400") },
              a: { color: theme("colors.gray.100") },
              strong: { color: theme("colors.gray.100") },
              "ul > li::before": { backgroundColor: theme("colors.gray.700") },
              hr: { borderColor: theme("colors.gray.800") },
              blockquote: {
                color: theme("colors.gray.100"),
                borderLeftColor: theme("colors.gray.800"),
              },
              h1: { color: theme("colors.gray.100") },
              h2: { color: theme("colors.gray.100") },
              h3: { color: theme("colors.gray.100") },
              h4: { color: theme("colors.gray.100") },
              code: { color: theme("colors.gray.100") },
              "a code": { color: theme("colors.gray.100") },
              pre: {
                color: theme("colors.gray.200"),
                backgroundColor: theme("colors.gray.800"),
              },
              thead: {
                color: theme("colors.gray.100"),
                borderBottomColor: theme("colors.gray.700"),
              },
              "tbody tr": { borderBottomColor: theme("colors.gray.800") },
            },
          },
        }
      },
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
      textColor: ['disabled'],
      typography: ["dark"]
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    // ...
  ],
}