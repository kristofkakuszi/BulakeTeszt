const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: [],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    plugin(function({addComponents}){
      const buttons = {
        '.btn-basic': {
          padding:'.0.625rem 1.25rem',
          borderRadius: '.25rem',
          fontWeight: '600',
          backgroundColor: '#FFC042',
          color: '#050505',
          float: right,
          '&:hover':{
            backgroundColor: '#2C5F1F',
            color: '#ffffff'
          }

        }
      }
      addComponents(buttons);
    })
  ],
}
