import { IconButton, Skeleton } from '@mui/material'

const SkeletonUserNav = () => (
  <IconButton>
    <Skeleton variant="circular" width={24} height={24} sx={{ mr: 1 }} />
    <Skeleton variant="rectangular" width={100} height={20} />
  </IconButton>
)

export default SkeletonUserNav
