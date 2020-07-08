module.exports = {
  parser: 'babel-eslint',

  extends: [
    './rules/best-practices',
    './rules/errors',
    './rules/node',
    './rules/style',
    './rules/variables',
    './rules/es6',
    './rules/imports',
    './rules/strict',
    './rules/unicorn',
    './rules/sort-imports-es6',
    './rules/prettier'
  ].map(require.resolve),

  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },

  rules: {}
};
