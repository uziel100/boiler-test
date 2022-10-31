/* eslint-disable max-len */

import { useTheme } from '@mui/material'

const Icon = ({ color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 12 12">
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 1.5H.5V8H8V1.5zM8 4h2l1.5 1.5V8H8V4zM2.75 10.5a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zM9.25 10.5a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z"
    />
  </svg>
)

const IconCartDelivery = () => {
  const theme = useTheme()

  return <Icon color={theme.palette.primary.main} />
}

export default IconCartDelivery
