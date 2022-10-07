const BaseTheme = {
  palette: {},
  typography: {
    fontFamily: ['Poppins', 'Nunito'].join(','),
    h1: {
      fontSize: '2.5rem'
    },
    h2: {
      fontSize: '2rem'
    },
    h3: {
      fontSize: '1.5rem'
    },
    h4: {
      fontSize: '1.375rem'
    },
    h5: {
      fontSize: '1.25rem'
    },
    h6: {
      fontSize: '1.125rem'
    },
    button: {
      fontFamily: 'Poppins',
      textTransform: 'none'
    }
  },
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1300,
      xl: 1536
    }
  },
  zIndex: {
    drawer: 1000
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '*::-webkit-scrollbar': {
          width: '0.4em'
        },
        '*::-webkit-scrollbar-thumb': {
          borderRadius: '20px',
          backgroundColor: '#E0E0E0',
          opacity: 0.25
        }
      }
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*::-webkit-scrollbar': {
          width: '0.12em'
        },
        '*::-webkit-scrollbar-thumb': {
          borderRadius: '20px',
          backgroundColor: '#6c6c6c',
          opacity: 0.25
        }
      }
    },
    MuiButton: {
      variants: [
        {
          props: { variant: 'border' },
          style: {
            textTransform: 'none',
            border: `1px solid #BFBDBE`
            // background: "red"
          }
        }
      ]
    }
  }
}

export default BaseTheme
