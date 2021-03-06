module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'no-use-before-define': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'react/button-has-type': 'off',
    'arrow-body-style': 'off',
    'global-require': 'off',
    'no-restricted-syntax': 'off',
    'jsx-no-bind': 'off',
    'no-console': 'off',
    'react/prop-types': 'off',
  },
};
