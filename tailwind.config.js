module.exports = {
  purge: [],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
   darkMode: false, // or 'media' or 'class'
   theme: {
     borderRadius : {
      'large': '70px',
      'sm' : '0.125rem',
      'lg' : '0.5rem',
      'md' : '0.375rem',
      'xl' : '1rem',
      '2xl' :'2rem',
      '3xl':'3rem'
      

     },
     extend: {},
   },
   variants: {
    extend: {
      animation: ['motion-safe'],
    }
   },
   plugins: [
    require('tailwind-scrollbar-hide')
   ],
 }