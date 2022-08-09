/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#1f1f38',
        'bg-primary-variant': '#2c2c6c',
        primary: '#4db5ff',
        'primary-variant': 'rgba(77, 181, 255, 0.4)',
        'tx-secondary' : '#6b7280'
      }
    },
  },
  plugins: [],
}