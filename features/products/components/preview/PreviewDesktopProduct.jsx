import { Box } from '@mui/material'
import { DEFAULT_BLUR_IMG_SM } from 'const/products'
import Image from 'next/image'
import { useState } from 'react'
import PreviewSmallItems from './PreviewSmallItems'

// eslint-disable-next-line arrow-body-style
const PreviewDesktopProduct = ({ containerId, images }) => {
  const [currentImage, setCurrentImage] = useState(images[0])

  return (
    <Box display="flex" flexDirection="row" gap={4}>
      <PreviewSmallItems images={images} currentImage={currentImage} onCurrentImage={item => setCurrentImage(item)} />
      <Box
        sx={{
          minWidth: '0px',
          maxWidth: '690px',
          bgcolor: 'grey.200',
          borderRadius: '12px'
        }}
        id={containerId}
        className="pswp-gallery"
      >
        {images.map(image =>
          image.largeURL === currentImage.largeURL ? (
            <a
              key={image.largeURL}
              href={currentImage.largeURL}
              data-pswp-width={image.width}
              data-pswp-height={image.height}
              target="_blank"
              style={{ position: 'relative' }}
              rel="noreferrer"
            >
              <Image
                placeholder="blur"
                blurDataURL={DEFAULT_BLUR_IMG_SM}
                width={690}
                objectFit="cover"
                height={646}
                src={currentImage.largeURL}
                style={{ borderRadius: '12px' }}
              />
            </a>
          ) : (
            <a
              key={image.largeURL}
              href={image.largeURL}
              data-pswp-width={image.width}
              data-pswp-height={image.height}
              target="_blank"
              style={{ position: 'relative' }}
              rel="noreferrer"
            >
              {' '}
            </a>
          )
        )}
      </Box>
    </Box>
  )
}
export default PreviewDesktopProduct
