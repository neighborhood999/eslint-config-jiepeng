module.exports = {
  env: {
    es6: true
  },

  parserOptions: {
    ecmaVersion: 6
  },

  extends: ['prettier'],

  plugins: ['prettier'],

  rules: {
    'prettier/prettier': [
      'error',
      {
        bracketSpacing: true,
        singleQuote: true,
        arrowParens: 'avoid',
        trailingComma: 'none'
      }
    ]
  }
};
