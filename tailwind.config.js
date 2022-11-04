/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns:{
        '40': 'repeat(40, minmax(0, 1fr))',
      },
      gridTemplateRows:{
        '20': 'repeat(20, minmax(0, 0.6rem))',
      },
      backgroundImage:{
        'board': 'url("/board.jpg")',
      }
      
    },
  },
  plugins: [],
};
