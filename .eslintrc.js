module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb-typescript'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        'js': 'never',
        'jsx': 'never',
        'ts': 'never',
        'tsx': 'never'
      }
    ],
    'react/jsx-props-no-spreading': 0,
    'import/no-named-as-default': 0,
    'linebreak-style': 0,
    'no-plusplus': 0,
    'no-shadow': 0,
    'no-use-before-define': 0,
    'no-unused-vars': 0,
    'no-tabs': 0,
    'template-curly-spacing': 0,
    'no-empty': 0,
    'max-len': 0,
    'react/jsx-curly-spacing': 0,
    'import/no-cycle': 0,
    'consistent-return': 0,
    'implicit-arrow-linebreak': 0,
    'react/jsx-wrap-multilines': 0,
    'no-param-reassign': [2, { props: false }],
    'import/prefer-default-export': 'off',
    'react/function-component-definition': 0,
    'react/jsx-filename-extension': [2, { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] }],
    'jsx-a11y/label-has-associated-control': ['error', {
      required: {
        some: ['nesting', 'id'],
      },
    }],
    'jsx-a11y/label-has-for': ['error', {
      required: {
        some: ['nesting', 'id'],
      },
    }],
  },
};
