/* eslint-disable max-len */
import { Box, Card, CardActionArea, CardActions, CardContent, CardMedia, Stack } from '@mui/material'
import { BpTypography } from 'components/shared'
import StarRoundedIcon from '@mui/icons-material/StarRounded'

const CardProductNomal = ({ title, price, rating = 0 }) => (
  <Card
    sx={{
      maxWidth: '190px',
      borderRadius: '12px',
      height: '215px',
      transition: 'all 300ms ease',
      ':hover': {
        transform: 'scale(1.06)'
      },
      filter:
        'drop-shadow(27px 35px 18px rgba(84, 84, 84, 0.01)) drop-shadow(15px 19px 15px rgba(84, 84, 84, 0.03)) drop-shadow(7px 9px 11px rgba(84, 84, 84, 0.05)) drop-shadow(2px 2px 6px rgba(84, 84, 84, 0.06)) drop-shadow(0px 0px 0px rgba(84, 84, 84, 0.06))'
    }}
    elevation={0}
  >
    <CardActionArea>
      <Box>
        <CardMedia
          sx={{
            objectFit: 'cover',
            background: '#F5F5F5'
          }}
          component="img"
          alt="green iguana"
          height="140"
          image="/images/image-01.jpg"
        />
      </Box>
      <CardContent sx={{ p: '0 0.5rem', pt: '0.5rem' }}>
        <BpTypography variant="body1" fontWeight={400} color="grey.700" noWrap>
          {title}
        </BpTypography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-between' }}>
        <BpTypography variant="body1" fontWeight={600} color="grey.700">
          $ {price}
        </BpTypography>
        <Stack
          flexDirection="row"
          sx={{ bgcolor: 'grey.200', width: '50px', height: '25px', borderRadius: '1.5rem' }}
          justifyContent="center"
          alignItems="center"
          gap="2px"
        >
          <StarRoundedIcon color="secondary" sx={{ fontSize: '18px' }} fontSize="small" />
          <BpTypography fontWeight={400} variant="caption" color="grey.700">
            {`${rating.toFixed(1)}`}
          </BpTypography>
        </Stack>
      </CardActions>
    </CardActionArea>
  </Card>
)
export default CardProductNomal
