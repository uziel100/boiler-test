/* eslint-disable react/button-has-type */

import Carousel from 'react-multi-carousel'
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  IconButton,
  Stack,
  Typography,
  useMediaQuery
} from '@mui/material'
import { IconEye, IconEyeOff } from 'components/icons'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 60
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 50
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30
  }
}

const CustomLeftArrow = ({ onClick }) => (
  <Button
    sx={{ position: 'absolute', left: -30, top: 100, display: { xs: 'none', sm: 'block' } }}
    onClick={() => onClick()}
  >
    <IconEye />
  </Button>
)
const CustomRightArrow = ({ onClick }) => (
  <Button
    // sx={{ position: 'absolute', left: -80, top: 100, display: { xs: 'none', sm: 'block' } }}
    onClick={() => onClick()}
  >
    <IconEye />
  </Button>
)

const CustomButtonGroup = ({ next, previous, goToSlide, carouselState }) => {
  const { totalItems, currentSlide } = carouselState
  return (
    // <div className="custom-button-group">
    <>
      {/* <div>Current slide is {currentSlide}</div> */}
      <Button
        sx={{ position: 'absolute', left: '-5%', top: 100, display: { xs: 'none', sm: 'block' }, zIndex: 9999 }}
        onClick={() => previous()}
      >
        <KeyboardArrowLeftIcon />
      </Button>
      <Button
        sx={{ position: 'absolute', right: '-5%', top: 100, display: { xs: 'none', sm: 'block' }, zIndex: 999 }}
        onClick={() => next()}
      >
        <KeyboardArrowRightIcon />
      </Button>
      {/* <Button
          onClick={() => goToSlide(Math.floor(Math.random() * totalItems + 1))}
        >
          Go to a random slide
        </Button> */}
    </>
  )
}

const Carousel2 = () => {
  console.log('hola')

  return (
    <Box
      sx={{
        position: 'relative',
        height: '100%',
        padding: '2rem 0'
      }}
    >
      <Carousel
        ssr
        // partialVisbile
        arrows={false}
        // deviceType={deviceType}r
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside
        customButtonGroup={<CustomButtonGroup />}
        // itemClass="item-carousel"
        containerClass="container-corousel"
        // customLeftArrow={<CustomLeftArrow />}
        responsive={{
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
            slidesToSlide: 3,
            partialVisibilityGutter: 40 // this is optional if you are not using partialVisible props
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
            slidesToSlide: 3,
            partialVisibilityGutter: 30 // this is optional if you are not using partialVisible props
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2,
            partialVisibilityGutter: 10 // this is optional if you are not using partialVisible props
          }
        }}
      >
        {new Array(10).fill(0).map((item, idx) => (
          <Box  key={item} sx={{
            px:1
          }}>
            <Card
             
              sx={{
                width: '100%',
                // minWidth: '260px',
                maxWidth: '320px',
                // width: "240px",
                // marginRight: '4px',
                // padding: '20px 0 20px 20px'
              }}
            >
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
          </Box>
        ))}
      </Carousel>
    </Box>
  )
}
export default Carousel2
