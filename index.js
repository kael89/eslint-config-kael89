module.exports = {
  extends: [
    'airbnb',
    'plugin:jest/recommended',
    'plugin:jest-formatting/recommended',
    'plugin:prettier/recommended',
    'prettier/react',
  ],
  plugins: ['simple-import-sort'],
  rules: {
    'class-methods-use-this': 'off',
    'import/order': 'warn',
    'import/prefer-default-export': 'off',
    'no-continue': 'off',
    'no-plusplus': 'off',
    'no-restricted-globals': 'off',
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message:
          'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'LabeledStatement',
        message:
          'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message:
          '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],
    'no-use-before-define': 'off',
    'prettier/prettier': [
      'error',
      { arrowParens: 'avoid', printWidth: 100, singleQuote: true, trailingComma: 'all' },
    ],
    radix: 'off',
    'react/forbid-prop-types': [
      'warn',
      { forbid: ['any'], checkContextTypes: true, checkChildContextTypes: true },
    ],
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx'] }],
    'react/jsx-props-no-spreading': 'off',
    'simple-import-sort/imports': 'warn',
  },
  settings: {
    jest: {
      version: '26',
    },
    react: {
      version: '16.2',
    },
  },
};
