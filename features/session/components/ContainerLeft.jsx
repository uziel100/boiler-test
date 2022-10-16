import { Box, Grid } from '@mui/material'
import { Circle01, Circle02, Circle03 } from '../style-component'

const ContainerLeft = ({ children, sx = {} }) => (
  <Grid item xs={0} sm={0} md={5}>
    <Box
      sx={{
        width: '344px',
        height: '100%',
        bgcolor: '#FBFAFC',
        overflow: 'hidden',
        position: 'relative',
        display: { xs: 'none', md: 'flex' },
        pt: '8rem',
        zIndex: 2,
        justifyContent: 'center',
        ':after': {
          content: '""',
          position: 'absolute',
          width: '100%',
          height: '470px',
          top: '-41px',
          zIndex: 1,
          backgroundImage: 'url(/images/login/login-abstract01.svg)',
          backgroundRepeat: 'no-repeat'
        },
        ':before': {
          content: '""',
          position: 'absolute',
          width: '100%',
          height: '500px',
          top: '-42px',
          zIndex: 1,
          backgroundImage: 'url(/images/login/login-abstract02.svg)',
          backgroundRepeat: 'no-repeat'
        },
        ...sx
      }}
    >
      {children}
      {/* <Box sx={{ position: 'absolute', width: '10rem', height: '10px', background: '#D3CBFF' }} /> */}
      <Circle01 />
      <Circle02 />
      <Circle03 />
    </Box>
  </Grid>
)
export default ContainerLeft
