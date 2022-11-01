/* eslint-disable react/no-array-index-key */
import { Skeleton, Stack } from '@mui/material'

const SkeletonCategoryProductHistory = () => (
  <Stack direction="row" gap={1} alignItems="center">
    <Skeleton variant="circular" height={30} width={30} />
    <Skeleton height={40} width={120} />
  </Stack>
)

export default SkeletonCategoryProductHistory
