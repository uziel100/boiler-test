import { Box } from '@mui/material'
import { ContainerApp } from 'components/common'
import CategoryList from './CategoryList'
import TitleSection from '../TitleSection'

const categories = [
  {
    id: '12',
    title: 'Bebidas',
    imgUrl: '/images/category/category-bebidas.svg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollici tudin lorem facilisi',
    link: '/'
  },
  {
    id: '122',
    title: 'Comidas',
    imgUrl: '/images/category/category-comida.svg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollici tudin lorem facilisi',
    link: '/'
  },
  {
    id: '1222',
    title: 'Mobiliario',
    imgUrl: '/images/category/category-mobiliario.svg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollici tudin lorem facilisi',
    link: '/'
  },
  {
    id: '122kk2',
    title: 'Personal de servicio',
    imgUrl: '/images/category/category-personal-servicio.svg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollici tudin lorem facilisi',
    link: '/'
  },
  {
    id: '12222',
    title: 'Música y tecnología',
    imgUrl: '/images/category/category-musica-tech.svg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollici tudin lorem facilisi',
    link: '/'
  },
  {
    id: '122222',
    title: 'Espacios',
    imgUrl: '/images/category/category-espacios.svg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollici tudin lorem facilisi',
    link: '/'
  }
]

const CategorySection = () => (
  <ContainerApp>
    <TitleSection title="Nuestras categorías" />
    <Box mt={6}>
      <CategoryList categories={categories} />
    </Box>
  </ContainerApp>
)
export default CategorySection
