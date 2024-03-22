/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    // you might want to disable it, if you don't have tests that rely on CSS
    // since parsing CSS is slow
    css: true,
  },
  resolve: {
    // update the src with new format fix the bug
    alias:
      [{
        find: '@',
        replacement: path.resolve(__dirname, './src/'),
      },
      ],
    // {
    //   '@App': path.resolve(__dirname, './src/App'),
    //   '@api': path.resolve(__dirname, './src/api'),
    //   '@assets': path.resolve(__dirname, './src/assets'),
    //   '@components': path.resolve(__dirname, './src/components'),
    //   '@context': path.resolve(__dirname, './src/context'),
    //   '@defaultSetting': path.resolve(__dirname, './src/defaultSetting'),
    //   '@features': path.resolve(__dirname, './src/features'),
    //   '@hooks': path.resolve(__dirname, './src/hooks'),
    //   '@layout': path.resolve(__dirname, './src/layout'),
    //   '@pages': path.resolve(__dirname, './src/pages'),
    //   '@router': path.resolve(__dirname, './src/router'),
    //   '@utils': path.resolve(__dirname, './src/utils'),
    // },
  },
});
