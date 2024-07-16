module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 2020,
    'sourceType': 'module'
  },
  plugins: ['@typescript-eslint', 'react-hooks', 'react-refresh'],
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': ['error', {
      'allowTypedFunctionExpressions': true,
      'allowHigherOrderFunctions': true,
      'allowDirectConstAssertionInArrowFunctions': true
    }],
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
      },
    ],
    '@typescript-eslint/no-explicit-any': 'error',
    // 'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'indent': ['error', 2],
    'semi': ['error', 'always'],
    'no-unused-vars': ['warn'],
    'quotes': ['error', 'single'],
    'no-console': 'warn',
    'eqeqeq': ['error', 'always'],
    'no-multi-spaces': 'error',
  },
};
