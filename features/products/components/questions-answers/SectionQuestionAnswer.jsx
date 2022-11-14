import { Box, Button, CardContent, Stack } from '@mui/material'
import { ContainerCard } from 'components/common'
import { IconDontLike, IconLike } from 'components/icons'
import { BpButton, BpTextField, BpTypography } from 'components/shared'
import { useState } from 'react'

// eslint-disable-next-line arrow-body-style
const SectionQuestionAnswer = () => {
  const [like, setLike] = useState(false)

  const clickLikeDislike = () => {
    setLike(prev => !prev)
  }

  return (
    <Box>
      <BpTypography fontWeight={600} variant="h5" color="grey.800">
        Preguntas y respuestas
      </BpTypography>
      <Stack mt={3} direction="row" gap={2}>
        <BpTextField placeholder="Pregúntale al proveedor" size="small" />
        <BpButton sx={{ width: '200px' }} variant="contained" color="primary">
          Preguntar
        </BpButton>
      </Stack>
      <Box
        sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
        mt={3}
        width={{
          xs: '100%',
          md: 'calc(100% - 190px)'
        }}
      >
        <ContainerCard>
          <CardContent>
            <Stack direction="row" gap={2} justifyContent="space-between" alignItems="flex-start">
              <BpTypography fontWeight={600} variant="h5" color="grey.700">
                22/07/2021
              </BpTypography>
              <Stack direction="row" alignItems="center" gap={1}>
                <Stack
                  sx={{ border: theme => `1px solid ${like ? theme.palette.primary.main : theme.palette.grey[300]}` }}
                  borderRadius={1}
                  component={Button}
                  onClick={clickLikeDislike}
                  direction="row"
                  alignItems="center"
                  gap={1}
                >
                  <IconLike color={like ? 'primary' : null} />
                  <BpTypography color={like ? 'primary' : 'grey.700'}>100</BpTypography>
                </Stack>
                <Stack
                  sx={{ border: theme => `1px solid ${!like ? theme.palette.primary.main : theme.palette.grey[300]}` }}
                  borderRadius={1}
                  component={Button}
                  onClick={clickLikeDislike}
                  direction="row"
                  alignItems="center"
                  gap={1}
                >
                  <IconDontLike color={!like ? 'primary' : null} />
                  <BpTypography color={!like ? 'primary' : 'grey.700'}>100</BpTypography>
                </Stack>
              </Stack>
            </Stack>
            <Box mb={2}>
              <BpTypography fontWeight={500} variant="body2" color="grey.700">
                Pregunta
              </BpTypography>
              <BpTypography sx={{ mt: 1 }} fontWeight={600} variant="body1" color="primary.main">
                ¿Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam adipiscing elit ut aliquam?
              </BpTypography>
            </Box>
            <Box mb={2}>
              <BpTypography fontWeight={500} variant="body2" color="grey.700">
                Respuesta
              </BpTypography>
              <BpTypography sx={{ mt: 1 }} fontWeight={400} variant="body1" color="grey.600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis,
                lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo,
                vel adipiscing elit ut aliquam, purus sit amet
              </BpTypography>
            </Box>
          </CardContent>
        </ContainerCard>
      </Box>
      <Box margin="0 auto" width="100%" textAlign="center" mt={3}>
        <BpButton sx={{ borderRadius: 3 }} fullWidth={false} variant="text" color="inherit">
          <BpTypography variant="body1" color="grey.700" fontWeight={500} sx={{ textDecoration: 'underline' }}>
            Ver más
          </BpTypography>
        </BpButton>
      </Box>
    </Box>
  )
}
export default SectionQuestionAnswer
