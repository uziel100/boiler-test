import { Box, Card, CardContent, Slide, Stack, Button, styled } from '@mui/material'
import { BpTypography } from 'components/shared'
import { useState } from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { IconLogoUey } from 'components/icons'

const StyledCard = styled(Card)(() => ({
  display: 'flex',
  borderRadius: '1rem',
  maxHeight: '175px',
  minHeight: '175px',
  boxShadow: '0px 0.619186px 12.3837px rgba(0, 0, 0, 0.07)',
  bgcolor: 'background.paper',
  position: 'relative',
  padding: '1rem'
}))

const StyledCircleContainer = styled(Box, {
  shouldForwardProp: prop => prop !== 'size'
})(({ theme, size }) => ({
  minWidth: size === 'big' ? '7rem' : '4.2rem',
  width: size === 'big' ? '7rem' : '4.2rem',
  height: size === 'big' ? '7rem' : '4.2rem',
  borderRadius: size === 'big' ? '7rem' : '4.2rem',
  background: theme.palette.primary[50],
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}))

const CardCategory = ({ title = '', description = '' }) => {
  const [checked, setChecked] = useState(false)

  return (
    <StyledCard onMouseOver={() => setChecked(true)} onMouseLeave={() => setChecked(false)}>
      <Slide direction="up" in={!checked} timeout={400}>
        <CardContent sx={{ zIndex: 1, display: !checked ? 'block' : 'none', width: '100%' }}>
          <Stack direction="row" alignItems="center" gap={2}>
            <StyledCircleContainer size="big">
              <IconLogoUey width={70} height={70} />
            </StyledCircleContainer>
            <BpTypography fontVariant="primary" variant="h6" fontWeight={600} label={title} color="grey.800" />
          </Stack>
        </CardContent>
      </Slide>
      <Slide direction="up" in={checked} mountOnEnter unmountOnExit timeout={500}>
        <CardContent sx={{ display: checked ? 'block' : 'none', zIndex: 2, width: '100%' }}>
          <Stack direction="row" alignItems="flex-start" justifyContent="flex-start" gap={3}>
            <StyledCircleContainer size="small">
              <IconLogoUey width={50} priority={false} height={70} />
            </StyledCircleContainer>
            <Box>
              <BpTypography fontVariant="primary" variant="h6" fontWeight={600} label={title} color="grey.800" />
              <BpTypography variant="body2">{description}</BpTypography>
              <Button variant="text" color="inherit" endIcon={<ArrowForwardIcon color="primary" />} sx={{ mt: 1 }}>
                Ver productos
              </Button>
            </Box>
          </Stack>
        </CardContent>
      </Slide>
    </StyledCard>
  )
}
export default CardCategory
