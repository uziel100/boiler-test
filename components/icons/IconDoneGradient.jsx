import * as React from 'react'

const IconDoneGradient = ({ top = '#7D66AD', bottom = '#DD4786', middle = '#EDA2C2', ...props }) => (
  <svg width={24} height={17} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M22.666 1 8 15.667 1.333 9"
      stroke="url(#a)"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient id="a" x1={22.666} y1={1} x2={-0.926} y2={7.631} gradientUnits="userSpaceOnUse">
        <stop stopColor={top} />
        <stop offset={0.503} stopColor={middle} />
        <stop offset={1} stopColor={bottom} />
      </linearGradient>
    </defs>
  </svg>
)

export default IconDoneGradient
