import { CardMedia } from '@mui/material'

const ItemMedia = ({ alt, imgUrl }) => (
  <CardMedia component="img" sx={{ width: 106, height: 106, borderRadius: 1.5 }} image={imgUrl} alt={alt} />
)
export default ItemMedia
