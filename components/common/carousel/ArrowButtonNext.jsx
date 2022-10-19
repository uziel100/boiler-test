import { IconButton } from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'

const ArrowButtonNext = ({ onClick, sx = {} }) => (
  <IconButton
    disableRipple
    onClick={onClick}
    disabled={!onClick}
    className="button-next"
    sx={{
      zIndex: 9,
      position: 'absolute',
      right: {
        xs: 0,
        md: '-2%'
      },
      top: '40%',
      background: '#0000000d',
      ...sx
    }}
  >
    <KeyboardArrowRightIcon />
  </IconButton>
)

export default ArrowButtonNext
