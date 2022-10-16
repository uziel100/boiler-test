import { Box, Container, Grid, Stack } from '@mui/material'
import { ContainerApp } from 'components/common'
import { IconEye, IconLogoUey } from 'components/icons'
import { BpTypography } from 'components/shared'
import { useEffect, useState } from 'react'
import { About, Banner, CardFeature, CategoryList, TitleSection } from '../components'
import TestimonialsSlider from '../components/testimonials/TestimonialsSlider'

const HomePage = () => {
  const [banners, setBanners] = useState(undefined)

  useEffect(() => {
    setTimeout(() => {
      setBanners([
        {
          id: 'slide-02',
          url: '/images/banner2.jpg',
          type: 'image',
          description: 'Imagen de la celebracion de dia halloween'
        },
        {
          id: 'slide-01',
          url: '/images/banner1.jpg',
          type: 'image',
          description: 'Imagen de la celebracion de dia de muertos',
          redirect: '/login'
        },
        {
          id: 'slide-03',
          url: '/images/banner3.jpg',
          type: 'image',
          description: 'Imagen de un paisaje verde'
        }
      ])
    }, 800)
  }, [])

  return (
    <>
      {/* BANNER */}
      <Banner slides={banners} />
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
        <Grid component="div" container spacing={4} mt="5rem" data-aos="fade-up">
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
      <ContainerApp sx={{ py: '4.5rem' }}>
        <TitleSection title="Nuestras categorías" />
        <Box mt={6}>
          <CategoryList />
        </Box>
      </ContainerApp>
      {/* ABOUT */}
      {/* <ContainerApp component="section" sx={{ py: '5rem' }}>
        <About />
      </ContainerApp> */}
      <ContainerApp component="section" sx={{ py: '4rem', mb: 8 }}>
        <TestimonialsSlider />
      </ContainerApp>
    </>
  )
}
export default HomePage
