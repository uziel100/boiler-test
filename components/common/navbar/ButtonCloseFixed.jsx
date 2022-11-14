import { ButtonBase } from '@mui/material'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'

const POSITION = {
  left: { xs: 280, sm: 320, md: 328 },
  right: { xs: 290, sm: 400, md: 328 }
}

const ButtonCloseFixed = ({ onClose, direction = 'left' }) => (
  <ButtonBase
    sx={{
      position: 'fixed',
      top: 30,
      [direction]: POSITION[direction],
      zIndex: 9999,
      width: '42px',
      height: '42px',
      borderRadius: '50%',
      bgcolor: '#fff',
      border: theme => `7px solid ${theme.palette.primary.main}`
    }}
    onClick={onClose}
  >
    {direction === 'left' && <KeyboardArrowLeftIcon color="primary" />}
    {direction === 'right' && <KeyboardArrowRightIcon color="primary" />}
  </ButtonBase>
)
export default ButtonCloseFixed
