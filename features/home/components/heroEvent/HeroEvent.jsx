import { Box } from '@mui/material'
import { ContainerApp } from 'components/common'
import { BpTypography } from 'components/shared'
import {
  Circle01,
  Circle02,
  Circle3,
  CirclePerson1,
  CirclePerson2,
  FlashImage,
  LinesTitle,
  ShadeCenter
} from './styleComponent'

const HeroEvent = () => (
  <ContainerApp
    component="section"
    sx={{
      textAlign: 'center',
      position: 'relative',
      height: '460px',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
      // border: '1px solid red'
    }}
  >
    <CirclePerson2 />
    <CirclePerson1 />
    <Circle3 />
    <Circle02 />
    <Circle01 />
    <Box height="100%" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
      <Box zIndex={9} position="relative">
        <LinesTitle />
        <BpTypography
          fontVariant="terciary"
          textAlign="center"
          color="grey.800"
          component="h1"
          fontWeight={400}
          sx={{
            fontSize: {
              xs: '2.5rem',
              sm: '3.8rem',
              md: '5rem'
            },
            lineHeight: {
              xs: '40px'
            },
            mb: 5
          }}
        >
          Todo para tu evento
        </BpTypography>
        <BpTypography
          variant="body2"
          textAlign="center"
          color="grey.800"
          sx={{
            maxWidth: '620px',
            width: '100%',
            margin: '0 auto'
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus
          magna fringilla urna, porttitor
        </BpTypography>
      </Box>
      <FlashImage />
      <ShadeCenter />
    </Box>
  </ContainerApp>
)
export default HeroEvent
