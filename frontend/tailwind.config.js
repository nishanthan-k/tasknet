/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        mobile: '640px',
        tablet: '768px',
        desktop: '1024px',
        largeDesktop: '1440px',
      },
      colors: {
        'bgDark': '#121212',
        'slateDark': '#020617',
        'bgLight': '#FFFFFF',
        'textDark': '#000000',
        'textLight': '#ffffff'
      },
      fontFamily: {
        title: ['Montserrat', 'sans-serif'],
        primary: ['Montserrat', 'sans-serif'],
        secondary: ['Lato', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
        form: ['Roboto', 'sans-serif'],
        button: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};

export default config;
