import { Grid } from '@mui/material'
import CardAbout from './CardAbout'

const CardAboutList = () => (
  <Grid container spacing={3}>
    <Grid item xs={6} sm={12} md={6}>
      <CardAbout />
    </Grid>
    <Grid item xs={6} sm={12} md={6}>
      <CardAbout />
    </Grid>
    <Grid item xs={6} sm={12} md={6}>
      <CardAbout />
    </Grid>
    <Grid item xs={6} sm={12} md={6}>
      <CardAbout />
    </Grid>
  </Grid>
)
export default CardAboutList
