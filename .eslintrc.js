module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  ignorePatterns: ["temp.js", "dist/*/**.js"],
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
  },
};
