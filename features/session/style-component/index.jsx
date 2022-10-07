import { styled, Box, Fab } from '@mui/material'

export const Circle01 = styled(Box)(() => ({
  width: '191px',
  height: '191px',
  background: '#DCD8E8',
  borderRadius: '50%',
  position: 'absolute',
  left: '-92px',
  bottom: '-92px',
  zIndex: 4
}))

export const Circle02 = styled(Box)(() => ({
  width: '285px',
  height: '285px',
  background: '#E7E3EF',
  borderRadius: '50%',
  position: 'absolute',
  left: '-124px',
  bottom: '-124px',
  zIndex: 3
}))

export const Circle03 = styled(Box)(() => ({
  width: '355px',
  height: '355px',
  background: '#EDE9F3',
  borderRadius: '50%',
  position: 'absolute',
  left: '-137px',
  bottom: '-137px',
  zIndex: 2
}))

export const FabSocialMedia = styled(Fab)(({ theme }) => ({
  bgcolor: theme.palette.grey[200],
  height: '52px',
  width: '52px',
  borderRadius: '50%',
  boxShadow: 'none'
}))
