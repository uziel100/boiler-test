import { Box } from '@mui/material'
import React, { useCallback, useState } from 'react'
import { Swiper } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'
import ArrowButtonNext from './ArrowButtonNext'
import ArrowButtonPrevious from './ArrowButtonPrevious'

const COLUMNS_RESPONSIVE = {
  column4: {
    0: {
      slidesPerView: 2,
      spaceBetween: 8,
      slidesPerGroup: 2
    },
    600: {
      slidesPerView: 3,
      spaceBetween: 16,
      slidesPerGroup: 3
    },
    900: {
      slidesPerView: 4,
      spaceBetween: 16,
      slidesPerGroup: 4
    }
  },
  column5: {
    0: {
      slidesPerView: 2,
      spaceBetween: 8,
      slidesPerGroup: 2
    },
    600: {
      slidesPerView: 4,
      spaceBetween: 16,
      slidesPerGroup: 4
    },
    900: {
      slidesPerView: 5,
      spaceBetween: 16,
      slidesPerGroup: 5
    }
  }
}

const Carousel = ({ children, typeColumn = 'column5' }) => {
  const [swiperInstance, setSwiperInstance] = useState(null)

  const handleLeftClick = useCallback(() => {
    if (!swiperInstance) return
    swiperInstance.slidePrev()
  }, [swiperInstance])

  const handleRightClick = useCallback(() => {
    if (!swiperInstance) return
    swiperInstance.slideNext()
  }, [swiperInstance])

  return (
    <Box position="relative" display="flex" justifyContent="center" alignItems="center">
      <ArrowButtonPrevious
        sx={{
          left: -40,
          display: { xs: 'none', md: 'block' }
        }}
        onClick={handleLeftClick}
      />
      <Box
        width="100%"
        sx={{
          '& .swiper-pagination': {
            display: { xs: 'block', md: 'none' }
          },
          '& .swiper-pagination-bullet.swiper-pagination-bullet-active': {
            bgcolor: 'primary.main'
          },
          '& .swiper-wrapper': {
            mb: 4
          }
        }}
      >
        <Swiper
          onSwiper={swiper => setSwiperInstance(swiper)}
          loop
          initialSlide={0}
          pagination={{
            clickable: true
          }}
          modules={[Pagination, Navigation]}
          style={{
            width: '100%',
            height: '100%',
            padding: '16px 8px'
          }}
          loopFillGroupWithBlank
          breakpoints={COLUMNS_RESPONSIVE[typeColumn]}
        >
          {children}
        </Swiper>
      </Box>
      <ArrowButtonNext
        sx={{
          right: -40,
          display: { xs: 'none', md: 'block' }
        }}
        onClick={handleRightClick}
      />
    </Box>
  )
}
export default Carousel
