/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */
import { Avatar, Box, Button, ButtonGroup, CardContent, Divider, Stack, useMediaQuery, useTheme } from '@mui/material'
import {
  CardProductNomal,
  CardProductSmall,
  Carousel,
  ChipFreeShipping,
  ContainerApp,
  ContainerCard,
  InputRating
} from 'components/common'
import { LayoutMain } from 'components/layouts'
import { BpButton, BpTextField, BpTypography } from 'components/shared'
import React, { useEffect, useState } from 'react'
import { addApolloState, initializeApollo } from 'utils'
import CheckIcon from '@mui/icons-material/Check'
import PhotoSwipeLightbox from 'photoswipe/lightbox'
import Image from 'next/image'
import SimpleGallery from 'components/common/gallery/SimpleGallery'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import IconAdd from '@mui/icons-material/Add'
import IconRemove from '@mui/icons-material/Remove'
import { useCounter } from 'features/common/hooks'
import CardBasicInfoProvider from 'features/products/components/detail/CardBasicInfoProvider'
import CardInfoProduct from 'features/products/components/detail/CardInfoProduct'
import PreviewMobilProduct from 'features/products/components/preview/PreviewMobilProduct'
import PreviewDesktopProduct from 'features/products/components/preview/PreviewDesktopProduct'
import CardBasicInfoProduct from 'features/products/components/detail/CardBasicInfoProduct'
import productsSeeds from 'seeds/products'
import SectionQuestionAnswer from 'features/products/components/questions-answers/SectionQuestionAnswer'
import RatingsSection from 'features/product/ratings/RatingsSection'

const IMAGES = [
  {
    largeURL: 'https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg',
    thumbnailURL: 'https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg',
    width: 1875,
    height: 2500
  },
  {
    largeURL: 'https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg',
    thumbnailURL: 'https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg',
    width: 1669,
    height: 2500
  },
  {
    largeURL: 'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg',
    thumbnailURL: 'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg',
    width: 2500,
    height: 1666
  },
  {
    largeURL: 'https://cdn.uey.mx/uploads/Cheve.jpg',
    thumbnailURL: 'https://cdn.uey.mx/uploads/Cheve-768x768.jpg',
    width: 1200,
    height: 1200
  }
]

const items = [
  { id: 1, title: 'Coca cola light1', price: 20, rating: 3, img: '/images/testImages/image-01.jpg' },
  { id: 2, title: 'Coca cola light2', price: 18, rating: 1, img: '/images/testImages/image-02.jpg' },
  { id: 3, title: 'Coca cola light3', price: 26, rating: 2, img: '/images/testImages/image-03.jpg' },
  { id: 4, title: 'Coca cola light4', price: 30, rating: 4, img: '/images/testImages/image-04.jpg' },
  { id: 5, title: 'Coca cola light5', price: 30, rating: 5, img: '/images/testImages/image-02.jpg' },
  { id: 6, title: 'Coca cola light6', price: 15, rating: 4, img: '/images/testImages/image-04.jpg' },
  { id: 7, title: 'Coca cola light7', price: 70, rating: 5, img: '/images/testImages/image-01.jpg' },
  { id: 8, title: 'Coca cola light8', price: 10, rating: 1, img: '/images/testImages/image-03.jpg' }
]
export const photos = [
  {
    src: 'https://source.unsplash.com/2ShvY8Lf6l0/800x599',
    width: 4,
    height: 3
  },
  {
    src: 'https://source.unsplash.com/Dm-qxdynoEc/800x799',
    width: 1,
    height: 1
  },
  {
    src: 'https://source.unsplash.com/qDkso9nvCg0/600x799',
    width: 3,
    height: 4
  },
  {
    src: 'https://source.unsplash.com/iecJiKe_RNg/600x799',
    width: 3,
    height: 4
  },
  {
    src: 'https://source.unsplash.com/epcsn8Ed8kY/600x799',
    width: 3,
    height: 4
  },
  {
    src: 'https://source.unsplash.com/NQSWvyVRIJk/800x599',
    width: 4,
    height: 3
  },
  {
    src: 'https://source.unsplash.com/zh7GEuORbUw/600x799',
    width: 3,
    height: 4
  },
  {
    src: 'https://source.unsplash.com/PpOHJezOalU/800x599',
    width: 4,
    height: 3
  },
  {
    src: 'https://source.unsplash.com/I1ASdgphUH4/800x599',
    width: 4,
    height: 3
  }
]

const CONTAINER_ID = 'gallery-preview'

const ProductDetailPageRoot = () => {
  const theme = useTheme()
  const isXs = useMediaQuery(theme.breakpoints.down('sm'))
  const isSm = useMediaQuery(theme.breakpoints.between('xs', 'md'))
  const { count: countValue, decrementCount, incrementCount } = useCounter({ initialValue: 1, min: 1, max: 10 })

  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: `#${CONTAINER_ID}`,
      children: 'a',
      pswpModule: () => import('photoswipe')
    })
    lightbox.init()

    return () => {
      lightbox.destroy()
      lightbox = null
    }
  }, [isSm])

  return (
    <ContainerApp sx={{ mt: 6, mb: 5 }}>
      {!isSm && (
        <Box display="flex" gap={3}>
          <Box width="60%" display="flex" flexDirection="column" gap={3}>
            <PreviewDesktopProduct containerId={CONTAINER_ID} images={IMAGES} />
            <CardInfoProduct />
          </Box>
          <Box width="40%" display="flex" flexDirection="column" gap={3}>
            <CardBasicInfoProduct />
            <CardBasicInfoProvider />
          </Box>
        </Box>
      )}
      {isSm && (
        <Box display="block">
          <Box mb={4}>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <BpTypography color="grey.600" component="p" fontWeight={500} variant="body2">
                29 disponibles
              </BpTypography>
              <InputRating size="medium" value={3} readOnly />
            </Stack>
            <Box mt={2} mb={1}>
              <BpTypography color="grey.800" component="h1" fontWeight={600} variant="h5">
                Refresco Coca-Cola Regular 2.5L Lorem ipsum dolor sit
              </BpTypography>
              <Box my={1} maxWidth="110px">
                <ChipFreeShipping bgcolor="grey.200" />
              </Box>
            </Box>
            <PreviewMobilProduct containerId={CONTAINER_ID} images={IMAGES} />
            <Stack mt={2.25} flexDirection="row" justifyContent="space-between" alignItems="center">
              <BpTypography color="grey.800" component="p" fontWeight={600} variant="h4">
                $ 39,00
              </BpTypography>
              <ButtonGroup
                sx={{
                  alignItems: 'center',
                  // gap: 1,
                  height: '40px',
                  '& > .button-contain': {
                    bgcolor: 'grey.200',
                    height: '100%',
                    borderRight: 'none !important'
                  }
                }}
                disableElevation
                variant="contained"
                aria-label="Disabled elevation buttons"
              >
                <Button onClick={() => decrementCount()} color="grey" className="button-contain">
                  <IconRemove sx={{ color: 'grey.500' }} />
                </Button>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  width="100%"
                  height="100%"
                  className="button-contain"
                >
                  <BpTypography color="grey.700" component="p" fontWeight={600} variant="body1">
                    {countValue}
                  </BpTypography>
                </Box>
                <Button onClick={() => incrementCount()} color="grey" className="button-contain">
                  <IconAdd sx={{ color: 'grey.500' }} />
                </Button>
              </ButtonGroup>
            </Stack>
            <Box mt={1}>
              <BpTypography color="grey.800" component="p" fontWeight={600} variant="h5" sx={{ mb: 1 }}>
                Descripción
              </BpTypography>
              <BpTypography color="grey.600" fontVariant="secondary" component="p" fontWeight={400} variant="body1">
                Para consentirte y disfrutar, nada como el refrescante sabor de Coca-Cola Original. Disfruta de su
                delicioso sabor en todo momento y con tus platillos favoritos. Coca-Cola. Siente el sabor. Haz más ricas
                tus comidas con el delicioso y refrescante sabor de Coca-Cola. Coca-Cola. Siente el sabor.
              </BpTypography>
            </Box>
            <BpTypography
              sx={{
                mt: 2
              }}
              textAlign="right"
              color="grey.600"
              component="p"
              fontWeight={500}
              variant="body2"
            >
              Ver políticas de envío
            </BpTypography>
            <BpButton sx={{ mt: 2 }} color="primary" fullWidth type="submit">
              <BpTypography color="inherit" variant="body2">
                Añadir al carrito
              </BpTypography>
            </BpButton>
          </Box>
          <Box mb={2}>
            <CardInfoProduct />
          </Box>
          <CardBasicInfoProvider />
        </Box>
      )}
      {/* section publicaciones del provedor */}
      <Box my={12}>
        <BpTypography textAlign="center" color="grey.800" component="p" fontWeight={600} variant="h5">
          Más publicaciones del proveedor
        </BpTypography>
        <BpTypography sx={{ mt: 1 }} textAlign="center" color="grey.700" component="p" fontWeight={400} variant="body1">
          <strong>¡Ahorra</strong> el precio del envío pidiendo productos del mismo vendedor!
        </BpTypography>
        <Carousel type="settings2">
          {items.map(item =>
            isXs ? (
              <CardProductSmall
                key={item.id}
                title={item.title}
                img={item.img}
                rating={item.rating}
                price={item.price}
              />
            ) : (
              <CardProductNomal
                key={item.id}
                title={item.title}
                img={item.img}
                rating={item.rating}
                price={item.price}
              />
            )
          )}
        </Carousel>
        <Box margin="0 auto" width="100%" textAlign="center">
          <BpButton sx={{ borderRadius: 3 }} fullWidth={false} variant="text" color="inherit">
            <BpTypography variant="body1" color="grey.700" fontWeight={500} sx={{ textDecoration: 'underline' }}>
              Ver más
            </BpTypography>
          </BpButton>
        </Box>
      </Box>
      {/* section otras personas tambien llevaron esto */}
      <Box my={12}>
        <BpTypography textAlign="center" color="grey.800" component="p" fontWeight={600} variant="h5">
          Otras personas también llevaron esto...
        </BpTypography>
        <Carousel type="settings2">
          {items.map(item =>
            isXs ? (
              <CardProductSmall
                key={item.id}
                title={item.title}
                img={item.img}
                rating={item.rating}
                price={item.price}
              />
            ) : (
              <CardProductNomal
                key={item.id}
                title={item.title}
                img={item.img}
                rating={item.rating}
                price={item.price}
              />
            )
          )}
        </Carousel>
      </Box>
      <SectionQuestionAnswer />
      {/* section productos relacionados */}
      <Box my={12}>
        <BpTypography textAlign="center" color="grey.800" component="p" fontWeight={600} variant="h5">
          Productos relacionados
        </BpTypography>
        <Carousel type="settings2">
          {items.map(item =>
            isXs ? (
              <CardProductSmall
                key={item.id}
                title={item.title}
                img={item.img}
                rating={item.rating}
                price={item.price}
              />
            ) : (
              <CardProductNomal
                key={item.id}
                title={item.title}
                img={item.img}
                rating={item.rating}
                price={item.price}
              />
            )
          )}
        </Carousel>
      </Box>

      {/* RATINGS */}
      <RatingsSection />
    </ContainerApp>
  )
}

ProductDetailPageRoot.getLayout = function getLayout(page) {
  return <LayoutMain>{page}</LayoutMain>
}

export async function getServerSideProps({ query = {} }) {
  const apolloClient = initializeApollo()

  console.log({ query })
  return addApolloState(apolloClient, {
    props: {}
  })
}

export default ProductDetailPageRoot
