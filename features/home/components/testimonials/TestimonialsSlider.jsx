/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/button-has-type */
import { Box, IconButton } from '@mui/material'
import Slider from 'react-slick'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import { BpTypography } from 'components/shared'
import TestimonialCard from './TestimonialCard'

const ArrowButtonPrevious = ({ onClick }) => (
  <IconButton
    disableRipple
    onClick={onClick}
    disabled={!onClick}
    className="button-prev"
    sx={{
      zIndex: 9,
      position: 'absolute',
      left: -50,
      top: '40%',
      background: '#0000000d'
    }}
  >
    <KeyboardArrowLeftIcon />
  </IconButton>
)

const ArrowButtonNext = ({ onClick }) => (
  <IconButton
    disableRipple
    onClick={onClick}
    disabled={!onClick}
    className="button-next"
    sx={{
      zIndex: 9,
      position: 'absolute',
      right: -50,
      top: '40%',
      background: '#0000000d'
    }}
  >
    <KeyboardArrowRightIcon />
  </IconButton>
)

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 0,
  prevArrow: <ArrowButtonPrevious imgAlt="previous-button" />,
  nextArrow: <ArrowButtonNext imgAlt="next-button" />,
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        dots: true,
        arrows: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false
      }
    }
  ]
}

const TestimonialsSlider = () => (
  <Box>
    <BpTypography textAlign="center" fontWeight={600} variant="h3" color="grey.800">
      ¿Qué dicen nuestros clientes?
    </BpTypography>
    <Box
      sx={{
        mt: 5,
        position: 'relative',
        '& .swiper-wrapper': {
          alignItems: 'center'
        },
        '.slick-dots': {
          bottom: '-40px'
        },
        '.slick-dots li.slick-active button:before': {
          color: theme => theme.palette.secondary.main
        }
      }}
    >
      <Slider {...settings}>
        <TestimonialCard inFocus />
        <TestimonialCard inFocus />
        <TestimonialCard inFocus />
        <TestimonialCard inFocus />
        <TestimonialCard inFocus />
        <TestimonialCard inFocus />
      </Slider>
    </Box>
  </Box>
)
console.log(
  '🚀 ~ file: TestimonialsSlider.jsx ~ line 123 ~ TestimonialsSlider ~ TestimonialsSlider',
  TestimonialsSlider
)
export default TestimonialsSlider
