import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import BaseTheme from './baseTheme'

const Theme = createTheme({
  ...BaseTheme,
  palette: {
    ...BaseTheme.palette,
    mode: 'light',
    primary: {
      main: '#DD4786',
      contrastText: "#fff",
      "50": "#FFF9FD",
      "100": "#FCEDF3",
      "200": "#F8DAE7",
      "300": "#F5C8DB",
      "400": "#EDA2C2",
      "500": "#E675A4",
    },
    secondary:{
      main: '#7D66AD',
      contrastText: "#fff",
      "100": "#F2F0F7",
      "200": "#E5E0EF",
      "300": "#D8D2E7",
      "400": "#BDB2D5",
      "500": "#9E8CC2",
    },
    success:{
      main: "#43C568",
    },
    error:{
      main: "#F44336",
    },
    info:{
      main: "#6277F2",
    },
    warning:{
      main: "#FBEB45",
    },
    background:{
      default: "#FFFFF", // background body
      paper: "#FFFFFF"
    },
    grey:{
      "100": "#FFFFFF",
      "200": "#F4F4F4",
      "300": "#EAE9EA",
      "400": "#D4D3D4",
      "500": "#BFBDBE",
      "600": "#939092",
      "700": "#5F5A5C",
      "800": "#292326"
    }
  },
  typography:{
    h1:{
      fontSize: "2.5rem"
    },
    h2:{
      fontSize: "2rem"
    },
    h3:{
      fontSize: "1.5rem"
    },
    h4:{
      fontSize: "1.375rem"
    },
    h5:{
      fontSize: "1.25rem"
    },
    h6:{
      fontSize: "1.125rem"
    },
    button:{
      fontFamily: "Poppins",
      textTransform: "none"
    }
  },
  components: {
    ...BaseTheme.components,
  },
  
})

const LightTheme = responsiveFontSizes(Theme)

export default LightTheme
