import Typography from '@mui/material/Typography'

const FONT_FAMILY_VARIANT = {
  primary: 'Poppins',
  secondary: 'Nunito'
}

const BpTypography = ({
  variant = 'p',
  label = '',
  isUpperCase = false,
  className,
  children,
  color = '#555',
  sx = {},
  fontVariant = 'primary',
  fontWeight,
  textAlign = 'inherit',
  ...props
}) => (
  <Typography
    color="initial"
    variant={variant}
    fontWeight={fontWeight}
    sx={{
      color,
      fontFamily: FONT_FAMILY_VARIANT[fontVariant],
      textAlign,
      ...sx
    }}
    {...props}
  >
    {isUpperCase && label.toUpperCase()}
    {!isUpperCase && label}
    {children && children}
  </Typography>
)
export default BpTypography
