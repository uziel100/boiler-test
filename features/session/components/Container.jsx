import { Container as ContainerMui, Grid, Paper } from '@mui/material'

const Container = ({ children }) => (
  <ContainerMui maxWidth="md" sx={{ mt: 2 }}>
    <Paper
      sx={{
        boxShadow: {
          xs: 'none',
          md: '0px 1px 20px rgba(0, 0, 0, 0.07)'
        }
      }}
      elevation={0}
    >
      <Grid container spacing={0}>
        {children}
      </Grid>
    </Paper>
  </ContainerMui>
)
export default Container
