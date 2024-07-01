/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  purge: [
    "./src/**/*.{js,ts,jsx,tsx}",
    // "./node_modules/ant-design-vue/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or'media' or 'class'
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
