/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */
import { Avatar, Box, Button, ButtonGroup, CardContent, Divider, Stack } from '@mui/material'
import { ChipFreeShipping, ContainerApp, ContainerCard, InputRating } from 'components/common'
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

// eslint-disable-next-line arrow-body-style
const ProductDetailPageRoot = () => {
  // console.log({ products })

  const [count, setCount] = useState(1)
  const [currentImage, setCurrentImage] = useState(IMAGES[0].largeURL)
  const { count: countValue, decrementCount, incrementCount } = useCounter({ initialValue: 1, min: 1, max: 10 })

  const onChangeCount = e => {
    setCount(e.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
  }

  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: `#my-test-gallery`,
      children: 'a',
      // preload: [1, 2],
      pswpModule: () => import('photoswipe')
    })
    lightbox.init()

    return () => {
      lightbox.destroy()
      lightbox = null
    }
  }, [])

  console.log({ countValue })

  return (
    <>
      {/* <DialogFulLScreen open={viewerIsOpen} onClose={() => setViewerIsOpen(false)} /> */}
      <ContainerApp sx={{ mt: 6, mb: 5 }}>
        {/* <Button onClick={() => setViewerIsOpen(true)}>Opne</Button> */}
        {/* <Box display="flex" gap={3}>
          <Box display="flex" flexDirection="column" gap={3}>
            <Box display="flex" flexDirection="row" gap={4}>
              <SimpleGallery
                currentImage={currentImage}
                onCurrentImage={item => setCurrentImage(item.largeURL)}
                // galleryID="my-test-gallery"
                images={IMAGES}
              />
              <Box
                sx={{
                  minWidth: '0px',
                  maxWidth: '680px',
                  // width: '640px',
                  // flexBasis: '40%',
                  // height: 'auto',
                  bgcolor: 'grey.200',
                  borderRadius: '12px'
                }}
                // id="my-test-gallery"
                className="pswp-gallery"
              >
                {IMAGES.map(image =>
                  image.largeURL === currentImage ? (
                    <a
                      key={image.largeURL}
                      href={currentImage}
                      data-pswp-width={1200}
                      data-pswp-height={1200}
                      target="_blank"
                      style={{ position: 'relative' }}
                      rel="noreferrer"
                    >
                      <Image
                        placeholder="blur"
                        blurDataURL="/images/blur-sm.jpg"
                        width={680}
                        objectFit="cover"
                        height={646}
                        src={currentImage}
                        style={{ borderRadius: '12px' }}
                      />
                    </a>
                  ) : (
                    <a
                      key={image.largeURL}
                      href={image.largeURL}
                      data-pswp-width={1200}
                      data-pswp-height={1200}
                      target="_blank"
                      style={{ position: 'relative' }}
                      rel="noreferrer"
                    />
                  )
                )}
              </Box>
            </Box>
            <ContainerCard>
              <CardContent>
                <Stack flexDirection="column" gap={1}>
                  <Box>
                    <BpTypography color="grey.800" component="p" fontWeight={600} variant="h5" sx={{ mb: 1 }}>
                      Descripción
                    </BpTypography>
                    <BpTypography
                      color="grey.600"
                      fontVariant="secondary"
                      component="p"
                      fontWeight={400}
                      variant="body1"
                    >
                      Para consentirte y disfrutar, nada como el refrescante sabor de Coca-Cola Original. Disfruta de su
                      delicioso sabor en todo momento y con tus platillos favoritos. Coca-Cola. Siente el sabor. Haz más
                      ricas tus comidas con el delicioso y refrescante sabor de Coca-Cola. Coca-Cola. Siente el sabor.
                    </BpTypography>
                  </Box>
                  <Box>
                    <BpTypography
                      fontVariant="secondary"
                      color="grey.700"
                      component="p"
                      fontWeight={600}
                      variant="body2"
                      sx={{ mb: 1 }}
                    >
                      Incluye:
                    </BpTypography>
                    <Box display="flex" gap={1} flexDirection="column" component="div">
                      <Box component="div" display="flex" alignItems="center" gap={2}>
                        <CheckIcon color="primary" sx={{ display: 'inline' }} />
                        <BpTypography
                          fontVariant="secondary"
                          color="grey.600"
                          component="p"
                          fontWeight={400}
                          variant="body2"
                          sx={{ display: 'inline' }}
                        >
                          Mesa alta rectangular (1.80 x 0.60 x 1.00 mts.)
                        </BpTypography>
                      </Box>
                      <Box component="div" display="flex" alignItems="center" gap={2}>
                        <CheckIcon color="primary" sx={{ display: 'inline' }} />
                        <BpTypography
                          fontVariant="secondary"
                          color="grey.600"
                          component="p"
                          fontWeight={400}
                          variant="body2"
                          sx={{ display: 'inline' }}
                        >
                          Mesa alta rectangular (1.80 x 0.60 x 1.00 mts.)
                        </BpTypography>
                      </Box>
                    </Box>
                  </Box>
                  <Box mt={1}>
                    <BpTypography color="grey.800" component="p" fontWeight={600} variant="h5" sx={{ mb: 1 }}>
                      Características
                    </BpTypography>
                    <Box mt={2} flexWrap="wrap" display="flex" gap={2} flexDirection="row" component="div">
                      <Box component="div" display="flex" alignItems="flex-start" gap={2}>
                        <CheckIcon color="primary" sx={{ display: 'inline' }} />
                        <BpTypography
                          fontVariant="secondary"
                          color="grey.600"
                          component="p"
                          fontWeight={400}
                          variant="body2"
                          sx={{ display: 'inline' }}
                        >
                          Acerca de la característica
                        </BpTypography>
                      </Box>
                      <Box component="div" display="flex" alignItems="flex-start" gap={2}>
                        <CheckIcon color="primary" sx={{ display: 'inline' }} />
                        <BpTypography
                          fontVariant="secondary"
                          color="grey.600"
                          component="p"
                          fontWeight={400}
                          variant="body2"
                          sx={{ display: 'inline' }}
                        >
                          Acerca de la característica
                        </BpTypography>
                      </Box>
                    </Box>
                  </Box>
                </Stack>
              </CardContent>
            </ContainerCard>
          </Box>
          <Box display="flex" flexDirection="column" gap={3}>
            <ContainerCard>
              <CardContent>
                <Stack flexDirection="column" gap={1}>
                  <Box alignSelf="flex-end" mb={2}>
                    <ChipFreeShipping />
                  </Box>
                  <BpTypography color="grey.800" component="h1" fontWeight={600} variant="h5">
                    Refresco Coca-Cola Regular 2.5L Lorem ipsum dolor sit
                  </BpTypography>
                  <Box ml={-0.4}>
                    <InputRating size="medium" value={3} readOnly />
                  </Box>
                  <Box>
                    <BpTypography color="grey.700" component="p" fontWeight={600} variant="body1">
                      Descripción
                    </BpTypography>
                    <BpTypography
                      color="grey.600"
                      fontVariant="secondary"
                      component="p"
                      fontWeight={400}
                      variant="body2"
                    >
                      Para consentirte y disfrutar, nada como el refrescante sabor de Coca-Cola Original. Disfruta de su
                      delicioso sabor en todo momento y con tus platillos favoritos. Coca-Cola. Siente el sabor. Haz más
                      ricas tus comidas con el delicioso y refrescante sabor de Coca-Cola. Coca-Cola. Siente el sabor.
                    </BpTypography>
                  </Box>
                  <Stack mt={2} flexDirection="row" gap={1} alignItems="center">
                    <BpTypography color="grey.800" component="p" fontWeight={600} variant="h4">
                      $ 39,00
                    </BpTypography>
                    <Divider orientation="vertical" variant="middle" flexItem />
                    <BpTypography color="grey.600" component="p" fontWeight={500} variant="body1">
                      29 disponibles
                    </BpTypography>
                  </Stack>
                  <Box mt={3}>
                    <BpTypography textAlign="right" color="grey.600" component="p" fontWeight={500} variant="body2">
                      Ver políticas de envío
                    </BpTypography>
                    <Stack
                      // height="200px"
                      mt={1}
                      component="form"
                      onSubmit={handleSubmit}
                      direction="row"
                      justifyContent="space-between"
                      gap={2}
                    >
                      <BpTextField
                        color="primary"
                        size="small"
                        sx={{ width: '100px', height: '100%' }}
                        type="number"
                        value={count}
                        onChange={onChangeCount}
                        inputProps={{ min: 1, max: 10, required: true }}
                      />
                      <BpButton color="primary" fullWidth type="submit">
                        <BpTypography color="inherit" variant="body2">
                          Añadir al carrito
                        </BpTypography>
                      </BpButton>
                    </Stack>
                  </Box>
                </Stack>
              </CardContent>
            </ContainerCard>
            <ContainerCard>
              <CardContent>
                <BpTypography color="grey.800" component="p" fontWeight={600} variant="h5">
                  Información del proveedor
                </BpTypography>
                <Stack mt={2.5} gap={2} direction="row" justifyContent="flex-start" alignItems="center">
                  <Avatar src={undefined} sx={{ width: '4.25rem', height: '4.25rem' }} />
                  <BpTypography color="grey.700" component="p" fontWeight={600} variant="h5">
                    Nombre del proveedor
                  </BpTypography>
                </Stack>
                <Stack width="100%" mt={4} gap={1} direction="row" justifyContent="flex-start" alignItems="center">
                  <Box width="100%" textAlign="center" padding="1.4rem 1rem" bgcolor="grey.200" borderRadius="0.75rem">
                    <BpTypography color="primary.main" component="p" fontWeight={500} variant="h4">
                      + 2 años
                    </BpTypography>
                    <BpTypography sx={{ mt: 1 }} color="grey.600" component="p" fontWeight={400} variant="body2">
                      vendiendo con UEY
                    </BpTypography>
                  </Box>
                  <Box width="100%" textAlign="center" padding="1.4rem 1rem" bgcolor="grey.200" borderRadius="0.75rem">
                    <BpTypography color="primary.main" component="p" fontWeight={500} variant="h4">
                      + 2 años
                    </BpTypography>
                    <BpTypography sx={{ mt: 1 }} color="grey.600" component="p" fontWeight={400} variant="body2">
                      vendiendo con UEY
                    </BpTypography>
                  </Box>
                  <Box width="100%" textAlign="center" padding="1.4rem 1rem" bgcolor="grey.200" borderRadius="0.75rem">
                    <BpTypography color="primary.main" component="p" fontWeight={500} variant="h4">
                      + 2 años
                    </BpTypography>
                    <BpTypography sx={{ mt: 1 }} color="grey.600" component="p" fontWeight={400} variant="body2">
                      vendiendo con UEY
                    </BpTypography>
                  </Box>
                </Stack>
                <BpTypography
                  sx={{ mt: 4 }}
                  textAlign="right"
                  color="grey.600"
                  component="p"
                  fontWeight={600}
                  variant="body1"
                >
                  Ver más acerca del proveedor
                </BpTypography>
              </CardContent>
            </ContainerCard>
          </Box>
        </Box> */}
        <Box>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <BpTypography color="grey.600" component="p" fontWeight={500} variant="body2">
              29 disponibles
            </BpTypography>
            <InputRating size="medium" value={3} readOnly />
          </Stack>
          <Box mt={2}>
            <BpTypography color="grey.800" component="h1" fontWeight={600} variant="h5">
              Refresco Coca-Cola Regular 2.5L Lorem ipsum dolor sit
            </BpTypography>
            <Box my={1} maxWidth="110px">
              <ChipFreeShipping bgcolor="grey.200" />
            </Box>
          </Box>
          <Swiper
            pagination={{
              dynamicBullets: true
            }}
            modules={[Pagination]}
            // className="pswp-gallery"
            className="mySwiper pswp-gallery"
            id="my-test-gallery"
          >
            {IMAGES.map(image => (
              <SwiperSlide key={image.largeURL} style={{ width: '300px' }}>
                <a
                  href={image.largeURL}
                  data-pswp-width={1200}
                  data-pswp-height={1200}
                  target="_blank"
                  style={{ position: 'relative', width: '300px' }}
                  rel="noreferrer"
                >
                  <Image
                    placeholder="blur"
                    blurDataURL="/images/blur-sm.jpg"
                    width={328}
                    layout="responsive"
                    objectFit="cover"
                    height={328}
                    src={image.largeURL}
                    style={{ borderRadius: '12px' }}
                  />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
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
          <Box>
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
            sx={{ mt: 2 }}
            textAlign="right"
            color="grey.600"
            component="p"
            fontWeight={500}
            variant="body2"
          >
            Ver políticas de envío
          </BpTypography>
          <BpButton color="primary" fullWidth type="submit">
            <BpTypography color="inherit" variant="body2">
              Añadir al carrito
            </BpTypography>
          </BpButton>
        </Box>
      </ContainerApp>
    </>
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
