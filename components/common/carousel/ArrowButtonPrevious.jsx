import { IconButton } from '@mui/material'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'

const ArrowButtonPrevious = ({ onClick, sx = {} }) => (
  <IconButton
    onClick={onClick}
    disabled={!onClick}
    sx={{
      zIndex: 9,
      position: 'absolute',
      left: {
        xs: 0,
        md: '-4%'
      },
      height: '40px',
      top: '40%',
      // background: '#0000000d',
      ...sx
    }}
  >
    <KeyboardArrowLeftIcon />
  </IconButton>
)

export default ArrowButtonPrevious
