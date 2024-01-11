module.exports = {
  env: {
    node: true,
    es6: true,
    'react-native/react-native': true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'react-native'],
  rules: {
    // Your custom rules go here
    'no-console': 'off',
    'no-restricted-syntax': [
      'error',
      {
        selector:
          "CallExpression[callee.object.name='console'][callee.property.name!=/^(error|warn|info)$/]",
        message:
          'You can only call the error(), warn(), and info() methods from the console object',
      },
    ],
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false,
        varsIgnorePattern: 'upload',
        argsIgnorePattern: 'result',
      },
    ],
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect the react version
    },
  },
};
