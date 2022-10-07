import { Box, Grid } from '@mui/material'
import { Circle01, Circle02, Circle03 } from '../style-component'

const ContainerLeft = ({ children, sx = {} }) => (
  <Grid item xs={0} sm={0} md={5}>
    <Box
      sx={{
        width: '344px',
        height: '100%',
        bgcolor: '#E7E2F0',
        overflow: 'hidden',
        position: 'relative',
        display: { xs: 'none', md: 'flex' },
        pt: '8rem',
        justifyContent: 'center',
        ...sx
      }}
    >
      {children}
      <Circle01 />
      <Circle02 />
      <Circle03 />
    </Box>
  </Grid>
)
export default ContainerLeft
