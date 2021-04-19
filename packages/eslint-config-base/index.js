module.exports = {
  parser: '@babel/eslint-parser',

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

  // https://github.com/babel/babel/tree/master/eslint/babel-eslint-parser
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    requireConfigFile: false
  },

  rules: {}
};
