import { useTheme } from '@mui/material'

const IconSearchRoot = ({ color = '#555555', width = 20, height = 20 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx={11} cy={11} r={8} />
    <path d="m21 21-4.35-4.35" />
  </svg>
)

const IconSearch = ({ color = 'grey', variant = '600', width, height }) => {
  const theme = useTheme()

  return <IconSearchRoot color={theme.palette[color][variant]} width={width} height={height} />
}

export default IconSearch
