// export const O

const { Box } = require('@mui/material')

export const ShadeCenter = () => (
  <Box
    sx={{
      position: 'absolute',
      left: 0,
      right: 0,
      marginLeft: 'auto',
      marginRight: 'auto',
      bottom: 120,
      maxWidth: '775px',
      width: '100%',
      zIndex: 2
    }}
    component="img"
    loading="lazy"
    src="/images/home/home-sombra.svg"
  />
)

export const FlashImage = () => (
  <Box
    sx={{
      position: 'absolute',
      left: 0,
      right: 0,
      marginLeft: 'auto',
      marginRight: 'auto',
      bottom: {
        xs: 300,
        md: 260
      },
      maxWidth: '565px',
      minWidth: '328px',
      width: '100%',
      zIndex: -1
    }}
    component="img"
    loading="lazy"
    src="/images/home/home-evento-splash.svg"
  />
)

export const LinesTitle = () => (
  <Box
    sx={{
      position: 'absolute',
      width: {
        xs: '30px',
        sm: 'auto'
      },
      top: {
        xs: -20,
        md: -40
      },
      left: {
        xs: 20,
        md: -40
      },
      zIndex: 2
    }}
    component="img"
    loading="lazy"
    src="/images/home/home-lines.svg"
  />
)

export const Circle01 = () => (
  <Box
    sx={{
      position: 'absolute',
      top: {
        xs: '28%',
        sm: '36%'
      },
      right: {
        xs: '37%',
        sm: '17%'
      },
      width: {
        xs: '10px',
        sm: '18px'
      },
      height: {
        xs: '10px',
        sm: '20px'
      },
      borderRadius: '50%',
      zIndex: 1,
      bgcolor: 'secondary.300'
    }}
    component="span"
  />
)

export const Circle02 = () => (
  <Box
    sx={{
      position: 'absolute',
      top: {
        xs: '34%',
        sm: '52%'
      },
      right: {
        xs: '39%',
        sm: '18%'
      },
      width: {
        xs: '14px',
        sm: '18px'
      },
      height: {
        xs: '14px',
        sm: '20px'
      },
      borderRadius: '50%',
      zIndex: 1,
      bgcolor: 'secondary.300'
    }}
    loading="lazy"
    component="span"
  />
)

export const Circle3 = () => (
  <Box
    sx={{
      position: 'absolute',
      top: {
        xs: '29%',
        sm: '42%'
      },
      right: {
        xs: '26%',
        sm: '13%'
      },
      width: {
        xs: '14px',
        sm: '26.43px'
      },
      height: {
        xs: '14px',
        sm: '27.23px'
      },
      borderRadius: '50%',
      zIndex: 1,
      bgcolor: 'secondary.300'
    }}
    component="span"
  />
)

export const CirclePerson1 = () => (
  <Box
    sx={{
      position: 'absolute',
      zIndex: 2,
      top: {
        xs: '12%',
        sm: '15%'
      },
      right: {
        xs: '34%',
        sm: '14%'
      },
      width: {
        xs: '67px',
        sm: '54px'
      },
      height: {
        xs: '67px',
        sm: '56px'
      }
    }}
    component="img"
    height="56px"
    width="54px"
    loading="lazy"
    src="/images/home/circle-person02.png"
  />
)

export const CirclePerson2 = () => (
  <Box
    sx={{
      position: 'absolute',
      top: {
        xs: '7%',
        sm: '22%'
      },
      right: {
        xs: '8%',
        sm: '7%'
      },
      zIndex: 2,
      width: {
        xs: '81px',
        sm: '78px'
      },
      height: {
        xs: '88px',
        sm: '81px'
      }
    }}
    component="img"
    height="81px"
    width="78px"
    src="/images/home/circle-person01.png"
  />
)
