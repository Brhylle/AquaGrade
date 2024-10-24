/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customDark: '#1F1D1D', // Comma added here
        scanColor: '#D9D9D9',
      },

      fontSize: {
        'xxs': '0.625rem',
      },
      borderRadius: {
        '4xl': '2rem',  // You can increase this value as needed
        '5xl': '3rem',
      },
    },
  },
  plugins: [],
};
