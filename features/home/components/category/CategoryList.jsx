import { Grid } from '@mui/material'
import CardCategory from './CardCategory'

const CategoryList = ({ categories = [] }) => (
  <Grid container spacing={{ xs: 2, md: 4 }}>
    {categories.map(({ id, title, imgUrl }) => (
      <Grid key={id} item xs={6} sm={6} md={4}>
        <CardCategory title={title} imgUrl={imgUrl} />
      </Grid>
    ))}
  </Grid>
)
export default CategoryList
