import { useTheme } from '@mui/material'

const IconPlaceLocationRoot = ({ color = '#555555', width = 24, height = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="none" viewBox="0 0 24 24">
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1118 0z"
    />
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 13a3 3 0 100-6 3 3 0 000 6z"
    />
  </svg>
)

const IconPlaceLocation = ({ color = 'grey', variant = '600', width, height }) => {
  const theme = useTheme()

  return <IconPlaceLocationRoot color={theme.palette[color][variant]} width={width} height={height} />
}

export default IconPlaceLocation
