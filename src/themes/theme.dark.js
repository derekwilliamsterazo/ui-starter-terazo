
import { createTheme } from '@mui/material/styles';

const brand = {

    yellow: '#FFCD00',
    red: '#FFCD00',
    black: '#2D2926',
    grey: '#53555A',   
    comp: {
       plum: '#C3B7BC',
       coolGray: '#C8C9C7',
       blueGray: '#8E9FBC',
       grey: '#53555A',
       blue:'#0D98FF',
       green:'#1FB855'
    }

}

// A custom theme for this app
const theme = createTheme({
  palette: {
    common: {
        black: '#101008'
    },
    brand: {
         yellow: brand.yellow,
         red: brand.red,
         black: brand.black,
         grey: brand.gray,
    },
    comp: {
        plum: brand.comp.plum,
        coolGray: brand.comp.coolGray,
        blueGray: brand.comp.blueGray,
        grey: brand.comp.grey,
   },
    primary: {
        main: brand.comp.blue,
    },
    secondary: {
        main: '#850DFF',
    },
    error: {
        main:brand.red,
    },
    warning: {
        main:brand.yellow,
    },
    info: {
        main:brand.comp.blue
    },
    success: {
        main:brand.comp.green
    },
    text:{
        primary: '#101008'
    }
  },
  typography: {
    fontSize:16,
    h1:{
        fontSize: '2.5em',
        lineHeight:1.25
    },
    h2:{
        fontSize: '2em',
        lineHeight:2.5,
        fontWeight: 600
    },
    h3:{
        fontSize: '1.5em',
        lineHeight:1.75,
        fontWeight: 600
    },
    h4:{
        fontSize: '1em',
        lineHeight:1.25,
        fontWeight: 600
    }
  }
});

export default theme;