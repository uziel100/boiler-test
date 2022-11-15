import { Slide } from '@mui/material'
import { forwardRef } from 'react'

const BpTransitionSlideLeft = forwardRef((props, ref) => (
  <Slide exit in={false} unmountOnExit direction="left" ref={ref} {...props} />
))
export default BpTransitionSlideLeft
