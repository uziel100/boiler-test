/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { Box, CardContent, Menu, Stack } from '@mui/material'
import { BpButton, BpTypography } from 'components/shared'
import { IconShoppingCartBig } from 'components/icons'
import { formatMoney } from 'utils'
import ItemsContainerList from './ItemsContainerList'
import ItemProduct from './ItemProduct'
import { useShoppingCart } from '../hooks'

const MenuShoppingCart = ({ anchorEl, setAnchorEl }) => {
  const { calculateSubtotal, calculateTotalByProduct, handleRemoveOfCart, handleStockProduct, products } =
    useShoppingCart()

  const open = Boolean(anchorEl)

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Menu
      anchorEl={anchorEl}
      id="account-menu"
      open={open}
      onClose={handleClose}
      PaperProps={{
        elevation: 0,
        sx: {
          width: '490px',
          maxHeight: 'auto',
          overflow: 'visible',
          borderRadius: '12px',
          filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.1))',
          mt: 1.5,
          '& .MuiAvatar-root': {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1
          },
          '&:before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: 'background.paper',
            transform: 'translateY(-50%) rotate(45deg)',
            zIndex: 0
          }
        }
      }}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      {products.length > 0 && (
        <CardContent sx={{ pr: 1 }}>
          <BpTypography fontWeight={500} color="grey.800" variant="body2">
            Carrito de compras
          </BpTypography>
          <ItemsContainerList>
            {products.map(({ product, count }) => (
              <ItemProduct
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
          <Stack direction="row" gap={2} mr={1}>
            <BpButton variant="border">Finalizar Compra</BpButton>
            <BpButton variant="contained" color="primary">
              Ir al carrito
            </BpButton>
          </Stack>
        </CardContent>
      )}

      {products.length === 0 && (
        <CardContent sx={{ textAlign: 'center' }}>
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
        </CardContent>
      )}
    </Menu>
  )
}
export default MenuShoppingCart
