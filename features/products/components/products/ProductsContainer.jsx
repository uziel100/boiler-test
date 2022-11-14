import { Box } from '@mui/material'
import { BpTypography } from 'components/shared'
import { EMPTY_RESULT } from 'const/products'
import Image from 'next/image'

const ProductsContainer = ({ products = undefined, children }) => {
  const loading = !products
  const items = products || []

  if (!loading && items?.length === 0) {
    return (
      <Box my={5} textAlign="center">
        <Image
          style={{ textAlign: 'center' }}
          src={EMPTY_RESULT}
          width={270}
          height={190}
          alt="No se encontraron resultados"
        />
        <br />
        <BpTypography sx={{ mt: 4 }} fontWeight={400} variant="body1" color="grey.700">
          No se han encontrado resultados
        </BpTypography>
      </Box>
    )
  }
  return (
    <Box
      sx={{
        display: 'grid',
        width: '100%',
        gridTemplateColumns: {
          xs: '1fr 1fr',
          md: `repeat(auto-fit, minmax(220px, ${items.length > 2 ? '1fr' : '300px'}))`
        },
        gap: {
          xs: 2,
          sm: 2,
          md: 3
        }
      }}
    >
      {children({ loading, items })}
    </Box>
  )
}
export default ProductsContainer
