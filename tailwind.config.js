/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        wilderness: {
          green: '#1A3C34',
          beige: '#F5F5F0',
          sand: '#C5A572',
          cream: '#FAF9F7',
          brown: '#2C1810',
        },
      },
    },
  },
  plugins: [],
};
