import { Avatar, Box, CardContent, Stack } from '@mui/material'
import { ContainerCard } from 'components/common'
import { BpTypography } from 'components/shared'

// eslint-disable-next-line arrow-body-style
const CardBasicInfoProvider = () => {
  return (
    <ContainerCard>
      <CardContent>
        <BpTypography color="grey.800" component="p" fontWeight={600} variant="h5">
          Información del proveedor
        </BpTypography>
        <Stack mt={2.5} gap={2} direction="row" justifyContent="flex-start" alignItems="center">
          <Avatar src={undefined} sx={{ width: '4.25rem', height: '4.25rem' }} />
          <BpTypography color="grey.700" component="p" fontWeight={600} variant="h5">
            Nombre del proveedor
          </BpTypography>
        </Stack>
        <Stack
          overflow="scroll"
          width="100%"
          mt={4}
          gap={1}
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Box
            maxWidth="160px"
            width="100%"
            textAlign="center"
            padding="1.4rem 1rem"
            bgcolor="grey.200"
            borderRadius="0.75rem"
          >
            <BpTypography color="primary.main" component="p" fontWeight={500} variant="h4">
              + 2 años
            </BpTypography>
            <BpTypography sx={{ mt: 1 }} color="grey.600" component="p" fontWeight={400} variant="body2">
              vendiendo con UEY
            </BpTypography>
          </Box>
          <Box
            maxWidth="160px"
            width="100%"
            textAlign="center"
            padding="1.4rem 1rem"
            bgcolor="grey.200"
            borderRadius="0.75rem"
          >
            <BpTypography color="primary.main" component="p" fontWeight={500} variant="h4">
              + 2 años
            </BpTypography>
            <BpTypography sx={{ mt: 1 }} color="grey.600" component="p" fontWeight={400} variant="body2">
              vendiendo con UEY
            </BpTypography>
          </Box>
          <Box
            maxWidth="160px"
            width="100%"
            textAlign="center"
            padding="1.4rem 1rem"
            bgcolor="grey.200"
            borderRadius="0.75rem"
          >
            <BpTypography color="primary.main" component="p" fontWeight={500} variant="h4">
              + 2 años
            </BpTypography>
            <BpTypography sx={{ mt: 1 }} color="grey.600" component="p" fontWeight={400} variant="body2">
              vendiendo con UEY
            </BpTypography>
          </Box>
        </Stack>
        <BpTypography
          sx={{ mt: 4, textAlign: { xs: 'center', sm: 'right', md: 'right' } }}
          color="grey.600"
          component="p"
          fontWeight={600}
          variant="body1"
        >
          Ver más acerca del proveedor
        </BpTypography>
      </CardContent>
    </ContainerCard>
  )
}
export default CardBasicInfoProvider
