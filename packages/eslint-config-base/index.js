module.exports = {
  parser: 'babel-eslint',

  extends: [
    './rules/best-practice',
    './rules/errors',
    './rules/es6',
    './rules/imports',
    './rules/node',
    './rules/sort-imports-es6',
    './rules/strict',
    './rules/styles',
    './rules/variables',
    './rules/prettier',
    './rules/unicorn'
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  rules: {}
};
