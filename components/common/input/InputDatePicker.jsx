import { InputAdornment } from '@mui/material'
import { MobileDatePicker } from '@mui/x-date-pickers'
import IconDate from 'components/icons/IconDate'
import { BpTextField } from 'components/shared'

const InputDatePicker = ({ value, helperText, id, name, error, onChange, ...props }) => (
  <MobileDatePicker
    value={value}
    onChange={onChange}
    {...props}
    renderInput={params => (
      <BpTextField
        {...params}
        id={id}
        name={name}
        helperText={helperText}
        error={error}
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
