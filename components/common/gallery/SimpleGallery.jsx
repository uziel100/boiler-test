/* eslint-disable react/no-array-index-key */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'
import { Box, Button } from '@mui/material'

export default function SimpleGallery({ galleryID, images, onCurrentImage, currentImage }) {
  // useEffect(() => {
  //   let lightbox = new PhotoSwipeLightbox({
  //     gallery: `#${galleryID}`,
  //     children: 'a',
  //     pswpModule: () => import('photoswipe')
  //   })
  //   lightbox.init()

  //   return () => {
  //     lightbox.destroy()
  //     lightbox = null
  //   }
  // }, [])

  return (
    // <Box display="flex" flexDirection="column" className="pswp-gallery" id={galleryID}>
    //   {images.map((image, index) => (
    //     <a
    //       href={image.largeURL}
    //       data-pswp-width={image.width}
    //       data-pswp-height={image.height}
    //       key={`${galleryID}-${index}`}
    //       target="_blank"
    //       style={{ position: 'relative' }}
    //       rel="noreferrer"
    //     >
    //       <Image width={68} height={68} src={image.thumbnailURL} alt="" />
    //     </a>
    //   ))}
    // </Box>
    <Box gap={1} display="flex" flexDirection="column" width={60} className="pswp-gallery">
      {images.map((image, index) => (
        <Button
          key={`${galleryID}-${index}`}
          sx={{
            borderRadius: 2,
            padding: 0,
            bgcolor: 'grey.200',
            overflow: 'hidden',
            width: '100%',
            height: '60px',
            border: currentImage === image.largeURL ? theme => `1px solid ${theme.palette.primary.main}` : 'none',
            cursor: 'pointer'
          }}
          onClick={() => onCurrentImage(image)}
        >
          <Image objectFit="cover" width={64} height={64} src={image.thumbnailURL} alt="Imagen galey" />
        </Button>
      ))}
    </Box>
  )
}
