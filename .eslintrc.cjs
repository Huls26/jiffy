module.exports = {
  root: true,
  env: { node: true, browser: true, es2021: true },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  // parserOptions: {
  //   ecmaFeatures: {
  //     jsx: true,
  //   },
  //   ecmaVersion: 'latest',
  //   sourceType: 'module',
  //   project: './tsconfig.eslint.json',
  // },
  overrides: [
    {
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      parserOptions: {
        project: './tsconfig.eslint.json',
        createDefaultProgram: true,
      },
    },
  ],
  plugins: [
    '@typescript-eslint',
    'react-refresh',
    'react',
  ],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'import/no-unresolved': 0,
    'linebreak-style': 0,
    'import/extensions': 0,
    'import/no-extraneous-dependencies': 0,
    'max-len': ['error', { ignoreUrls: true }, { ignoreStrings: true }],
    'jsx-a11y/label-has-associated-control': ['error', {
      required: {
        some: ['nesting', 'id'],
      },
    }],
  },
  ignorePatterns: ['test-utils.tsx', 'vite.config.js', 'vitest.d.ts'],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
