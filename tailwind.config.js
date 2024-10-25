/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  darkMode: "class", // or'media' or 'class'
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs300: "300px",
      sm500: "500px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1400px",
    },
    extend: {},
  },
  plugins: [],
};
