import { Stack } from '@mui/material'
import ItemControlCounter from './ItemControlCounter'
import ItemMedia from './ItemMedia'
import ItemSubTotalProduct from './ItemSubTotalProduct'
import ItemTitle from './ItemTitle'

const ItemProduct = ({
  product,
  calculateTotalByProduct,
  count,
  handleIncremetDecrementProduct,
  handleRemoveOfCart
}) => (
  <Stack
    direction="row"
    className="cart-product"
    justifyContent="flex-start"
    gap={2}
    sx={{
      borderBottom: theme => `1px solid ${theme.palette.grey[300]}`,
      mt: 1,
      pb: 0.4
    }}
  >
    <ItemMedia alt={product.name} imgUrl={product.imgUrl} />
    <Stack width="100%" gap={1} justifyContent="space-between">
      <ItemTitle
        productId={product.id}
        name={product.name}
        description={product.description}
        price={product.price}
        handleRemoveOfCart={handleRemoveOfCart}
      />
      <Stack sx={{}} width="100%" direction="row" justifyContent="space-between" alignItems="center">
        <ItemControlCounter product={product} count={count} handleChange={handleIncremetDecrementProduct} />
        <ItemSubTotalProduct total={calculateTotalByProduct(product.price, count)} />
      </Stack>
    </Stack>
  </Stack>
)
export default ItemProduct
