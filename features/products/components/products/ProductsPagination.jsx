import { Pagination, Stack } from '@mui/material'
import { BpTypography } from 'components/shared'

const ProductsPagination = ({ count }) => (
  <Stack
    direction="row"
    justifyContent="space-between"
    mt={3}
    sx={{ boxShadow: '0px 1px 20px rgba(0, 0, 0, 0.07)', borderRadius: '8px', py: 3, px: 2 }}
  >
    <BpTypography variant="body1" fontWeight={400} color="grey.700">
      ¿No encuentras lo que buscas?
      <BpTypography component="span" variant="body1" fontWeight={600} color="grey.700">
        {` Cotiza con nosotros`}
      </BpTypography>
    </BpTypography>
    <Pagination count={count} shape="rounded" color="primary" />
  </Stack>
)
export default ProductsPagination
