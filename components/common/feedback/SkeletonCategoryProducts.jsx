/* eslint-disable react/no-array-index-key */
import { Box, Skeleton } from '@mui/material'

const skeletonItems = [
  { height: 30, width: '100%' },
  { height: 30, width: '90%' },
  { height: 30, width: '30%' },
  { height: 30, width: '40%' },
  { height: 30, width: '60%' },
  { height: 30, width: '35%' },
  { height: 30, width: '30%' },
  { height: 30, width: '80%' },
  { height: 30, width: '20%' },
  { height: 30, width: '40%' },
  { height: 30, width: '50%' },
  { height: 30, width: '35%' },
  { height: 30, width: '60%' }
]

const SkeletonCategoryProducts = () => (
  <Box mt={1}>
    {skeletonItems.map((item, idx) => (
      <Skeleton key={idx} height={item.height} width={item.width} />
    ))}
  </Box>
)

export default SkeletonCategoryProducts
