// eslint-disable-next-line no-undef
module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'plugin:vitest/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: 'tsconfig.vite.json',
  },
  plugins: [
    'react-refresh',
    'react',
    'vitest',
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
  ignorePatterns: ['test-utils.tsx'],
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
