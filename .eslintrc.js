module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['react', 'jsx-a11y', '@typescript-eslint', 'import'],
  rules: {
    'react/prop-types': 'off',
    'max-len': ['warn', { code: 120 }],
    'no-console': 'warn',
    quotes: ['error', 'single'],
    'no-duplicate-imports': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-extraneous-dependencies': 'error',
    'import/no-namespace': 'error',
    'sort-imports': [
      'error',
      { ignoreCase: true, ignoreDeclarationSort: true },
    ],
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        groups: [
          ['builtin', 'external'],
          'internal',
          ['parent', 'sibling', 'index'],
          'object',
        ],
        'newlines-between': 'always',
      },
    ],
  },
  overrides: [
    {
      files: ['*.js'],
      env: { commonjs: true },
    },
    {
      files: ['*.test.ts', '*.test.tsx'],
      plugins: ['jest', 'testing-library', 'jest-dom'],
      extends: [
        'plugin:jest/recommended',
        'plugin:jest/style',
        'plugin:testing-library/recommended',
        'plugin:jest-dom/recommended',
      ],
    },
  ],
};
