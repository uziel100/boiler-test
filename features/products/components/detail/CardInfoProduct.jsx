import { Box, CardContent, Stack } from '@mui/material'
import { ContainerCard } from 'components/common'
import { BpTypography } from 'components/shared'
import CheckIcon from '@mui/icons-material/Check'

// eslint-disable-next-line arrow-body-style
const CardInfoProduct = () => {
  return (
    <ContainerCard>
      <CardContent>
        <Stack flexDirection="column" gap={1}>
          <Box>
            <BpTypography color="grey.800" component="p" fontWeight={600} variant="h5" sx={{ mb: 1 }}>
              Descripción
            </BpTypography>
            <BpTypography color="grey.600" fontVariant="secondary" component="p" fontWeight={400} variant="body1">
              Para consentirte y disfrutar, nada como el refrescante sabor de Coca-Cola Original. Disfruta de su
              delicioso sabor en todo momento y con tus platillos favoritos. Coca-Cola. Siente el sabor. Haz más ricas
              tus comidas con el delicioso y refrescante sabor de Coca-Cola. Coca-Cola. Siente el sabor.
            </BpTypography>
          </Box>
          <Box>
            <BpTypography
              fontVariant="secondary"
              color="grey.700"
              component="p"
              fontWeight={600}
              variant="body2"
              sx={{ mb: 1 }}
            >
              Incluye:
            </BpTypography>
            <Box display="flex" gap={1} flexDirection="column" component="div">
              <Box component="div" display="flex" alignItems="center" gap={2}>
                <CheckIcon color="primary" sx={{ display: 'inline' }} />
                <BpTypography
                  fontVariant="secondary"
                  color="grey.600"
                  component="p"
                  fontWeight={400}
                  variant="body2"
                  sx={{ display: 'inline' }}
                >
                  Mesa alta rectangular (1.80 x 0.60 x 1.00 mts.)
                </BpTypography>
              </Box>
              <Box component="div" display="flex" alignItems="center" gap={2}>
                <CheckIcon color="primary" sx={{ display: 'inline' }} />
                <BpTypography
                  fontVariant="secondary"
                  color="grey.600"
                  component="p"
                  fontWeight={400}
                  variant="body2"
                  sx={{ display: 'inline' }}
                >
                  Mesa alta rectangular (1.80 x 0.60 x 1.00 mts.)
                </BpTypography>
              </Box>
            </Box>
          </Box>
          <Box mt={1}>
            <BpTypography color="grey.800" component="p" fontWeight={600} variant="h5" sx={{ mb: 1 }}>
              Características
            </BpTypography>
            <Box mt={2} flexWrap="wrap" display="flex" gap={{ xs: 1, sm: 2 }} flexDirection="row" component="div">
              <Box component="div" display="flex" alignItems="flex-start" gap={2}>
                <CheckIcon color="primary" sx={{ display: 'inline' }} />
                <BpTypography
                  fontVariant="secondary"
                  color="grey.600"
                  component="p"
                  fontWeight={400}
                  variant="body2"
                  sx={{ display: 'inline' }}
                >
                  Acerca de la característica
                </BpTypography>
              </Box>
              <Box component="div" display="flex" alignItems="flex-start" gap={2}>
                <CheckIcon color="primary" sx={{ display: 'inline' }} />
                <BpTypography
                  fontVariant="secondary"
                  color="grey.600"
                  component="p"
                  fontWeight={400}
                  variant="body2"
                  sx={{ display: 'inline' }}
                >
                  Acerca de la característica
                </BpTypography>
              </Box>
            </Box>
          </Box>
        </Stack>
      </CardContent>
    </ContainerCard>
  )
}
export default CardInfoProduct
