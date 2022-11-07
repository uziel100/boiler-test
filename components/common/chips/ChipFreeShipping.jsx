import { Stack } from '@mui/material'
import { IconCartDelivery } from 'components/icons'
import { BpTypography } from 'components/shared'

const ChipFreeShipping = () => (
  <Stack direction="row" alignItems="center" gap={1} bgcolor="grey.100" borderRadius={4} padding="4px 8px">
    <IconCartDelivery />
    <BpTypography color="grey.700" fontWeight={400} sx={{ fontSize: '10px' }}>
      ¡Envío gratis!
    </BpTypography>
  </Stack>
)
export default ChipFreeShipping
