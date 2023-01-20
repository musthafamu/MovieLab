/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      'xs':'300px'
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
