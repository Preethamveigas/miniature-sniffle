module.exports = {
  purge: ['./src/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    debugScreens: {
      position: ['bottom', 'left'],
    },
    fontFamily: {
      sans: ["'Roboto'", 'ui-sans-serif', 'sans-serif', 'system-ui', '-apple-system'],
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
