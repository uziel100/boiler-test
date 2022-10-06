import { useState } from 'react'
import { BpTextField } from 'components/shared/Input'
import { IconButton } from '@mui/material'
import { IconEye, IconEyeOff } from 'components/icons'

const InputPassword = ({ ...props }) => {
  const [hidden, setHidden] = useState(true)

  return (
    <BpTextField
      type={hidden ? 'password' : 'text'}
      InputProps={{
        endAdornment: (
          <IconButton onClick={() => setHidden(val => !val)}>{hidden ? <IconEyeOff /> : <IconEye />}</IconButton>
        )
      }}
      {...props}
    />
  )
}
export default InputPassword
