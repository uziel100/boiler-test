import { styled, Box, Fab } from '@mui/material'

export const Circle01 = styled(Box)(({ theme }) => ({
  width: '62px',
  height: '65px',
  background: theme.palette.primary[400],
  borderRadius: '50%',
  position: 'absolute',
  left: '48px',
  bottom: '68px',
  zIndex: 4
}))

export const Circle02 = styled(Box)(({ theme }) => ({
  width: '32px',
  height: '34px',
  background: theme.palette.primary[100],
  borderRadius: '50%',
  position: 'absolute',
  left: '-14px',
  bottom: '73px',
  zIndex: 4
}))

export const Circle03 = styled(Box)(({ theme }) => ({
  width: '48px',
  height: '50px',
  background: theme.palette.primary[100],
  borderRadius: '50%',
  position: 'absolute',
  left: '44px',
  bottom: '-17px',
  zIndex: 4
}))

export const FabSocialMedia = styled(Fab)(({ theme }) => ({
  bgcolor: theme.palette.grey[200],
  height: '52px',
  width: '52px',
  borderRadius: '50%',
  boxShadow: 'none'
}))
