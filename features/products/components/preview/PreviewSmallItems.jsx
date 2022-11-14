import { Box, Button } from '@mui/material'
import { DEFAULT_BLUR_IMG_XS } from 'const/products'
import Image from 'next/image'

// eslint-disable-next-line arrow-body-style
const PreviewSmallItems = ({ images, currentImage, onCurrentImage }) => {
  return (
    <Box gap={1} display="flex" flexDirection="column" width={60} className="pswp-gallery">
      {images.map(image => (
        <Button
          key={image.thumbnailURL}
          sx={{
            borderRadius: 2,
            padding: 0,
            bgcolor: 'grey.200',
            overflow: 'hidden',
            width: '100%',
            height: '60px',
            border:
              currentImage.thumbnailURL === image.thumbnailURL
                ? theme => `1px solid ${theme.palette.primary.main}`
                : 'none',
            cursor: 'pointer'
          }}
          onClick={() => onCurrentImage(image)}
        >
          <Image
            placeholder="blur"
            blurDataURL={DEFAULT_BLUR_IMG_XS}
            objectFit="cover"
            width={64}
            height={64}
            src={image.thumbnailURL}
            alt="Imagen galey"
          />
        </Button>
      ))}
    </Box>
  )
}

export default PreviewSmallItems
