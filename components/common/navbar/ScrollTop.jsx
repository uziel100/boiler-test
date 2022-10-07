import { Box, Fab, Fade, useScrollTrigger } from '@mui/material'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'

/**
 * Boton que aparece cuando se hace scroll y es mas alto
 * que el tamaño de pantalla para luego buscar un etiqueta html
 * con el ID #back-to-top-anchor y hacer el scroll
 * @returns JSX
 */
const ScrollTop = () => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100
  })

  const handleClick = event => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor')

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center'
      })
    }
  }

  return (
    <Fade in={trigger}>
      <Box onClick={handleClick} role="presentation" sx={{ position: 'fixed', bottom: 36, right: '9%', zIndex: 99 }}>
        <Fab
          sx={{
            bgcolor: 'grey.200'
          }}
          size="small"
          aria-label="scroll back to top"
        >
          <ArrowUpwardIcon color="primary" />
        </Fab>
      </Box>
    </Fade>
  )
}

export default ScrollTop
