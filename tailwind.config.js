module.exports = {
  content: ["./app/**/*.{html,ejs}"],
  theme: {
    container: {
      center: true,
      padding: "12px"
    },
    screens: {
      sm: '540px',
      md: '720px',
      lg: '960px',
      xl: '1140px',
      '2xl': '1320px'
    },
    fontSize: {
      sm: ['14px', '21px'],
      base: ['16px', '24px'],
      lg: ['18px', '27px'],
      xl: ['20px', '30px'],
      '2xl': ['24px', '36px'],
      '3xl': ['30px', '45px'],
      '4xl': ['36px', '54px'],
      '5xl': ['48px', '72px'],
      '6xl': ['60px', '90px'],
      '7xl': ['72px', '108px'],
      '8xl': ['96px', '144px'],
      '9xl': ['128px', '192px'],
    },
    extend: {
      colors: {
        'primary': {
          DEFAULT: '#E6553B'
        },
        'secondary': {
          DEFAULT: '#53C139'
        },
        'light': {
          DEFAULT: '#F0F0F0'
        },
        'dark': {
          DEFAULT: '#808080'
        }
      },
      fontSize: {
        '3xxl': ['32px', '48px'],
        '7xxl': ['80px', '120px']
      },
      lineHeight: {
        '4.5': '18px',
        '12': '48px'
      },
      borderWidth: {
        '10': '10px',
        '16': '16px',
        '24': '24px',
        '32': '32px'
      },
      spacing: {
        '13': '52px',
        '22': '88px',
      },
      opacity: {
        '65': '.65',
      },
      fontFamily: {
        'noto': ['Noto Sans TC', 'sans-serif']
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}