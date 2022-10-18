import { Box, Stack } from '@mui/material'
import { ContainerApp } from 'components/common'
import TitleSectionProduct from './TitleSectionProduct'
import ProductSlider from './ProductSlider'

const SectionProducts = ({ products, services, spaces }) => (
  <ContainerApp component="section">
    <Stack flexDirection="column" gap={2} justifyContent="center">
      <Box>
        <TitleSectionProduct text="Bebidas y comidas" />
        <ProductSlider items={products} />
      </Box>
      <Box>
        <TitleSectionProduct text="Servicios" />
        <ProductSlider items={services} />
      </Box>
      <Box>
        <TitleSectionProduct text="Espacios" />
        <ProductSlider items={spaces} />
      </Box>
    </Stack>
  </ContainerApp>
)
export default SectionProducts
