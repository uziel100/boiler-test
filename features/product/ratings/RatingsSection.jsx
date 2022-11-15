import commentsSeeds from 'seeds/comments'
import formatDate from 'utils/formatDate'
import { Box, CardContent, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import { ContainerCard, InputRating } from 'components/common'
import { BpTypography } from 'components/shared'
import Image from 'next/image'
import { useState } from 'react'
import ModalImagesRating from './ModalImagesRating'
import RatingProgress from './RatingProgress'

const RatingsSection = () => {
  const [open, setOpen] = useState(false)
  const [commets] = useState(commentsSeeds.slice(0, 3))
  const [gallery, setGallery] = useState([])
  const [initialSlide, setInitialSlide] = useState(0)
  const themeMui = useTheme()
  const isDeviceXs = useMediaQuery(themeMui.breakpoints.down('sm'))

  const handleClickOpen = (galleryImages, currentSlide) => {
    setGallery(galleryImages)
    setInitialSlide(currentSlide)
    setOpen(true)
  }

  const handleClose = () => setOpen(false)

  const spliceImages = images => {
    if (isDeviceXs) return images.slice(0, 2)

    return images.slice(0, 3)
  }

  const countRestImages = images => {
    if (isDeviceXs) return images.slice(2).length

    return images.slice(3).length
  }

  return (
    <>
      {open && (
        <ModalImagesRating initialSlide={initialSlide} gallery={gallery} openModal={open} onClose={handleClose} />
      )}
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
    </>
  )
}
export default RatingsSection
