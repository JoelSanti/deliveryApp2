const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
     '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
      abajo: '0px 5px 0px rgba(245, 158, 11, var(--tw-bg-opacity))',
      abajo2: '0px 1px 0px rgba(70, 64, 67, 0.43)',
      izquierdo: '1px 0px 0px rgba(70, 64, 67, 0.43)',
      
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': 'rgb(255, 131, 6)',
      'secondary': 'rgb(240, 240, 250)',
      'danger': 'rgb(255, 255, 255)',
      'caja': 'rgb(235, 235, 235)',
     }),
     colors: {
      'naranja': '#FF8306',
      'caja': 'rgb(235, 235, 235)',
      'indigo-dark': '#202e78',
      'facebook':'rgb(24, 119, 242)',
      'telegram':'rgb(47, 164, 222)',
      'twiter':'rgb(0, 138, 229)',
      'whatsapp':'rgb(60, 189, 80)',
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      green:colors.green,
    }
     
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
