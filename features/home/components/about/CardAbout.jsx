import { Card, CardContent } from '@mui/material'
import { BpTypography } from 'components/shared'

const CardAbout = () => {
  return (
    <Card
      elevation={0}
      sx={{
        boxShadow: '0px 1px 20px rgba(0, 0, 0, 0.07)',
        borderRadius: '0.75rem'
      }}
    >
      <CardContent>
        <BpTypography color="grey.800" fontWeight={500} variant="h2">
          <BpTypography fontWeight={500} variant="h2" color="primary.main" component="span" sx={{ display: 'inline' }}>
            +5{` `}
          </BpTypography>
          Años
        </BpTypography>
        <BpTypography fontWeight={400} fontVariant="secondary" color="grey.700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliq.
        </BpTypography>
      </CardContent>
    </Card>
  )
}
export default CardAbout
