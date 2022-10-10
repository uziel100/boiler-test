import { Grid } from '@mui/material'

const ContainerRight = ({ children }) => (
  <Grid
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
      // justifyContent:"center"
    }}
    item
    xs={12}
    sm={12}
    md={7}
  >
    {children}
  </Grid>
)
export default ContainerRight
