/* eslint-disable max-len */
import React from 'react'

import { useTheme } from '@mui/material'

function IconDocumentRoot({ color = '#6A50FC' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 28 28">
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M18.667 4.668H21a2.333 2.333 0 012.334 2.333v16.334A2.333 2.333 0 0121 25.668H7a2.334 2.334 0 01-2.333-2.333V7A2.333 2.333 0 017 4.668h2.334"
      />
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17.5 2.332h-7c-.645 0-1.167.522-1.167 1.167v2.333c0 .644.522 1.167 1.167 1.167h7c.644 0 1.166-.523 1.166-1.167V3.499c0-.645-.522-1.167-1.166-1.167z"
      />
    </svg>
  )
}

const IconDocument = ({ color = null }) => {
  const theme = useTheme()

  return <IconDocumentRoot color={color || theme.palette.primary.main} />
}

export default IconDocument
