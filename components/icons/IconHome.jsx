import { useTheme } from '@mui/material'

const IconHomeRoot = ({ color = '#555555', width = 24, height = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="none" viewBox="0 0 24 24">
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
    />
    <path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 22V12h6v10" />
  </svg>
)

const IconHome = ({ color = 'grey', variant = '600', width, height }) => {
  const theme = useTheme()

  return <IconHomeRoot color={theme.palette[color][variant]} width={width} height={height} />
}

export default IconHome
