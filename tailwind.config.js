/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        
        'custom-bg3': "url('/src/Component/Home/c5.webp')",
        'custom-bg2': "url('/src/Component/Home/unnamed.jpg')",
        'custom-bg1': "url('/src/Component/Home/career-events-programmes-career-services.jpg')",
      },
      colors: {
        primary: '#091E3E',   
        secondary: '#F1C40F', 
        customGray: '#B0B0B0', 
        customRed: '#E74C3C',  
        
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}