module.exports = {
  parser: 'babel-eslint',

  extends: [
    './rules/base',
    './rules/import-order',
    './rules/prettier',
    './rules/sort-imports-es6'
  ].map(require.resolve)
};
