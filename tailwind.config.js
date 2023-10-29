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
        'Blue-LN': '#0250C9'
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
        '.aligment':{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
         },

        '.mainTitle': {
          fontFamily: 'Suecaslab-Bold',
          fontSize: '3rem',
          color: '#F2F2F2',
          lineHeight: '3.5rem',
          letterSpacing: '-0.025rem'
        },

        '.secondaryTitle': {
          fontFamily: 'Suecaslab-Bold',
          fontSize: '2rem',
          color: '#272727',
          lineHeight: '2.5rem',
          letterSpacing: '-0.025rem'
        },

        '.tertiaryTitle': {
          fontFamily: 'Suecaslab-Medium',
          fontSize: '1.125rem',
          color: '#272727',
          lineHeight: '1.625rem',
          letterSpacing: '-0.0125rem'
        },

        '.cuaternaryTitle': {
          fontFamily: 'Suecaslab-Bold',
          fontSize: '1.25rem',
          lineHeight: '1.75rem',
          letterSpacing: '-0.0125rem'
        },

        '.subTitle,': {
          lineHeight: '2rem',
          letterSpacing: '-0.0125rem',
          color: '#333333',
        },

        '.marqueeLight': {
          fontSize: '0.875rem',
          fontWeight: 'Bold',
          lineHeight: '1rem',
          color: '#F2F2F2',
        },

        '.marqueeDark': {
          fontSize: '0.875rem',
          fontWeight: 'Bold',
          lineHeight: '1rem',
          color: '#272727',
        },

        '.chipSuscriptor': {
          borderRadius: '1rem',
          backgroundColor:'#F2F2F2',
          borderWidth:'0.0625rem',
          fontSize:'0.75rem',
          paddingLeft: '0.25rem',
          paddingRight: '0.5rem',
          paddingTop: '0.25rem',
          paddingBottom: '0.25rem',
          fontWeight: 'Bold',
          lineHeight: '1rem',
          gap:'0.25rem',
        },

        '.button': {
          height: '2.5rem',
          borderRadius: '0.25rem',
          paddingLeft: '1rem',
          paddingRight: '1rem',
          paddingTop: '0.75rem',
          paddingBottom: '0.75rem',
          fontSize: '0.75rem',
          fontWeight: 'Bold',
          textTransform: 'uppercase',
          lineHeight: '1rem',
        },

      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}