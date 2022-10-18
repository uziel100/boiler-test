import { Box, Skeleton, Stack } from '@mui/material'

const SkeletonProductSmall = () => (
  <Box>
    <Skeleton
      sx={{
        borderRadius: '1rem 1rem 0 0'
      }}
      variant="rectangular"
      width="100%"
      height={140}
    />
    <Skeleton height={40} />
    <Stack direction="row" gap={2}>
      <Skeleton width="70%" height={30} />
      <Skeleton width="30%" height={30} />
    </Stack>
  </Box>
)
export default SkeletonProductSmall
