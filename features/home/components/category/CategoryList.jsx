import { Grid } from '@mui/material'
import { CardCategory } from '.'

const categories = [
  {
    id: '12',
    title: 'Bebidas',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollici tudin lorem facilisi',
    link: '/'
  },
  {
    id: '122',
    title: 'Comidas',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollici tudin lorem facilisi',
    link: '/'
  },
  {
    id: '1222',
    title: 'Mobiliario',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollici tudin lorem facilisi',
    link: '/'
  },
  {
    id: '122kk2',
    title: 'Personal de servicio',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollici tudin lorem facilisi',
    link: '/'
  },
  {
    id: '12222',
    title: 'Música y tecnología',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollici tudin lorem facilisi',
    link: '/'
  },
  {
    id: '122222',
    title: 'Espacios',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollici tudin lorem facilisi',
    link: '/'
  }
]

const CategoryList = () => {
  return (
    <Grid container spacing={4} mt="2.5rem">
      {categories.map(({id, title, description}) => (
        <Grid key={id} item xs={12} sm={6} md={4}>
          <CardCategory title={title} description={description} />
        </Grid>
      ))}
    </Grid>
  )
}
export default CategoryList
