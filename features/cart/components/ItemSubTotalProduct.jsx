import { BpTypography } from 'components/shared'
import { formatMoney } from 'utils'

const ItemSubTotalProduct = ({ total = 0 }) => (
  <BpTypography color="grey.800" variant="body2" fontWeight={400}>
    Total:{' '}
    <BpTypography color="grey.700" component="span" variant="body2" fontWeight={600}>
      {formatMoney(total)}
    </BpTypography>
  </BpTypography>
)
export default ItemSubTotalProduct
