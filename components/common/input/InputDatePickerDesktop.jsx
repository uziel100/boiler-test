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
  onFocus = () => {},
  onChange,
  ...props
}) => (
  <DesktopDatePicker
    value={value}
    onChange={onChange}
    views={views}
    toolbarTitle={toolbarTitle}
    onOpen={() => onFocus()}
    components={{
      OpenPickerIcon: IconDate
    }}
    {...props}
    renderInput={params => (
      <BpTextField
        {...params}
        id={id}
        onFocus={onFocus}
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
