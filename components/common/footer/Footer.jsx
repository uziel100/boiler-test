import Grid from '@mui/material/Grid'
import Image from 'next/image'
import Typography from '@mui/material/Typography'
import { Box, List, ListItem, ListItemText, Stack, Button, styled, useTheme, ButtonBase } from '@mui/material'
import Link from 'next/link'
import { ContainerApp } from '../surfaces'
import { BpTypography } from 'components/shared'
import { IconFacebook, IconInstagram, IconLinkedin, IconTwitter } from 'components/icons'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

let categories = [
  {
    id: 'category1',
    name: 'Bebidas'
  },
  {
    id: 'category2',
    name: 'Comida'
  },
  {
    id: 'category3',
    name: 'Mobiliario'
  },
  {
    id: 'category4',
    name: 'Personal de servicio'
  },
  {
    id: 'category5',
    name: 'Música y Tecnología'
  },
  {
    id: 'category6',
    name: 'Espacios'
  }
]

const linkSites = [
  {
    id: 1,
    name: 'Ayuda',
    link: '/'
  },
  {
    id: 2,
    name: 'Preguntas frecuentes',
    link: '/'
  },
  {
    id: 3,
    name: 'Términos y condiciones',
    link: '/'
  },
  {
    id: 4,
    name: 'Políticas de privacidad',
    link: '/'
  },
  {
    id: 5,
    name: 'Vende con nosotros',
    link: '/'
  }
]

const StyledMethodPayment = styled(Box)(({ theme }) => ({
  border: `1px solid ${theme.palette.grey[500]}`,
  padding: '0.2rem 0.6rem',
  borderRadius: '10px',
  display: 'flex',
  alignItems: 'center'
}))

const styleCardContainerMediaSocial = {
  bgcolor: 'background.paper',
  padding: '0.3rem',
  display: 'flex',
  alignItems: 'center',
  borderRadius: '4px',
  cursor: 'pointer'
}

const Footer = () => {
  const theme = useTheme()

  return (
    <Box component="footer" sx={{ bgcolor: 'grey.200' }}>
      <ContainerApp maxWidth="lg" component="section">
        <Grid
          sx={{ minHeight: '294px', maxHeight: 'autos', textAlign: { xs: 'center', md: 'initial' }, py: 3 }}
          container
          spacing={2}
        >
          <Grid item xs={12} sm={6} md={3}>
            <Image src="/images/logo-uey.svg" alt="Logo de la empresa uey" width={86} height={56} />
            <BpTypography fontVariant="secondary" fontWeight={400} variant="body2" color="grey.700">
              Arma tus eventos de manera fácil y rápida. Tenemos todo en un solo lugar para tí.
            </BpTypography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <BpTypography variant="subtitle1" color="grey.800" fontWeight={600} sx={{ mb: 1 }}>
              Nuestras categorías
            </BpTypography>
            <List dense>
              {categories.map(item => (
                <Link key={item.id} href="/" passHref>
                  <ListItem
                    disablePadding
                    sx={{
                      textAlign: 'inherit',
                      cursor: 'pointer',
                      justifyContent: { xs: 'center', sm: 'center', md: 'initial' },
                      '&:hover': {
                        textDecoration: 'underline'
                      }
                    }}
                  >
                    <BpTypography sx={{ mb: 1 }} variant="body2" fontWeight={400} color="grey.700">
                      {item.name}
                    </BpTypography>
                  </ListItem>
                </Link>
              ))}
            </List>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <BpTypography variant="subtitle1" color="grey.800" fontWeight={600} sx={{ mb: 1 }}>
              Información
            </BpTypography>
            <List dense>
              {linkSites.map(item => (
                <Link key={item.id} href={item.link} passHref>
                  <ListItem
                    disablePadding
                    sx={{
                      textAlign: 'inherit',
                      cursor: 'pointer',
                      justifyContent: { xs: 'center', sm: 'center', md: 'initial' },
                      '&:hover': {
                        textDecoration: 'underline'
                      }
                    }}
                  >
                    <BpTypography sx={{ mb: 1 }} variant="body2" fontWeight={400} color="grey.700">
                      {item.name}
                    </BpTypography>
                  </ListItem>
                </Link>
              ))}
            </List>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <BpTypography variant="subtitle1" color="grey.800" fontWeight={600} sx={{ mb: 1 }}>
              ¿No encuntras lo que buscas?
            </BpTypography>
            <List dense>
              <Link href="/" passHref>
                <ListItem
                  disablePadding
                  sx={{
                    textAlign: 'inherit',
                    cursor: 'pointer',
                    justifyContent: { xs: 'center', sm: 'center', md: 'initial' },
                    '&:hover': {
                      textDecoration: 'underline'
                    }
                  }}
                >
                  <BpTypography sx={{ mb: 1 }} variant="body2" fontWeight={400} color="grey.700">
                    Arma tu evento
                  </BpTypography>
                </ListItem>
              </Link>
              <Link href="/" passHref>
                <ListItem
                  disablePadding
                  sx={{
                    textAlign: 'inherit',
                    cursor: 'pointer',
                    justifyContent: { xs: 'center', sm: 'center', md: 'initial' },
                    '&:hover': {
                      textDecoration: 'underline'
                    }
                  }}
                >
                  <BpTypography sx={{ mb: 1 }} variant="body2" fontWeight={400} color="grey.700">
                    Busca experiencias
                  </BpTypography>
                </ListItem>
              </Link>
            </List>
            <BpTypography variant="subtitle1" color="grey.800" fontWeight={600} sx={{ mb: 1 }}>
              Siguenos en nuestras redes sociales
            </BpTypography>
            <Stack direction="row" gap={2} mt={2} justifyContent={{xs:"center", md: "initial"}}>
              <Box sx={styleCardContainerMediaSocial}>
                <IconInstagram color={theme.palette.primary.main} />
              </Box>
              <Box sx={styleCardContainerMediaSocial}>
                <IconLinkedin color={theme.palette.primary.main} />
              </Box>
              <Box sx={styleCardContainerMediaSocial}>
                <IconFacebook color={theme.palette.primary.main} />
              </Box>
              <Box sx={styleCardContainerMediaSocial}>
                <IconTwitter color={theme.palette.primary.main} />
              </Box>
            </Stack>
            <ButtonBase sx={{ mt: 2, p: 0, alignItems: 'flex-start', gap: 1 }}>
              <BpTypography variant="subtitle1" color="grey.800" fontWeight={600} sx={{ mb: 1 }}>
                Cotizar sin pagar
              </BpTypography>
              <ArrowForwardIcon color="primary" />
            </ButtonBase>
          </Grid>
        </Grid>
      </ContainerApp>
      <Box sx={{ py: 2, bgcolor: 'grey.300' }}>
        <ContainerApp maxWidth="lg" component="section">
          <Grid container justifyContent="space-between" spacing={{ xs: 3, sm: 2 }} alignItems="center">
            <Grid item xs={12} sm={6} textAlign={{ xs: 'center', sm: 'inherit' }}>
              <Typography variant="body2" fontWeight={600} color="grey.700">
                © Gracias Uey, S.A. de C.V. {new Date().getFullYear()}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Stack direction="row" justifyContent={{ xs: 'center', md: 'flex-end' }} gap={2}>
                <StyledMethodPayment>
                  <Image src="/images/visa.png" alt="Logo visa" width={32} height={32} priority={false} />
                </StyledMethodPayment>
                <StyledMethodPayment>
                  <Image src="/images/paypal.png" alt="Logo paypal" width={24} height={20} priority={false} />
                </StyledMethodPayment>
                <StyledMethodPayment>
                  <Image src="/images/visa.png" alt="Logo visa" width={32} height={32} priority={false} />
                </StyledMethodPayment>
              </Stack>
            </Grid>
          </Grid>
        </ContainerApp>
      </Box>
    </Box>
  )
}
export default Footer
