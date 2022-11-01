import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import { IconButton } from '@mui/material'

const ButtonAction = () => (
  <IconButton
    type="submit"
    sx={{
      bgcolor: 'grey.200'
    }}
  >
    <KeyboardArrowRightIcon />
  </IconButton>
)

export default ButtonAction
