/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      1: '#F8D6B3',
      'aqua-1': '#69D2E7',
      'aqua-2': '$DAF5F0',
      'dark-1': '#000103',
      'dark-2': '#26261f',
      'yellow-1': '#E3A018',
      'yellow-2': '#F4D738',
      'peach-1': '#FF6B6B',
      'peach-2': '#FF7A5C',
      blue: '#1fb6ff',
      purple: '#7e5bef',
      pink: '#ff49db',
      orange: '#ff7849',
      green: '#13ce66',
      yellow: '#ffc82c',
      'gray-dark': '#273444',
      gray: '#8492a6',
      'gray-light': '#d3dce6',
    },
    fontFamily: {
      A: ['Archivo', 'sans-serif'],
      LM: ['Lexend Mega', 'sans-serif'],
      PS: ['Public Sans', 'sans-serif'],
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {},
  },
  plugins: [],
};
