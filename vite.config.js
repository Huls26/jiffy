import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import eslintPlugin from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslintPlugin({
    // ESLint options
    cache: false,
    fix: true,
    // other options...
  })],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    // you might want to disable it, if you don't have tests that rely on CSS
    // since parsing CSS is slow
    css: true,
    coverage: {
      provider: 'v8',
      include: ['src/**/*.{js,ts,jsx,tsx}'],
      exclude: ['src/**/*.test.{js,ts,jsx,tsx}'],
      reporter: {
        v8: {
          text: ['lcov', 'text-summary'],
          html: 'lcov-report',
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
    },
  },
});
