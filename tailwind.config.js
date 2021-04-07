module.exports = {
  purge: ['./src/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    debugScreens: {
      position: ['top', 'left'],
    },
    fontFamily: {
      sans: [
        "'Roboto'",
        'ui-sans-serif',
        'sans-serif',
        'system-ui',
        '-apple-system',
      ],
      body: [
        "'Roboto'",
        'ui-sans-serif',
        'sans-serif',
        'system-ui',
        '-apple-system',
      ],
    },
    extend: {
      colors: {
        gray: {
          light: '#f3f3f3'
        },
        yellow: {
          DEFAULT: '#eb8c22',
          light: '#F59E0B',
          dark: '#D97706',
        },
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
