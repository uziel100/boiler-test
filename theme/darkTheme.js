import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import BaseTheme from './baseTheme'

const Theme = createTheme({
  ...BaseTheme,
  palette: {
    ...BaseTheme.palette,
    mode: 'dark',
    primary: {
      main: '#334195',
      "100": "red"
    }
  },
  components: {
    ...BaseTheme.components
  }
})

const DarkTheme = responsiveFontSizes(Theme)

export default DarkTheme
