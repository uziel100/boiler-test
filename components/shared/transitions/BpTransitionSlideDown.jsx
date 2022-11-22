import { Fade, Grow, Slide, Zoom } from '@mui/material'
import { forwardRef } from 'react'

const BpTransitionSlideDown = forwardRef((props, ref) => (
  <Slide exit in={false} unmountOnExit direction="down" ref={ref} {...props} />
))
export default BpTransitionSlideDown
