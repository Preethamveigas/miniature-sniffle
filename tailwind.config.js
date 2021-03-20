module.exports = {
  purge: ['./src/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    debugScreens: {
      position: ['bottom', 'left'],
    },
    fontFamily: {
      medium: 'sans-medium',
      regular: 'sans-regular',
      light: 'sans-light',
      demiBold: 'sans-bold',
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0052a1',
          light: '#3B82F6',
          dark: '#1E3A8A',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwindcss-debug-screens')],
};
