module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {



    backgroundPosition: {
      bottom: 'bottom',
      'bottom-4': 'center bottom 1rem',
      center: 'center',
      left: 'left 1rem',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
      'top-4': 'center top 1rem',
      'top-5': 'center left 29rem',
    },
    extend: {
      fontFamily:{
        Poppins :['Poppins', 'sans-serif',]
    },
    boxShadow: {
      'x': '0px 1px 10px rgba(0, 0, 0, 0.1)',
      'x1': '0px 1px 2px rgba(0, 0, 0, 0.1)',

      'shadowinner': 'inset 0px 1px 10px rgba(0, 0, 0, 0.1)',
    },
    colors :{
      'color1' :'#013B8D',
      'color2' :'#717171',
      'color3':'#E6EBFF',
      'color4':'rgba(1, 59, 141, 0.4)',
      'white' : '#FFFFFF',
    },

  },
  },
  plugins: [],
}
