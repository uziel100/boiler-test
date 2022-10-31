import { Box } from '@mui/material'
import { CardProductNomal } from 'components/common'
import { useShoppingCart } from 'features/cart/hooks'
import { useError } from 'hooks'
import React from 'react'

const repeatSkeleton = (num, component) => {
  const items = new Array(num).fill(0);


  return items.map(() => component )
}

const ProductsContainer = ({ products = undefined, children }) => {
  // const { handleStockProduct } = useShoppingCart()
  // const { showAlert } = useError()

  const loading = !products;
  const items = products || [];

  // const handleAddToCart = (product, count) => {
  //   handleStockProduct(product, count)
  //   showAlert(`Producto añadido a tu cesta`, 'success')
  // }

  return (
    <Box
      sx={{
        display: 'grid',
        width: '100%',
        gridTemplateColumns: {
          xs: '1fr 1fr',
          md: 'repeat(auto-fit, minmax(220px, 1fr))'
        },
        gap: {
          xs: 2,
          sm: 2,
          md: 3
        }
      }}
    >
        { children({ loading, items }) }
    </Box>
  )
}
export default ProductsContainer
