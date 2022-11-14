import { Stack } from '@mui/material'

const ItemsContainerList = ({ children, maxHeight = '380px' }) => (
  <Stack
    sx={{
      minHeight: maxHeight,
      maxHeight,
      overflow: 'scroll',
      '& > .cart-product:last-child': {
        borderBottom: 'none'
      }
    }}
    gap={1}
    mt={2}
  >
    {children}
  </Stack>
)
export default ItemsContainerList
