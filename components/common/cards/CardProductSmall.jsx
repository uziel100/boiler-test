/* eslint-disable max-len */
import Image from 'next/image'
import { Box, CardActionArea, CardActions, CardContent, Stack } from '@mui/material'
import { BpTypography } from 'components/shared'
import StarRoundedIcon from '@mui/icons-material/StarRounded'
import { StyledCard } from './StyledCommon'

const CardProductSmall = ({ img, title, price, rating = 0 }) => (
  <StyledCard elevation={0} sx={{ maxHeight: '225px' }}>
    <CardActionArea>
      <Box width="100%">
        <Image objectFit="cover" width={200} height={140} src={img} alt={title} />
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
          <StarRoundedIcon color="primary" sx={{ fontSize: '18px' }} fontSize="small" />
          <BpTypography fontWeight={400} variant="caption" color="grey.700">
            {`${rating.toFixed(1)}`}
          </BpTypography>
        </Stack>
      </CardActions>
    </CardActionArea>
  </StyledCard>
)
export default CardProductSmall
