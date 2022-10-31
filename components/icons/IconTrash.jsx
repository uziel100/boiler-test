import { useTheme } from '@mui/material'
import React from 'react'

function IconTrashRoot({ color = '#939092' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="feather feather-trash-2"
      viewBox="0 0 24 24"
    >
      <path d="M3 6L5 6 21 6" />
      <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />
      <path d="M10 11L10 17" />
      <path d="M14 11L14 17" />
    </svg>
  )
}

const IconTrash = () => {
  const theme = useTheme()

  return <IconTrashRoot color={theme.palette.grey[600]} />
}

export default IconTrash
