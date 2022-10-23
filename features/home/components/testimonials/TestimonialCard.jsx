import { Box, Card, CardContent, Stack } from '@mui/material'
import StarRoundedIcon from '@mui/icons-material/StarRounded'
import { BpTypography } from 'components/shared'

const TestimonialCard = ({ inFocus }) => (
  <Card
    elevation={0}
    sx={{
      border: theme => `1px solid ${theme.palette.primary.main}`,
      borderRadius: theme => (inFocus ? theme.spacing(4) : theme.spacing(3)),
      // maxWidth: inFocus ? '450px' : '300px',
      maxHeight: '400px',
      // boxShadow: '0px 1px 10px rgba(0, 0, 0, 0.07)',
      width: '100%'
    }}
  >
    <CardContent>
      <Stack flexDirection="column" alignItems="center" justifyContent="center">
        <Stack direction="row">
          <StarRoundedIcon color="primary" fontSize="large" />
          <StarRoundedIcon color="primary" fontSize="large" />
          <StarRoundedIcon color="primary" fontSize="large" />
          <StarRoundedIcon color="primary" fontSize="large" />
          <StarRoundedIcon color="primary" fontSize="large" />
        </Stack>
        <Box mt={3} mb={2}>
          <BpTypography
            textAlign="center"
            fontVariant="secondary"
            fontWeight={500}
            variant={inFocus ? 'body1' : 'body2'}
            color={inFocus ? 'grey.800' : 'grey.700'}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus
            magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo enim praesent
            rhoncus dolor purus non enim praesent
          </BpTypography>
        </Box>
        <BpTypography
          isUpperCase
          textAlign="center"
          fontVariant="secondary"
          fontWeight={600}
          variant="body1"
          color={inFocus ? 'grey.800' : 'grey.700'}
          label="Nombre del usuario"
        />
      </Stack>
    </CardContent>
  </Card>
)
export default TestimonialCard
