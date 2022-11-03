/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns:{
        'board': 'repeat(80, minmax(0, 1fr))',
      },
      gridTemplateRows:{
        'board': 'repeat(40, minmax(0, 0.6rem))',
      },
      backgroundImage:{
        'board': 'url("/board.jpg")',
      }
      
    },
  },
  plugins: [],
};
