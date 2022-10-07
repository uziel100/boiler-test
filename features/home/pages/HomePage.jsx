import { Box, Container, Grid, Stack } from '@mui/material'
import { Carousel, ContainerApp } from 'components/common'
import { IconEye, IconLogoUey } from 'components/icons'
import { BpTypography } from 'components/shared'
import { About, CardFeature, CategoryList, TitleSection } from '../components'

const HomePage = () => (
  <>
    {/* BANNER */}
    <Box>Banner</Box>
    {/* FEATURES */}
    <ContainerApp component="section" sx={{ py: '3rem' }}>
      <Stack direction="row" alignItems="center" gap={2} justifyContent="center" mb={3}>
        <IconEye style={{ display: 'block' }} />
        <TitleSection title="Descubre todos los beneficios de usar UEY" />
      </Stack>
      <Container maxWidth="md">
        <BpTypography variant="body2" fontWeight={400} textAlign="center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus
          magna fringilla urna, porttitor
        </BpTypography>
      </Container>
      <Grid container spacing={4} mt="5rem">
        <Grid item xs={12} sm={6} md={4}>
          <CardFeature
            icon={<IconLogoUey width={100} height={80} />}
            title="Arma tu evento"
            description="NO te pierdas de esta increíble encuesta que te ayudará a descubrir lo que buscas"
            buttonText="Arma tu evento"
            buttonVariant="contained"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardFeature
            icon={<IconLogoUey width={100} height={80} />}
            title="Arma tu evento"
            description="NO te pierdas de esta increíble encuesta que te ayudará a descubrir lo que buscas"
            buttonText="Arma tu evento"
            buttonVariant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <CardFeature
            icon={<IconLogoUey width={100} height={80} />}
            title="Arma tu evento"
            description="NO te pierdas de esta increíble encuesta que te ayudará a descubrir lo que buscas"
            buttonText="Arma tu evento"
            buttonVariant="outlined"
          />
        </Grid>
      </Grid>
    </ContainerApp>
    {/* CATEGORIES */}
    <Box component="section" sx={{ background: '#F9F9FF', py: '4rem' }}>
      <ContainerApp sx={{ py: '3.5rem' }}>
        <Stack direction="row" alignItems="center" gap={2} justifyContent="center" mb={3}>
          <TitleSection title="Nuestras categorías" />
          <IconEye style={{ display: 'block' }} />
        </Stack>
        <Container maxWidth="md">
          <BpTypography
            variant="body2"
            fontWeight={400}
            textAlign="center"
            label="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus"
          />
        </Container>
        <CategoryList />
      </ContainerApp>
    </Box>
    {/* ABOUT */}
    <ContainerApp component="section" sx={{ py: '5.6rem' }}>
      <About />
      <br />
      <br />
      <br />
      <Carousel />
    </ContainerApp>
  </>
)
export default HomePage
