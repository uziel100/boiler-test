import { IconButton } from '@mui/material'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'

const ArrowButtonPrevious = ({ onClick, sx = {} }) => (
  <IconButton
    disableRipple
    onClick={onClick}
    disabled={!onClick}
    className="button-prev"
    sx={{
      zIndex: 9,
      position: 'absolute',
      left: {
        xs: 0,
        md: '-4%'
      },
      top: '40%',
      background: '#0000000d',
      ...sx
    }}
  >
    <KeyboardArrowLeftIcon />
  </IconButton>
)

export default ArrowButtonPrevious
