module.exports = {
  extends: [
    '@jiepeng/eslint-config-jiepeng-base',
    './rules/react',
    './rules/react-hooks',
    './rules/jsx-a11y'
  ].map(require.resolve),

  plugins: ['@babel'],

  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    requireConfigFile: false,
    babelOptions: {
      parserOpts: {
        plugins: ['jsx']
      }
    }
  },

  rules: {}
};
