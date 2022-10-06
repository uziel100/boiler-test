import SendIcon from '@mui/icons-material/Send'
import { BpButton } from 'components/shared/Button'

const ButtonNext = ({ fullWidth }) => (
  <BpButton endIcon={<SendIcon />} fullWidth={fullWidth}>
    Next
  </BpButton>
)
export default ButtonNext
