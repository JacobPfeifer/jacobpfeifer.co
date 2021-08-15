const autoprefixer = require('autoprefixer');
const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  important: true,
  mode: 'jit',
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    enabled: true,
    content: [
      "_site/**/*.html",
      "./_includes/components/**/*.njk",
      "./_includes/layouts/**/*.njk",
      "./content/pages/**/*.md",
      "./content/posts/**/*.njk",
    ],
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
      black: colors.black,

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
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
      brand: 'inset 0 -0.4em 0 0 #fff, inset 0 -0.8em 0 0 rgb(212 106 73 / 60%)',
      encompass: 'inset 0 0 0 0 #fff, inset 0 -2em 0 0 rgb(212 106 73 / 60%)',
      card: '6px 6px 0 0 rgb(212 106 73 / 60%)',
      cardHover: '8px 8px 2px 0 rgb(212 106 73 / 60%)'
    },
    extend: {
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          "100%": { transform: 'rotate(90deg)' }
        }
      },
      animation: {
        'spin-once': 'spin .2s ease-in-out 1'
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100%',
            img: {
              margin: '0',
              padding: '0'
            },
            a: {
              color: '#D46A49',
              'text-decoration': 'none',
              '&:hover': {
              color: 'C43D13',
              'text-decoration': 'none',
              },
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
  variants: {
  },
  plugins: [
    require('@tailwindcss/typography')({
      modifiers: [],
    }),
    require('@tailwindcss/forms'),
  ],
}