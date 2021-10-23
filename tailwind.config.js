module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'pp': {'min': '350px', 'max': '639px'},
      
    },
    extend: {
      backgroundImage: {
        'ruim':"url('/ruim.png')"
      },
      backgroundSize:{
        '1-4': '25%',
        '1-10': '10%'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
