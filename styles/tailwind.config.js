const autoprefixer = require('autoprefixer');
const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  important: true,
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    enabled: true,
    content: ["_site/**/*.html"],
    options: {
      safelist: [],
    },
  },
  darkMode: 'class',
  theme: {
    colors: {
      primary: '#D46A49',
      secondary: '#A2B9B6',
      altblack: '#001F29',
      gray: colors.gray,
      yellow: colors.yellow,
      blue: colors.blue,
      pink: colors.pink,
      green: colors.green,
      red: colors.red,
      white: colors.white,

    },
    fontFamily: {
      'sans': ['Work Sans', 'sans-serif'],
      'serif': ['Bitter', 'serif'],
      'mono': ['IBM Plex Mono', 'monospace']
    },
    container: {
      center: true,
    },
    boxShadow: {
      brand: 'inset 0 -0.2em 0 0 #fff, inset 0 -0.6em 0 0 rgb(212 106 73 / 60%)'
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100%',
            a: {
              color: '#D46A49',
              'text-decoration': 'none',
              '&:hover': {
              color: 'C43D13',
              'text-decoration': 'none',
              },
            },
            h1: {
              'font-family': 'Bitter',
            },

            h2: {
              'font-family': 'Bitter',
            },
            h3: {
              'font-family': 'Bitter',
            },
            h4: {
              'font-family': 'Bitter',
            },
            h5: {
              'font-family': 'Bitter',
            },
            h6: {
              'font-family': 'Bitter',
            },

            'ul.footer-nav': {
              '::before': {
                display: 'none',
                'text-decoration': 'none',
              }
            },
            'ul.contains-task-list': {
              '::before': {
                display: 'none',
              }
            },
            'ul.spacelog': {
              '::before': {
                display: 'none',
              }
            },
          },
        },
      },
      backgroundImage: theme => ({
        'logo': "url('/_includes/assets/images/logo.svg')",
        })
    },
  }, 
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}