/* eslint-disable react/no-array-index-key */
import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import CloseIcon from '@mui/icons-material/Close'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { Box, Dialog, DialogContent, DialogTitle, IconButton, useMediaQuery, useTheme } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'

const ModalImagesRating = ({ gallery = [], openModal, initialSlide, onClose }) => {
  const [open, setOpen] = useState(openModal)
  const [fullWidth] = useState(true)
  const [maxWidth] = useState('md')
  const themeMui = useTheme()
  const isDeviceSm = useMediaQuery(themeMui.breakpoints.down('md'))
  const [swiperInstance, setSwiperInstance] = useState(null)

  useEffect(() => {
    setOpen(openModal)
  }, [openModal])

  const handleClose = () => {
    if (!onClose) return

    onClose(!open)
  }

  const handleLeftClick = useCallback(() => {
    if (!swiperInstance) return
    swiperInstance.slidePrev()
  }, [swiperInstance])

  const handleRightClick = useCallback(() => {
    if (!swiperInstance) return
    swiperInstance.slideNext()
  }, [swiperInstance])

  return (
    <Dialog
      sx={{
        backdropFilter: 'blur(3px)'
      }}
      fullScreen={isDeviceSm}
      fullWidth={fullWidth}
      maxWidth={maxWidth}
      open={open}
      onClose={handleClose}
    >
      <DialogTitle
        sx={{
          height: '60px',
          background: theme => theme.palette.grey[200]
        }}
      >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme => theme.palette.grey[600]
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent
        dividers
        sx={{
          overflow: 'clip',
          p: 0
          // background: 'linear-gradient(359deg, #978f8f, transparent)'
        }}
      >
        <Box position="relative" display="flex" justifyContent="center" alignItems="center">
          <IconButton
            sx={{
              position: 'absolute',
              left: 0,
              zIndex: 9
            }}
            onClick={handleLeftClick}
          >
            <ArrowBackIosNewIcon fontSize="large" />
          </IconButton>
          <Box
            sx={{
              '& .swiper-pagination': {
                display: { xs: 'block', md: 'none' }
              }
            }}
            width={{ xs: '100%', md: '500px' }}
            height={{ xs: '90vh', md: '480px' }}
          >
            <Swiper
              onSwiper={swiper => setSwiperInstance(swiper)}
              loop
              pagination={{
                clickable: true
              }}
              modules={[Pagination, Navigation]}
              style={{
                width: '100%',
                height: '100%'
              }}
              initialSlide={initialSlide}
            >
              {gallery.map((img, idx) => (
                <SwiperSlide
                  key={`${img}-${idx}`}
                  style={{
                    width: '100%',
                    height: '100%'
                  }}
                >
                  <Image src={img} layout="fill" objectFit="contain" />
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
          <IconButton
            sx={{
              position: 'absolute',
              right: 0,
              zIndex: 9
            }}
            onClick={handleRightClick}
          >
            <ArrowForwardIosIcon fontSize="large" />
          </IconButton>
        </Box>
      </DialogContent>
    </Dialog>
  )
}
export default ModalImagesRating
