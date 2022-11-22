import { Radio } from '@mui/material'
import Check from '@mui/icons-material/TaskAlt'

// eslint-disable-next-line arrow-body-style
const InputRadio = ({ ...rest }) => {
  return <Radio {...rest} checkedIcon={<Check />} />
}
export default InputRadio
