module.exports = {
  extends: [
    '@jiepeng/eslint-config-jiepeng-base',
    './rules/react',
    './rules/react-hooks',
    './rules/jsx-a11y'
  ].map(require.resolve),

  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },

  rules: {}
};
