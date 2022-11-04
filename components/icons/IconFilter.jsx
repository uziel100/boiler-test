import { useTheme } from '@mui/material'
import React from 'react'

function Icon({ color = '#939092' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" fill="none" viewBox="0 0 20 18">
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M18.333 1.5H1.667l6.666 7.883v5.45l3.333 1.667V9.383L18.334 1.5z"
      />
    </svg>
  )
}

const IconFilter = () => {
  const theme = useTheme()

  return <Icon color={theme.palette.grey[600]} />
}

export default IconFilter
