/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        xano: ['Xano Mincho', 'sans-serif'],
        bpt: ['Bptypewrite', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
