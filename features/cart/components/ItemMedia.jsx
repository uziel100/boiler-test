import { Box } from '@mui/material'
import Image from 'next/image'

const ItemMedia = ({ alt, imgUrl, width = 106, height = 106 }) => (
  <Box width={width} height={height}>
    <Image
      style={{ borderRadius: '10px' }}
      width={width}
      height={height}
      layout="fixed"
      src={imgUrl}
      alt={alt}
      objectFit="cover"
    />
  </Box>
)
export default ItemMedia
