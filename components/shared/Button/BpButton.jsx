import React from 'react'
import LoadingButton from '@mui/lab/LoadingButton'
import CircularProgress from '@mui/material/CircularProgress'
import { styled } from '@mui/material/styles'
import { motion } from 'framer-motion'

const ButtonStyled = styled(LoadingButton, {
  shouldForwardProp: prop => prop !== 'isUppercase'
})(({ isUppercase }) => ({
  borderRadius: '24px',
  height: '2.5rem',
  textTransform: isUppercase ? 'uppercase' : 'inherit'
}))

const buttonVariants = {
  tap: {
    scale: 1.1,
    transition: {
      duration: 0.3
    }
  }
}

const BpButton = ({
  children,
  color = 'primary',
  loading = false,
  fullWidth = true,
  variant = 'contained',
  isUppercase = false,
  disableElevation = true,
  disabled = false,
  ...props
}) => (
  <ButtonStyled
    component={motion.button}
    variants={buttonVariants}
    whileTap="tap"
    disableElevation={disableElevation}
    color={color}
    loading={loading}
    fullWidth={fullWidth}
    variant={variant}
    isUppercase={isUppercase}
    disabled={disabled}
    loadingIndicator={<CircularProgress color="inherit" size={16} />}
    {...props}
  >
    {children}
  </ButtonStyled>
)

export default BpButton
