import { InputAdornment } from '@mui/material'
import { MobileDatePicker } from '@mui/x-date-pickers'
import IconDate from 'components/icons/IconDate'
import { BpTextField } from 'components/shared'

const InputDatePicker = ({
  value,
  helperText,
  id,
  name,
  toolbarTitle = 'Selecciona fecha',
  error,
  onChange,
  ...props
}) => (
  <MobileDatePicker
    value={value}
    onChange={onChange}
    toolbarTitle={toolbarTitle}
    {...props}
    renderInput={params => (
      <BpTextField
        {...params}
        id={id}
        name={name}
        helperText={helperText}
        error={error}
        color="secondary"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconDate />
            </InputAdornment>
          )
        }}
        placeholder="DD/MM/YYYY"
      />
    )}
  />
)
export default InputDatePicker
