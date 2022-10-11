/* eslint-disable @next/next/no-img-element */
import { Box, Skeleton, useMediaQuery, useTheme } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { useRouter } from 'next/router'
import { Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

const useStyles = makeStyles(() => ({
  swipper: {
    height: '100%'
  }
}))

const Banner = ({ slides = undefined }) => {
  
  const router = useRouter();
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
            md: '400px'
          }
        }}
      />
    )
  }

  if(slides?.length === 0) return null;


  const handleRedirect = (path = null) => {
    if(!path) return;
    router.push(path)
  }

  return (
    <Box
      sx={{
        width: '100%',
        mt: { xs: 2, md: 0 },
        height: {
          xs: '200px',
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
        pagination={{
          clickable: true
        }}
        navigation={isUpXs}
        modules={[Pagination, Navigation]}
        className={classes.swipper}
      >
        {slides.map((item) => (
          <SwiperSlide key={item.id}>
            <Box
              component="img"
              sx={{
                cursor: item.redirect? "pointer": "initial",
                objectPosition: 'top',
                objectFit: {
                  xs: 'contain',
                  sm: 'cover',
                  md: 'cover'
                },
                width: '100%',
                height: '100%'
              }}
              onClick={() => handleRedirect(item.redirect)}
              width="320px"
              height="220px"
              loading="lazy"
              src={item.url}
              alt={item.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  )
}
export default Banner
