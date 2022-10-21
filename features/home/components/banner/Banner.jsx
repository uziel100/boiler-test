/* eslint-disable @next/next/no-img-element */
import { Box, Skeleton, styled } from '@mui/material'
import ArrowButtonNext from 'components/common/carousel/ArrowButtonNext'
import ArrowButtonPrevious from 'components/common/carousel/ArrowButtonPrevious'
import { useRouter } from 'next/router'
import Slider from 'react-slick'

const customSx = {
  '& button.button-next': {
    display: {
      xs: 'none',
      md: 'flex'
    }
  },
  '& button.button-prev': {
    display: {
      xs: 'none',
      md: 'flex'
    }
  }
}
const StyledContainer = styled(Box)(() => ({
  position: 'relative',
  '& .slick-dots': {
    bottom: 18
  },
  '& .slick-slide > div': {
    padding: '0'
  },
  '.slick-dots li.slick-active button:before': {
    color: theme => theme.palette.secondary.main
  }
}))

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
  lazyLoad: true,
  prevArrow: <ArrowButtonPrevious sx={{ left: 10, background: '#fff' }} />,
  nextArrow: <ArrowButtonNext sx={{ right: 10, background: '#fff' }} />,
  arrows: true,
  autoplay: true
}

const Banner = ({ slides = undefined }) => {
  const router = useRouter()

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
            md: '520px'
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
    <StyledContainer sx={customSx}>
      <Slider {...settings}>
        {slides.map(item => (
          <Box key={item.id} component="picture" sx={{ objectFit: 'cover', height: '100%', width: '100%' }}>
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
                  md: 'fill'
                },
                objectPosition: 'top center'
              }}
              src="/images/banner-xs.jpg"
              onClick={() => handleRedirect(item.redirect)}
              alt={item.description}
            />
          </Box>
        ))}
      </Slider>
    </StyledContainer>
  )
}
export default Banner
