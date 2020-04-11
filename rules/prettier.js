module.exports = {
  extends: ['eslint-config-prettier'].map(require.resolve),

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
