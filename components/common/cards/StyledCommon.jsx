/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
import { Card, styled } from '@mui/material'

export const StyledCard = styled(Card)(() => ({
  // maxWidth: '200px',
  borderRadius: '12px',
  height: 'auto',
  transition: 'all 300ms ease',
  ':hover': {
    transform: 'scale(1.03)'
  },
  boxShadow: '0px 1px 20px rgba(0, 0, 0, 0.07)'
  // filter:
  //   'drop-shadow(27px 35px 18px rgba(84, 84, 84, 0.01)) drop-shadow(15px 19px 15px rgba(84, 84, 84, 0.03)) drop-shadow(7px 9px 11px rgba(84, 84, 84, 0.05)) drop-shadow(2px 2px 6px rgba(84, 84, 84, 0.06)) drop-shadow(0px 0px 0px rgba(84, 84, 84, 0.06))'
}))
