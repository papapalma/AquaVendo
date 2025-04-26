/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './index.html',
      './src/**/*.{vue,js,ts,jsx,tsx}', // Ensure all files are scanned for Tailwind classes
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  };