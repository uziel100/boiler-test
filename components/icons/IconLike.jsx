/* eslint-disable max-len */
import { useTheme } from '@emotion/react'
import React from 'react'

function Icon({ color = '#939092' }) {
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
      className="feather feather-thumbs-up"
      viewBox="0 0 24 24"
    >
      <path d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3zM7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3" />
    </svg>
  )
}

const IconLike = ({ color = undefined }) => {
  const theme = useTheme()
  let customColor = theme.palette.grey[600]
  if (color === 'primary') {
    customColor = theme.palette.primary.main
  }

  return <Icon color={customColor} />
}

export default IconLike
