module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:perfectionist/recommended-natural',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'perfectionist/sort-interfaces': [
      'error',
      {
        order: 'asc',
        type: 'alphabetical',
        'ignore-case': true,
      },
    ],
    'perfectionist/sort-jsx-props': [
      'error',
      {
        order: 'asc',
        type: 'alphabetical',
        'ignore-case': true,
      },
    ],
    'perfectionist/sort-imports': [
      'error',
      {
        type: 'alphabetical',
        order: 'asc',
        'ignore-case': true,
        groups: [
          'type',
          ['builtin', 'external'],
          'internal-type',
          'internal',
          ['parent-type', 'sibling-type', 'index-type'],
          ['parent', 'sibling', 'index'],
          'side-effect',
          'style',
          'object',
          'unknown',
        ],
        'newlines-between': 'always',
      },
    ],
    'perfectionist/sort-named-imports': [
      'error',
      {
        order: 'asc',
        type: 'alphabetical',
        'ignore-case': true,
      },
    ],

    'perfectionist/sort-object-types': [
      'error',
      {
        order: 'asc',
        type: 'alphabetical',
        'ignore-case': true,
      },
    ],
    'perfectionist/sort-named-exports': [
      'error',
      {
        type: 'alphabetical',
        order: 'asc',
        'ignore-case': true,
      },
    ],
    'perfectionist/sort-objects': [
      'error',
      {
        type: 'alphabetical',
        order: 'asc',
        'ignore-case': true,
      },
    ],
  },
};
