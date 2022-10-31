import { Box, Skeleton, Stack } from '@mui/material'

const SkeletonProductNormal = () => (
  <Box>
    <Skeleton
      sx={{
        borderRadius: '1rem 1rem 0 0'
      }}
      variant="rectangular"
      width="100%"
      height={180}
    />
    <Skeleton height={50} />
    <Stack direction="row" gap={2}>
      <Skeleton width="70%" height={40} />
      <Skeleton width="30%" height={40} />
    </Stack>
  </Box>
)
export default SkeletonProductNormal
