const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.{ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito Sans', ...defaultTheme.fontFamily.sans],
      },
      animation: {
        'spin-demo': 'spin 20s linear infinite',
      },
      colors: {
        'dark-hover': '#3E505F',
        'common-blue': 'hsl(209, 23%, 22%)',
        'dark-blue': 'hsl(207, 26%, 17%)',
        'very-dark-blue': 'hsl(200, 15%, 8%)',
        'dark-gray': 'hsl(0, 0%, 52%)',
        'light-gray': 'hsl(0, 0%, 98%)',
        white: 'hsl(0, 0%, 100%)',
        ...defaultTheme.colors,
      },
    },
  },
  variants: {
    extend: {
      animation: ['focus'],
    },
  },
  plugins: [require('tailwindcss-debug-screens')],
};
