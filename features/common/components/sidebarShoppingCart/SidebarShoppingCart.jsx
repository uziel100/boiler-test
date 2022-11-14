import { Box, CardContent, Stack } from '@mui/material'
import { IconShoppingCartBig } from 'components/icons'
import { BpButton, BpTypography } from 'components/shared'
import { ItemProduct, ItemsContainerList } from 'features/cart/components'
import { useShoppingCart } from 'features/cart/hooks'
import { formatMoney } from 'utils'

const SidebarShoppingCart = () => {
  const { calculateSubtotal, calculateTotalByProduct, handleRemoveOfCart, handleStockProduct, products } =
    useShoppingCart()

  return (
    <Box mt={2}>
      <CardContent sx={{ pr: 1 }}>
        <BpTypography sx={{ ml: 4 }} fontWeight={600} color="grey.800" variant="h6">
          Carrito de compras
        </BpTypography>
        {products.length > 0 && (
          <>
            <ItemsContainerList maxHeight="calc(100vh - 230px)">
              {products.map(({ product, count }) => (
                <ItemProduct
                  type="small"
                  key={product.id}
                  product={product}
                  count={count}
                  calculateTotalByProduct={calculateTotalByProduct}
                  handleIncremetDecrementProduct={handleStockProduct}
                  handleRemoveOfCart={handleRemoveOfCart}
                />
              ))}
            </ItemsContainerList>

            <Stack my={2} mr={1} direction="row" justifyContent="flex-end">
              <BpTypography color="grey.800" variant="body1" fontWeight={400}>
                Subtotal: &nbsp;
                <BpTypography color="grey.800" component="span" variant="body1" fontWeight={600}>
                  {formatMoney(calculateSubtotal(products))}
                </BpTypography>
              </BpTypography>
            </Stack>
            <Stack direction="row" gap={2} mr={1} flexWrap="wrap">
              <BpButton variant="contained" color="primary">
                Ir al carrito
              </BpButton>
              <BpButton variant="border">Finalizar Compra</BpButton>
            </Stack>
          </>
        )}
        {products.length === 0 && (
          <Box mt={6} textAlign="center">
            <Box sx={{ position: 'relative', width: 200, margin: '0 auto' }}>
              <IconShoppingCartBig />
              <Box
                sx={{
                  width: 115,
                  height: 115,
                  bgcolor: 'primary.200',
                  borderRadius: '50%',
                  position: 'absolute',
                  left: 50,
                  zIndex: -1,
                  top: -5
                }}
              />
            </Box>
            <BpTypography sx={{ mt: 2 }} fontWeight={500} color="grey.700" variant="body1">
              Tu carrito de compras está vacío
            </BpTypography>
            <BpTypography sx={{ mt: 1 }} fontWeight={500} color="grey.700" variant="body1">
              ¡Haz tu primera compra!
            </BpTypography>
          </Box>
        )}
      </CardContent>
    </Box>
  )
}
export default SidebarShoppingCart
