import { ButtonBase } from '@mui/material'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'

const ButtonCloseFixed = ({ onClose }) => (
  <ButtonBase
    sx={{
      position: 'fixed',
      top: 30,
      left: { xs: 280, sm: 320, md: 328 },
      zIndex: 99999,
      width: '42px',
      height: '42px',
      borderRadius: '50%',
      bgcolor: '#fff',
      border: theme => `7px solid ${theme.palette.primary.main}`
    }}
    onClick={onClose}
  >
    <KeyboardArrowLeftIcon color="primary" />
  </ButtonBase>
)
export default ButtonCloseFixed
