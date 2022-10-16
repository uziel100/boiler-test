/* eslint-disable @next/next/no-img-element */
/* eslint-disable max-len */
import { Box, Card, CardContent, Stack, styled } from '@mui/material'
import { StainCategory } from 'components/images'
import { BpTypography } from 'components/shared'
import Image from 'next/image'

const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  borderRadius: theme.spacing(1.5),
  maxHeight: theme.spacing(33),
  minHeight: theme.spacing(33),
  boxShadow:
    '27px 35px 18px rgba(84, 84, 84, 0.01), 15px 19px 15px rgba(84, 84, 84, 0.03), 7px 9px 11px rgba(84, 84, 84, 0.05), 2px 2px 6px rgba(84, 84, 84, 0.06), 0px 0px 0px rgba(84, 84, 84, 0.06)',
  bgcolor: 'background.paper',
  position: 'relative',
  padding: theme.spacing(2),
  cursor: 'pointer',
  transition: 'transform 100ms ease',
  ':hover': {
    transform: 'scale(1.03)',
    '.MuiCardContent-root h6': {
      textDecoration: 'underline'
    }
  },
  ':hover svg path': {}
}))

const CardCategory = ({ title = '', imgUrl }) => (
  <StyledCard>
    <CardContent sx={{ zIndex: 1, width: '100%' }}>
      <Stack
        position="relative"
        height="100%"
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        gap={2}
      >
        <Box sx={{ zIndex: 1 }}>
          <Image src={imgUrl} alt={`Categoria ${title}`} width={110} height={105} />
        </Box>
        <Box
          component="span"
          sx={{
            position: 'absolute',
            zIndex: 0,
            bottom: 60
          }}
        >
          <StainCategory />
        </Box>
        <BpTypography
          textAlign="center"
          fontVariant="primary"
          variant="h6"
          fontWeight={500}
          label={title}
          color="grey.700"
        />
      </Stack>
    </CardContent>

    {/* </Slide> */}
    {/* <Slide direction="up" in={checked} mountOnEnter unmountOnExit timeout={500}>
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
      </Slide> */}
  </StyledCard>
)
export default CardCategory
