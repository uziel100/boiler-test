import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import Image from 'next/image'
import { DEFAULT_BLUR_IMG_XS } from 'const/products'
import { Box } from '@mui/material'

// eslint-disable-next-line arrow-body-style
const PreviewMobilProduct = ({ containerId, images = [] }) => {
  return (
    <Box
      sx={{
        '& .swiper-pagination-bullet.swiper-pagination-bullet-active': {
          bgcolor: 'primary.main'
        }
      }}
    >
      <Swiper
        pagination={{
          dynamicBullets: true
        }}
        modules={[Pagination]}
        className="mySwiper pswp-gallery"
        style={{
          minWidth: '280px',
          maxWidth: '460px'
        }}
        id={containerId}
      >
        {images.map(image => (
          <SwiperSlide key={image.largeURL} style={{ width: '300px' }}>
            <a
              href={image.largeURL}
              data-pswp-width={image.width}
              data-pswp-height={image.height}
              target="_blank"
              style={{ position: 'relative', width: '300px' }}
              rel="noreferrer"
            >
              <Image
                placeholder="blur"
                blurDataURL={DEFAULT_BLUR_IMG_XS}
                width={460}
                // layout="responsive"
                objectFit="cover"
                height={460}
                src={image.largeURL}
                style={{ borderRadius: '12px' }}
                priority
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  )
}
export default PreviewMobilProduct
