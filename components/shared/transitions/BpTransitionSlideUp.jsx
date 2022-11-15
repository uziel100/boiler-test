import { Slide } from '@mui/material'
import { forwardRef } from 'react'

const BpTransitionSlideUp = forwardRef((props, ref) => (
  <Slide exit in={false} unmountOnExit direction="up" ref={ref} {...props} />
))
export default BpTransitionSlideUp
