module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#EB007D',
        primaryDark: '#BC0064',
        secundary: '#3F3D56',
        secundaryDark: '#2F2E41',
        light: '#F9FAFA',
        dark: '#111017',
      },
      margin: {
        '72': '20rem',
      },
      boxShadow: {
        primary: '0 3px 3px -1px rgba(157,157,154,.3);',
      },
      screens: {
        '2xl' : '1438px',
        '3xl' : '1680px',
      }
    }
  },
  variants: {},
  plugins: [
    function({ addUtilities }) {
      const transition = {
        '.transition': {
          transition: 'all ease .3s',
        },
      }
      
      addUtilities(transition)
    }
  ]
}
