module.exports = {
  extends: ['prettier/react'],

  env: {
    browser: true
  },

  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },

  plugins: ['react', 'react-hooks'],

  rules: {
    'react/react-in-jsx-scope': 'error',
    'react/jsx-uses-vars': 'error',
    'react/jsx-uses-react': 'error',
    'react/sort-prop-types': [
      'error',
      {
        callbacksLast: true,
        ignoreCase: false,
        requiredFirst: false
      }
    ],
    'react/jsx-filename-extension': [
      'error',
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] }
    ],

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
  },

  settings: {
    react: {
      pragma: 'React',
      version: 'detect'
    }
  }
};
