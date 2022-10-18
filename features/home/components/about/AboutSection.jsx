import { Box, Grid, IconButton } from '@mui/material'
import { ContainerApp } from 'components/common'
import { BpTypography } from 'components/shared'
import Image from 'next/image'
import Slider from 'react-slick'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'

const ArrowButtonPrevious = ({ onClick }) => (
  <IconButton
    disableRipple
    onClick={onClick}
    disabled={!onClick}
    className="button-prev"
    sx={{
      zIndex: 9,
      position: 'absolute',
      left: 0,
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
      right: 0,
      top: '40%',
      background: '#0000000d'
    }}
  >
    <KeyboardArrowRightIcon />
  </IconButton>
)

const AboutSection = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: <ArrowButtonPrevious imgAlt="previous-button" />,
    nextArrow: <ArrowButtonNext imgAlt="next-button" />,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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

  return (
    <ContainerApp sx={{ mt: 12, mb: 8 }}>
      <Box
        sx={{
          // mt: 5,
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
          <div>
            <Grid container sx={{ flexDirection: { xs: 'column-reverse', md: 'row' } }}>
              <Grid item md={6} textAlign="center">
                <Image width="436px" height="357px" src="/images/home/foto-slide1.png" alt="hola" />
              </Grid>
              <Grid
                item
                md={6}
                pb={{
                  xs: 4,
                  md: 0
                }}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  textAlign: {
                    xs: 'center',
                    sm: 'center',
                    md: 'initial'
                  }
                }}
              >
                <BpTypography
                  variant="h2"
                  fontWeight={600}
                  sx={{
                    mt: { xs: 0, md: -8 },
                    marginInline: {
                      xs: 'auto',
                      sm: 'auto',
                      md: '0'
                    }
                  }}
                  color="grey.800"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                </BpTypography>
                <BpTypography
                  variant="body2"
                  fontWeight={400}
                  sx={{
                    mt: 3,
                    width: {
                      xs: '100%',
                      md: '500px'
                    }
                  }}
                  color="grey.800"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis,
                  lectus magna fringilla urna, porttitor rhoncus dolor purus non enim.
                </BpTypography>
              </Grid>
            </Grid>
          </div>
          <div>
            <Grid container sx={{ flexDirection: { xs: 'column-reverse', md: 'row' } }}>
              <Grid item md={6} textAlign="center">
                <Image width="436px" height="357px" src="/images/home/foto-slide1.png" alt="hola" />
              </Grid>
              <Grid
                item
                md={6}
                pb={{
                  xs: 4,
                  md: 0
                }}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  textAlign: {
                    xs: 'center',
                    sm: 'center',
                    md: 'initial'
                  }
                }}
              >
                <BpTypography
                  variant="h2"
                  fontWeight={600}
                  sx={{
                    mt: { xs: 0, md: -8 },
                    marginInline: {
                      xs: 'auto',
                      sm: 'auto',
                      md: '0'
                    }
                  }}
                  color="grey.800"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                </BpTypography>
                <BpTypography
                  variant="body2"
                  fontWeight={400}
                  sx={{
                    mt: 3,
                    width: {
                      xs: '100%',
                      md: '500px'
                    }
                  }}
                  color="grey.800"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis,
                  lectus magna fringilla urna, porttitor rhoncus dolor purus non enim.
                </BpTypography>
              </Grid>
            </Grid>
          </div>
        </Slider>
      </Box>
    </ContainerApp>
  )
}
export default AboutSection
