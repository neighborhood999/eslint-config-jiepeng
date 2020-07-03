module.exports = {
  plugins: ['import'],

  rules: {
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
        'newlines-between': 'always'
      }
    ]
  }
};
