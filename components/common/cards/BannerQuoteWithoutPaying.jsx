import { Box } from '@mui/material'
import { BpTypography } from 'components/shared'

const BannerQuoteWithoutPaying = ({ display }) => (
  <Box
    position="relative"
    overflow="hidden"
    mt={3}
    borderRadius={2}
    bgcolor="primary.100"
    padding="16px 12px"
    zIndex={1}
    display={display}
  >
    <BpTypography fontWeight={500} variant="body2" color="grey.800">
      ¿No encuentras lo que buscas?
    </BpTypography>
    <BpTypography sx={{ lineHeight: '20px', mt: 1 }} fontWeight={500} variant="body2" color="grey.700">
      En UEY te ofrecemos la opción de <strong> Cotizar sin pagar</strong>, ¡Ve ahora!
    </BpTypography>
    <Box
      zIndex={-1}
      left="-63px"
      top="36px"
      position="absolute"
      bgcolor="primary.300"
      width="124px"
      height="116px"
      borderRadius="50%"
    />
    <Box
      zIndex={-1}
      right="-55px"
      top="-52px"
      position="absolute"
      bgcolor="primary.300"
      width="124px"
      height="116px"
      borderRadius="50%"
    />
  </Box>
)
export default BannerQuoteWithoutPaying
