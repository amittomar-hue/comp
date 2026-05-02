/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#003087',
          'blue-light': '#0050C8',
          'blue-dark': '#001a4d',
          red: '#E31837',
          'red-light': '#ff2244',
          gray: '#F5F5F5',
          'gray-dark': '#333333',
          'gray-mid': '#666666',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      container: {
        center: true,
        padding: { DEFAULT: '1rem', sm: '2rem', lg: '4rem', xl: '5rem' },
        screens: { xl: '1280px', '2xl': '1400px' },
      },
    },
  },
  plugins: [],
};
