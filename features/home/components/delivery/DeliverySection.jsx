import { Box, Stack } from '@mui/material'
import { ContainerApp } from 'components/common'
import { BpTypography } from 'components/shared'
import Image from 'next/image'

const DeliverySection = () => (
  <ContainerApp component="section" sx={{ my: 15, pb: 3, position: 'relative', overflow: 'hidden' }}>
    <Stack zIndex={2} direction="row" flexWrap="wrap" gap={5} justifyContent="space-evenly">
      <Stack alignItems="center">
        <Box maxWidth="436px" textAlign={{ xs: 'center', md: 'initial' }}>
          <BpTypography variant="h2" fontWeight={600} color="grey.800">
            Lorem ipsum dolor
          </BpTypography>
          <BpTypography variant="body1" fontWeight={400} color="grey.800" sx={{ mt: 2 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus
            magna fringilla urna, porttitor rhoncus dolor purus non enim.
          </BpTypography>
        </Box>
        <Stack
          mt={5}
          justifyContent="center"
          alignItems="center"
          sx={{
            maxWidth: '20rem',
            width: '20rem',
            maxHeight: '20rem',
            height: '20rem',
            borderRadius: '50%',
            background: '#fff',
            filter:
              // eslint-disable-next-line max-len
              'drop-shadow(27px 35px 18px rgba(84, 84, 84, 0.01)) drop-shadow(15px 19px 15px rgba(84, 84, 84, 0.03)) drop-shadow(7px 9px 11px rgba(84, 84, 84, 0.05)) drop-shadow(2px 2px 6px rgba(84, 84, 84, 0.06)) drop-shadow(0px 0px 0px rgba(84, 84, 84, 0.06))'
          }}
        >
          <Image width="197px" height="200px" src="/images/home/person1-min.svg" alt="hosff" />
        </Stack>
      </Stack>
      <Stack
        alignItems={{
          xs: 'center',
          md: 'flex-start'
        }}
        flexDirection={{
          xs: 'column',
          md: 'column-reverse'
        }}
        justifyContent="space-between"
      >
        <Box maxWidth="436px" textAlign={{ xs: 'center', md: 'initial' }}>
          <BpTypography variant="h2" fontWeight={600} color="grey.800">
            Lorem ipsum dolor
          </BpTypography>
          <BpTypography variant="body1" fontWeight={400} color="grey.800" sx={{ mt: 2 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus
            magna fringilla urna, porttitor rhoncus dolor purus non enim.
          </BpTypography>
        </Box>
        <Stack
          mt={{ xs: 5, md: 0 }}
          justifyContent="center"
          alignItems="center"
          sx={{
            maxWidth: '20rem',
            width: '20rem',
            maxHeight: '20rem',
            height: '20rem',
            borderRadius: '50%',
            background: '#fff',
            filter:
              // eslint-disable-next-line max-len
              'drop-shadow(27px 35px 18px rgba(84, 84, 84, 0.01)) drop-shadow(15px 19px 15px rgba(84, 84, 84, 0.03)) drop-shadow(7px 9px 11px rgba(84, 84, 84, 0.05)) drop-shadow(2px 2px 6px rgba(84, 84, 84, 0.06)) drop-shadow(0px 0px 0px rgba(84, 84, 84, 0.06))'
          }}
        >
          <Image width="197px" height="200px" src="/images/home/auto-min.svg" alt="hosff" />
        </Stack>
      </Stack>
    </Stack>
    <Box
      component="img"
      loading="lazy"
      src="/images/home/mancha2-min.svg"
      sx={{
        position: 'absolute',
        zIndex: -1,
        left: {
          xs: '-100%',
          sm: '-30%',
          md: '8%'
        },
        top: '10%'
      }}
    />
  </ContainerApp>
)
export default DeliverySection
