/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Yellow-LN': '#ffff24',
      },
      fontFamily: {
        primary: 'Suecaslab-Bold',
        secondary: 'Suecaslab-Medium',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      
      const newUtilities = {
        '.mainTitle': {
          fontFamily: 'Suecaslab-Bold',
          fontSize: '48px',
          color: '#F2F2F2',
          lineHeight: '56px',
          letterSpacing: '-0,4px'
        },

        '.marqueeLight': {
          fontSize: '14px',
          fontWeight: 'Bold',
          lineHeight: '16px',
          color: '#F2F2F2',
        },

        '.marqueeDark': {
          fontSize: '14px',
          fontWeight: 'Bold',
          lineHeight: '16px',
          color: '#272727',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}