/* eslint-disable react/no-array-index-key */
import { Box, Button, Card, CardActions, CardContent, Typography, useMediaQuery } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'

import { useTheme } from '@emotion/react'

// function SampleNextArrow(props) {
//   const { className, onClick } = props
//   return (
//     <Box
//       className={className}
//       sx={{
//         display: 'block',
//         // background: 'green',
//         bgcolor: 'grey.100',
//         borderRadius: '50%',
//         padding: '4px',
//         width: '30px',
//         ':hover': {
//           bgcolor: 'grey.100'
//           // background: 'green',
//         },
//         height: '30px',
//         '::before': {
//           display: 'none'
//         }
//       }}
//       onClick={onClick}
//     >
//       <ArrowForwardIcon htmlColor="#555" />
//     </Box>
//   )
// }

// function SamplePrevArrow(props) {
//   const { className, onClick } = props
//   return (
//     <Box
//       className={className}
//       sx={{
//         display: 'block',
//         background: 'green',
//         width: '20px',
//         ':hover': {
//           background: 'green'
//         },
//         height: '20px',
//         '::before': {
//           display: 'none'
//         }
//       }}
//       onClick={onClick}
//     />
//   )
// }

// const settings = {
//   // dots: true,
//   infinite: false,
//   speed: 500,
//   slidesToShow: 4,
//   slidesToScroll: 4,
//   initialSlide: 0,
//   fade: false,
//   centerPadding: '60px',
//   nextArrow: <SampleNextArrow />,
//   prevArrow: <SamplePrevArrow />,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 4,
//         slidesToScroll: 4
//         // infinite: true,
//         // dots: true
//       }
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         initialSlide: 3
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2
//       }
//     }
//   ]
// }

const Carousel = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('sm'))

  return (
    <Box>
      {/* <Slider useCSS {...settings} style={{display: "flex"}} >
        {new Array(10).fill(0).map((item, idx) => (
          <Card key={idx} sx={{ minWidth: 275, mr: 2 }}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Word of the Day
              </Typography>
              <Typography variant="h5" component="div">
                Hola como estaskdfsklj lk
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
              </Typography>
              <Typography variant="body2">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        ))}
      </Slider> */}
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
          // 0: {
          //   slidesPerView: 3,
          //   spaceBetween: 10,
          // },
          // 640: {
          //   slidesPerView: 3,
          //   spaceBetween: 10,
          // },
          // 768: {
          //   slidesPerView: 5,
          //   spaceBetween: 20,
          // },
          // 1024: {
          //   slidesPerView: 6,
          //   spaceBetween: 20,
          // },
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
