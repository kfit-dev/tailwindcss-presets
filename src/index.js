const theme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

module.exports = {
    theme: {
        extend: {
          fontFamily: {
              inter: ['Inter', ...theme.fontFamily.sans],
          },
          colors: {
            primary:'rgba(222, 32, 106, 1)',
            white:'#ffffff',
            slate:{
                100:'rgba(241, 245, 249, 1)',
                700:"rgba(51, 65, 85, 1)",
            },
            neutral:{
                100:"rgba(245, 245, 245, 1)",
                300:"rgba(212, 212, 212, 1)",
                400:"rgba(163, 163, 163, 1)",
                500:"rgba(115, 115, 115, 1)",
                700:"rgba(64, 64, 64, 1)",
            },
            yellow:{
                400:"rgba(251, 191, 36, 1)",
            },
            green:{
                500:"rgba(16, 185, 129, 1)"
            },
          },
          boxShadow:{
            'DEFAULT':'0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)',
            'md':'0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)',
            'lg':'0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)',
            'xl':' 0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)',
            '2xl':'0px 25px 50px -12px rgba(0, 0, 0, 0.25)',
            'inner':'inset 0px 2px 4px rgba(0, 0, 0, 0.06)',
          },
        }
      },
      plugins: [
          plugin(function ({addUtilities, theme }) {
              addUtilities({
                '.h1': {
                  fontSize: theme('fontSize.2xl'),
                  fontWeight:theme('fontWeight.bold')
                },
                '.h2': {
                  fontSize: theme('fontSize.base',),
                  fontWeight:theme('fontWeight.bold')
                },
                '.h3': {
                  fontSize: theme('fontSize.xs'),
                  fontWeight:theme('fontWeight.semibold')
                },
                '.body': {
                  fontSize: theme('fontSize.base'),
                  fontWeight:theme('fontWeight.normal')
                },
                '.caption': {
                  fontSize: theme('fontSize.sm'),
                  fontWeight:theme('fontWeight.normal')
                },
                '.title': {
                  fontSize: theme('fontSize.2xl'),
                  fontWeight:theme('fontWeight.bold')
                },
              })
            })
      ],
  }