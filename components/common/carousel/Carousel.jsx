/* eslint-disable react/no-array-index-key */
import { Box, Button, Card, CardActions, CardContent, Typography, useMediaQuery } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'

import { useTheme } from '@emotion/react'

const Carousel = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('sm'))

  return (
    <Box>
      <Swiper
        // spaceBetween={20}
        // slidesPerView={5}
        // slidesPerGroup={5}
        // centeredSlides={true}
        slidesPerView="auto"
        navigation={matches}
        pagination
        // parallax
        style={{
          padding: '0.5rem 0rem',
          paddingRight: !matches ? '2rem' : '0rem',
          height: 'auto'
          // background: "red"
        }}
        modules={[Navigation, Pagination]}
        breakpoints={{
          '@0.00': {
            slidesPerView: 2,
            spaceBetween: 10
          },
          '@0.75': {
            slidesPerView: 3,
            spaceBetween: 10
          },
          '@1.00': {
            slidesPerView: 4,
            spaceBetween: 10
          },
          '@1.50': {
            slidesPerView: 5,
            spaceBetween: 20
          }
        }}
      >
        {new Array(10).fill(0).map((item, idx) => (
          <SwiperSlide key={idx}>
            <Card sx={{ width: '100%', height: '240px' }}>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Word of the Day
                </Typography>
                <Typography variant="h5" component="div">
                  Hola como {idx + 1}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  adjective
                </Typography>
                <Typography variant="body2">
                  well meaning and kindly.
                  <br />a benevolent smile
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  )
}
export default Carousel
