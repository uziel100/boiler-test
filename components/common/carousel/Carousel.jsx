import { Box } from '@mui/material'
import React from 'react'
import Slider from 'react-slick'
import ArrowButtonNext from './ArrowButtonNext'
import ArrowButtonPrevious from './ArrowButtonPrevious'

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5,
  initialSlide: 0,
  lazyLoad: true,
  prevArrow: <ArrowButtonPrevious />,
  nextArrow: <ArrowButtonNext />,
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 4,
        infinite: false,
        lazyLoad: true,
        dots: false,
        arrows: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        lazyLoad: true,
        dots: false,
        arrows: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        lazyLoad: true,
        slidesToScroll: 2,
        dots: false,
        arrows: true
      }
    }
  ]
}

const settings2 = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  lazyLoad: true,
  prevArrow: <ArrowButtonPrevious />,
  nextArrow: <ArrowButtonNext />,
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
        infinite: false,
        lazyLoad: true,
        dots: false,
        arrows: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
        lazyLoad: true,
        dots: false,
        arrows: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        lazyLoad: true,
        slidesToScroll: 2,
        dots: false,
        arrows: true
      }
    }
  ]
}

const typeStetting = {
  settings,
  settings2
}

const Carousel = ({ children, type = 'settings' }) => {
  const countItems = React.Children.count(children)

  // console.log({ childrens })

  const customSetting =
    countItems < typeStetting[type].slidesToShow ? { ...typeStetting[type], infinite: false } : typeStetting[type]

  return (
    <Box
      sx={{
        position: 'relative',
        '.slick-dots li.slick-active button:before': {
          color: theme => theme.palette.primary.main
        },
        '& .slick-list > .slick-track': {
          padding: '3rem 0 3rem 0',
          marginLeft: 0
        }
        // '& .slick-slide.slick-cloned': {
        //   display: 'none'
        // }
      }}
    >
      <Slider {...customSetting}>{children}</Slider>
    </Box>
  )
}
export default Carousel
