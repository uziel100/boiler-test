import { Stack } from '@mui/material'
import ItemMedia from './ItemMedia'
import ItemSubTotalProduct from './ItemSubTotalProduct'
import ItemTitle from './ItemTitle'

const ItemService = ({ product, calculateTotalByProduct, count, handleRemoveOfCart }) => (
  <Stack
    direction="row"
    className="cart-product"
    gap={1}
    sx={{ borderBottom: theme => `1px solid ${theme.palette.grey[300]}`, mt: 1 }}
  >
    <ItemMedia alt={product.name} imgUrl={product.images[0].url} />
    <Stack gap={1}>
      <ItemTitle
        productId={product.id}
        name={product.name}
        description={product.description}
        price={product.price}
        handleRemoveOfCart={handleRemoveOfCart}
      />
      <Stack mb={2} width="100%" direction="row" justifyContent="flex-end" alignItems="center">
        <ItemSubTotalProduct total={calculateTotalByProduct(product.price, count)} />
      </Stack>
    </Stack>
  </Stack>
)
export default ItemService
