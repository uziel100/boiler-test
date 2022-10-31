import { Stack } from '@mui/material'

const ItemsContainerList = ({ children }) => (
  <Stack
    sx={{
      maxHeight: '380px',
      // background: 'red',
      // paddingRight: '6rem',
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
