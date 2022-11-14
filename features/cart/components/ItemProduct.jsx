import { Stack } from '@mui/material'
import { BpTypography } from 'components/shared'
import { formatMoney } from 'utils'
import ItemControlCounter from './ItemControlCounter'
import ItemMedia from './ItemMedia'
import ItemSubTotalProduct from './ItemSubTotalProduct'
import ItemTitle from './ItemTitle'

const WIDTH_IMG = {
  normal: { width: 110, height: 110 },
  small: { width: 76, height: 76 }
}

const ItemProduct = ({
  product,
  calculateTotalByProduct,
  count,
  handleIncremetDecrementProduct,
  handleRemoveOfCart,
  type = 'normal'
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
    <ItemMedia
      alt={product.name}
      imgUrl={product.imgUrl}
      width={WIDTH_IMG[type].width}
      height={WIDTH_IMG[type].height}
    />
    <Stack width="100%" gap={1} justifyContent="space-between">
      <ItemTitle
        productId={product.id}
        name={product.name}
        description={product.description}
        price={product.price}
        handleRemoveOfCart={handleRemoveOfCart}
        type={type}
      />

      <Stack width="100%" direction="row" justifyContent="space-between" alignItems="center">
        {type === 'normal' && (
          <ItemControlCounter product={product} count={count} handleChange={handleIncremetDecrementProduct} />
        )}
        {type === 'normal' && <ItemSubTotalProduct total={calculateTotalByProduct(product.price, count)} />}
        {type === 'small' && (
          <BpTypography color="grey.700" variant="body2" fontWeight={600}>
            {formatMoney(product.price)}
          </BpTypography>
        )}
        {type === 'small' && (
          <ItemControlCounter product={product} count={count} handleChange={handleIncremetDecrementProduct} />
        )}
      </Stack>
    </Stack>
  </Stack>
)
export default ItemProduct
