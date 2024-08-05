import path from "node:path";
import react from "@vitejs/plugin-react";

import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";
import { defineConfig } from "vite";

// Vite Configuration
export default defineConfig({
  // Plugins to enhance the development experience
  plugins: [
    // React plugin for integrating React with Vite
    react(),
  ],

  // Configuration for running tests
  test: {
    globals: true, // Allows the use of global test functions like `describe` and `it`
    environment: "jsdom", // Sets the testing environment to jsdom, which simulates a browser environment
    setupFiles: "./vitest.setup.js", // Specifies the file to be executed before each test file
  },

  // CSS-related configuration
  css: {
    postcss: {
      // PostCSS plugins to process CSS
      plugins: [
        tailwindcss(), // Adds Tailwind CSS processing
        autoprefixer, // Adds vendor prefixes to CSS rules for better browser compatibility
      ],
    },
  },

  // Resolve configuration for module paths
  resolve: {
    alias: [
      {
        find: "@", // Defines a custom alias for module imports
        replacement: path.resolve(__dirname, "./src/"), // Maps "@" to the src directory
      },
    ],
  },
});
