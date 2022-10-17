/* eslint-disable @next/next/no-img-element */
import { Box, Skeleton, useMediaQuery, useTheme } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { useRouter } from 'next/router'
import { Pagination, Navigation, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

const useStyles = makeStyles(() => ({
  swipper: {
    height: '100%'
  }
}))

const Banner = ({ slides = undefined }) => {
  const router = useRouter()
  const classes = useStyles()
  const theme = useTheme()
  const isUpXs = useMediaQuery(theme.breakpoints.up('sm'))

  if (!slides) {
    return (
      <Skeleton
        animation="wave"
        variant="rectangular"
        width="100%"
        sx={{
          height: {
            xs: '200px',
            sm: '300px',
            md: '500px'
          }
        }}
      />
    )
  }

  if (slides?.length === 0) return null

  const handleRedirect = (path = null) => {
    if (!path) return
    router.push(path)
  }

  return (
    <Box
      sx={{
        width: '100%',
        height: {
          xs: '300px',
          sm: '340px',
          md: '520px'
        },
        display: 'block'
      }}
    >
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={slides?.length > 1}
        lazy
        autoplay={{
          delay: 4000,
          disableOnInteraction: false
        }}
        pagination={{
          clickable: true
        }}
        navigation={isUpXs}
        modules={[Pagination, Navigation, Autoplay]}
        className={classes.swipper}
      >
        {slides.map(item => (
          <SwiperSlide key={item.id}>
            <Box component="picture" sx={{ objectFit: 'cover', background: 'red', height: '100%', width: '100%' }}>
              <Box component="source" srcSet={`${item.url}`} media="(min-width: 720px)" />
              <Box
                component="img"
                width="320px"
                height="300px"
                sx={{
                  cursor: item.redirect ? 'pointer' : 'initial',
                  width: '100%',
                  height: {
                    xs: '320px',
                    sm: '400px',
                    md: '520px'
                  },
                  objectFit: {
                    xs: 'auto',
                    sm: 'cover',
                    md: 'cover'
                  },
                  objectPosition: 'top center'
                }}
                src="/images/banner-xs.jpg"
                onClick={() => handleRedirect(item.redirect)}
                alt={item.description}
              />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  )
}
export default Banner
