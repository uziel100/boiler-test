import commentsSeeds from 'seeds/comments'
import formatDate from 'utils/formatDate'
import {
  Box,
  CardContent,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Grid,
  Radio
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import ArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import { ContainerCard, InputRating } from 'components/common'
import { BpButton, BpTextField, BpTransitionSlideLeft, BpTransitionSlideUp, BpTypography } from 'components/shared'
import Image from 'next/image'
import { useState } from 'react'
import { IconDocument } from 'components/icons'
import { useSessionApp } from 'hooks'
import ModalImagesRating from './ModalImagesRating'
import RatingProgress from './RatingProgress'

const RatingsSection = () => {
  const { isLogged } = useSessionApp()

  const [open, setOpen] = useState(false)
  const [commets] = useState(commentsSeeds.slice(0, 3))
  const [gallery, setGallery] = useState([])
  const [initialSlide, setInitialSlide] = useState(0)
  const themeMui = useTheme()
  const isDeviceXs = useMediaQuery(themeMui.breakpoints.down('sm'))
  const [openValoration, setOpenValoration] = useState(false)

  const handleClickOpen = (galleryImages, currentSlide) => {
    setGallery(galleryImages)
    setInitialSlide(currentSlide)
    setOpen(true)
  }

  const handleClose = () => setOpen(false)
  const handleCloseModalValoration = () => setOpenValoration(false)
  const handleOpenModalValoration = () => setOpenValoration(true)

  const spliceImages = images => {
    if (isDeviceXs) return images.slice(0, 2)

    return images.slice(0, 3)
  }

  const countRestImages = images => {
    if (isDeviceXs) return images.slice(2).length

    return images.slice(3).length
  }

  return (
    <Box component="section">
      {open && (
        <ModalImagesRating initialSlide={initialSlide} gallery={gallery} openModal={open} onClose={handleClose} />
      )}

      <Dialog
        fullScreen={isDeviceXs}
        open={openValoration}
        maxWidth="md"
        scroll="paper"
        aria-labelledby="moda-enviar-valoracion"
        TransitionComponent={isDeviceXs ? BpTransitionSlideLeft : BpTransitionSlideUp}
      >
        <DialogTitle sx={{ display: { xs: 'flex', sm: 'none' } }}>
          <ArrowLeftIcon sx={{ ml: -1 }} onClick={handleCloseModalValoration} />
          <BpTypography
            sx={{ flexBasis: '90%' }}
            textAlign="center"
            fontWeight={500}
            variant="body1"
            color="grey.800"
            component="p"
          >
            Valoraciones
          </BpTypography>
        </DialogTitle>
        <DialogTitle sx={{ display: { xs: 'none', sm: 'flex' }, justifyContent: 'flex-end', py: 0.5 }}>
          <IconButton onClick={handleCloseModalValoration} sx={{ mr: -1 }}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ pt: 0 }}>
          <Box
            display={{ xs: 'none', sm: 'flex' }}
            alignItems="center"
            justifyContent="center"
            borderRadius="50%"
            width="48px"
            height="48px"
            bgcolor="primary.200"
            margin="0 auto"
            mb={2}
          >
            <IconDocument />
          </Box>
          <Box>
            <BpTypography
              color="grey.800"
              component="p"
              fontWeight={600}
              variant="h6"
              textAlign={{ xs: 'left', sm: 'center' }}
            >
              ¡Danos tu opinión!
            </BpTypography>
            <BpTypography
              color="grey.700"
              component="p"
              fontWeight={400}
              variant="body2"
              textAlign={{ xs: 'left', sm: 'center' }}
              sx={{ maxWidth: '640px', mt: 1 }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.
            </BpTypography>
            <br />
            <BpTypography color="grey.800" component="p" fontWeight={600} variant="h5" textAlign="left">
              Refresco Coca-Cola Regular 2.5L Lorem ipsum dolor sit
            </BpTypography>
            <BpTypography
              color="grey.700"
              fontVariant="secondary"
              component="p"
              fontWeight={500}
              variant="body1"
              textAlign="left"
              sx={{ mt: 0.5 }}
            >
              Nota: Tu dirección de correo electrónico no será publicada
            </BpTypography>
            {!isLogged && (
              <Grid mt={2} container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <BpTypography sx={{ mb: 1 }} color="grey.700" component="p" fontWeight={600} variant="body1">
                    Nombre
                    <BpTypography component="span" color="grey.600" fontWeight={600} variant="body2">
                      &nbsp;(Obligatorio)
                    </BpTypography>
                  </BpTypography>
                  <BpTextField placeholder="Escribe aquí" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <BpTypography sx={{ mb: 1 }} color="grey.700" component="p" fontWeight={600} variant="body1">
                    Correo electrónico
                    <BpTypography component="span" color="grey.600" fontWeight={600} variant="body2">
                      &nbsp;(Obligatorio)
                    </BpTypography>
                  </BpTypography>
                  <BpTextField placeholder="Escribe aquí" />
                </Grid>
              </Grid>
            )}
            {!isLogged && (
              <Stack mt={3} direction="row" alignItems="flex-start">
                <Radio sx={{ mt: -1, ml: -1 }} />
                <BpTypography
                  component="p"
                  color="grey.600"
                  fontWeight={400}
                  variant="body2"
                  sx={{ maxWidth: '610px' }}
                >
                  Guardar mi nombre, correo electrónico y sitio web en este navegador para la próxima vez que haga un
                  comentario.
                </BpTypography>
              </Stack>
            )}
            <Box mt={2}>
              <BpTypography sx={{ mb: 1 }} color="grey.700" component="p" fontWeight={600} variant="body1">
                Escoge una puntuación
              </BpTypography>
              <InputRating sx={{ ml: -0.5 }} />
            </Box>
            <Box mt={2}>
              <BpTypography sx={{ mb: 1 }} color="grey.700" component="p" fontWeight={600} variant="body1">
                Tu valoración
                <BpTypography component="span" color="grey.600" fontWeight={600} variant="body2">
                  &nbsp;(Obligatorio)
                </BpTypography>
              </BpTypography>
              <BpTextField placeholder="Escribe aquí" multiline rows={4} />
            </Box>
            <Box mt={2}>
              <BpTypography sx={{ mb: 1 }} color="grey.700" component="p" fontWeight={600} variant="body1">
                Sube archivos para tu reseña
              </BpTypography>
              <BpTypography
                color="grey.700"
                fontVariant="secondary"
                component="p"
                fontWeight={400}
                variant="body1"
                textAlign="left"
              >
                Suba hasta 6 imágenes (GIF, PNG, JPG, JPEG)
              </BpTypography>
            </Box>
            <Box textAlign="center" mt={5} mb={2}>
              <BpButton fullWidth={false}>Enviar valoración</BpButton>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>

      <Box mb={3}>
        <BpTypography component="p" fontWeight={600} color="grey.800" variant="h5">
          Valoraciones
        </BpTypography>
        <BpTypography sx={{ mt: 1 }} component="p" fontWeight={400} color="grey.700" variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis
        </BpTypography>
        <BpButton onClick={handleOpenModalValoration} sx={{ mt: 4 }} fullWidth={false}>
          Escibir valoración
        </BpButton>
      </Box>
      <Box
        display="grid"
        gridTemplateColumns={{
          xs: '1fr',
          md: '2fr 6fr'
        }}
        gap={4}
      >
        {/* rating starts */}
        <RatingProgress />
        <Stack width="100%" gap={2}>
          {commets.map(item => (
            <ContainerCard key={item.id}>
              <CardContent>
                <Stack direction="row" alignItems="center" gap={2}>
                  <BpTypography component="p" fontWeight={500} color="grey.800" variant="h6">
                    {formatDate(item.date)}
                  </BpTypography>
                  <InputRating value={item.rating} readOnly size="medium" />
                </Stack>
                <Box my={2.5}>
                  <BpTypography component="p" fontWeight={600} color="grey.700" variant="body1">
                    {item.personName}
                  </BpTypography>
                  <BpTypography sx={{ mt: 1 }} component="p" fontWeight={400} color="grey.600" variant="body1">
                    {item.comment}
                  </BpTypography>
                </Box>
                {item.imgThumbnail.length > 0 && (
                  <Box display="flex" gap={1.5} overflow="scroll">
                    {spliceImages(item.imgThumbnail).map((image, idx) => (
                      <Box sx={{ cursor: 'pointer' }} key={image} onClick={() => handleClickOpen(item.imgLarge, idx)}>
                        <Image src={image} width={151} height={143} objectFit="cover" style={{ borderRadius: '8px' }} />
                      </Box>
                    ))}
                    {countRestImages(item.imgThumbnail) > 0 && (
                      <Box
                        position="relative"
                        key={item.imgThumbnail}
                        sx={{ cursor: 'pointer' }}
                        textAlign="center"
                        onClick={() => handleClickOpen(item.imgLarge, 3)}
                      >
                        <Box
                          sx={{
                            position: 'absolute',
                            zIndex: 2,
                            top: { xs: 20, sm: 30 },
                            left: 0,
                            right: 0,
                            bottom: 0,
                            margin: 'auto'
                          }}
                        >
                          <Typography fontSize={50} color="#fff">
                            +{countRestImages(item.imgThumbnail)}
                          </Typography>
                        </Box>
                        <Image
                          src={item.imgThumbnail[3]}
                          width={151}
                          height={143}
                          objectFit="cover"
                          style={{ borderRadius: '8px', filter: 'brightness(0.3)' }}
                        />
                      </Box>
                    )}
                  </Box>
                )}
              </CardContent>
            </ContainerCard>
          ))}
        </Stack>
      </Box>
    </Box>
  )
}
export default RatingsSection
