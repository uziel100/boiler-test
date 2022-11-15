import { IconButton } from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'

const ArrowButtonNext = ({ onClick, sx = {} }) => (
  <IconButton
    onClick={onClick}
    disabled={!onClick}
    className="button-next"
    sx={{
      zIndex: 9,
      position: 'absolute',
      height: '40px',
      ...sx
    }}
  >
    <KeyboardArrowRightIcon />
  </IconButton>
)

export default ArrowButtonNext
