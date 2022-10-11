import { styled, TextField } from '@mui/material'

const StyledTextField = styled(TextField)(() => ({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      // borderInput
      borderRadius: '4px'
    }
  }
}))

const CpTextField = ({
  name,
  variant = 'outlined',
  placeholder = '',
  className = '',
  label = '',
  disabled = false,
  fullWidth = true,
  children,
  color = "primary",
  value,
  ...rest
}) => (
  <StyledTextField
    name={name}
    label={label}
    variant={variant}
    color={color}
    placeholder={placeholder}
    className={`${className}`}
    disabled={disabled}
    fullWidth={fullWidth}
    value={value}
    {...rest}
  >
    {children && children}
  </StyledTextField>
)

export default CpTextField
