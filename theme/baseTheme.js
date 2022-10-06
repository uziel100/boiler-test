const BaseTheme = {
  typography: {
    fontFamily: ['Poppins', 'Nunito'].join(',')
  },
  palette: {},
  breakpoints:{
    keys: ["xs","sm","md","lg", "xl"],
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1300,
      xl: 1536,
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
          props: { variant: 'dashed' },
          style: {
            textTransform: 'none',
            border: `2px dashed blue`,
            // background: "red"
          },
        },
      ],
    },
  }
}

export default BaseTheme
