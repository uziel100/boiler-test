import { Box, IconButton, Stack } from '@mui/material'
import { BpTypography } from 'components/shared'
import { IconTrash } from 'components/icons'
import { formatMoney } from 'utils'

const ItemTitle = ({ name, description, productId, price = 0, handleRemoveOfCart }) => (
  <Box width="100%">
    <Stack width="100%" direction="row" justifyContent="space-between" alignItems="flex-start" gap={1}>
      <Box maxWidth="18rem">
        <BpTypography color="grey.800" variant="body2" fontWeight={500} noWrap>
          {name}
        </BpTypography>
        <BpTypography color="grey.600" sx={{ display: 'block' }} variant="caption" fontWeight={300} noWrap>
          {description}
        </BpTypography>
      </Box>
      <Box sx={{ mt: -1 }}>
        <IconButton onClick={() => handleRemoveOfCart(productId)}>
          <IconTrash />
        </IconButton>
      </Box>
    </Stack>
    <Box>
      <BpTypography color="grey.700" variant="body2" fontWeight={600}>
        {formatMoney(price)}
      </BpTypography>
    </Box>
  </Box>
)
export default ItemTitle
