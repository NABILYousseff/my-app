// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      scrollBehavior: ['responsive', 'smooth'],

      padding :{
        '500px': '500px',
      },
      colors: {
        accent: '#f39c12', // Example accent color
        light: '#f5f5f5',  // Light color for text
        dark: '#1c1c1c',   // Dark background color
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      
    },
  },
  plugins: [],
};
