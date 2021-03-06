module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'pp': {'min': '350px', 'max': '735px'},
      
    },
    extend: {
      backgroundImage: {
        'fundo-top':"url('/bg-top.png')",
        'ruim':"url('/ruim.png')",
        'fundo-bottom': "url('/bg-bottom.png')",
        // 'fundo-pesquisa': "url('/bg-pesquisa.png')"
      },
      backgroundSize:{
        '1-2':'50%',
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
