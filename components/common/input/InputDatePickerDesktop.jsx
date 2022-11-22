import { DesktopDatePicker } from '@mui/x-date-pickers'
import IconDate from 'components/icons/IconDate'
import { BpTextField } from 'components/shared'

const InputDatePickerDesktop = ({
  value,
  helperText,
  id,
  name,
  toolbarTitle = 'Selecciona fecha',
  views = ['year', 'day', 'month'],
  placeholder,
  error,
  onChange,
  ...props
}) => (
  <DesktopDatePicker
    value={value}
    onChange={onChange}
    views={views}
    toolbarTitle={toolbarTitle}
    components={{
      OpenPickerIcon: IconDate
    }}
    {...props}
    renderInput={params => (
      <BpTextField
        {...params}
        id={id}
        name={name}
        helperText={helperText}
        placeholder={placeholder}
        error={error}
        color="primary"
      />
    )}
  />
)
export default InputDatePickerDesktop
