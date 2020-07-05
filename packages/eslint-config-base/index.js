module.exports = {
  parser: 'babel-eslint',

  extends: [
    './rules/best-practice',
    './rules/errors',
    './rules/es6',
    './rules/imports',
    './rules/node',
    './rules/prettier',
    './rules/sort-imports-es6',
    './rules/strict',
    './rules/styles',
    './rules/unicorn',
    './rules/variables'
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  rules: {}
};
