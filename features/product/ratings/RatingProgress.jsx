import { Box, LinearProgress, Stack } from '@mui/material'
import { InputRating } from 'components/common'
import { BpTypography } from 'components/shared'

const RATINGS = [
  {
    id: 1,
    text: '5 estrellas',
    percentaje: 70,
    count: 80
  },
  {
    id: 2,
    text: '4 estrellas',
    percentaje: 20,
    count: 10
  },
  {
    id: 3,
    text: '3 estrellas',
    percentaje: 35,
    count: 30
  },
  {
    id: 4,
    text: '2 estrellas',
    percentaje: 20,
    count: 10
  },
  {
    id: 5,
    text: '1 estrella',
    percentaje: 12,
    count: 12
  }
]

// eslint-disable-next-line arrow-body-style
const RatingProgress = () => {
  return (
    <Box>
      <Box display="grid" gridTemplateColumns="70px 1fr" gap={2}>
        <BpTypography fontWeight={400} color="grey.700" textAlign="right" sx={{ fontSize: '48px' }}>
          4.9
        </BpTypography>
        <Box mt={1.6}>
          <InputRating sx={{ ml: -0.5 }} value={4} readOnly size="medium" />
          <BpTypography component="p" fontWeight={400} sx={{ lineHeight: 1.5 }} color="grey.600" variant="caption">
            Promedio entre 52 opiniones
          </BpTypography>
        </Box>
      </Box>
      <Stack direction="column" gap={1}>
        {RATINGS.map(({ id, count, percentaje, text }) => (
          <Stack key={id} direction="row" alignItems="center" gap={2}>
            <BpTypography
              sx={{ minWidth: '70px' }}
              textAlign="right"
              component="p"
              fontWeight={400}
              color="grey.600"
              variant="caption"
            >
              {text}
            </BpTypography>
            <LinearProgress
              sx={{
                width: '190px',
                background: theme => theme.palette.grey[200],
                height: '6px',
                borderRadius: '6px'
              }}
              variant="determinate"
              value={percentaje}
            />
            <BpTypography component="p" textAlign="right" fontWeight={400} color="grey.600" variant="caption">
              {count}
            </BpTypography>
          </Stack>
        ))}
      </Stack>
    </Box>
  )
}
export default RatingProgress
