import { Box, CardContent, Divider, Stack } from '@mui/material'
import { ContainerCard, InputRating } from 'components/common'
import { ChipFreeShipping } from 'components/common/chips'
import { BpButton, BpTextField, BpTypography } from 'components/shared'
import { useState } from 'react'

const CardBasicInfoProduct = () => {
  const [count, setCount] = useState(1)

  const handleSubmit = event => {
    event.preventDefault()
  }

  const onChangeCount = e => {
    setCount(e.target.value)
  }

  return (
    <ContainerCard>
      <CardContent>
        <Stack flexDirection="column" gap={1}>
          <Box alignSelf="flex-end" mb={2}>
            <ChipFreeShipping />
          </Box>
          <BpTypography color="grey.800" component="h1" fontWeight={600} variant="h5">
            Refresco Coca-Cola Regular 2.5L Lorem ipsum dolor sit
          </BpTypography>
          <Box ml={-0.4}>
            <InputRating size="medium" value={3} readOnly />
          </Box>
          <Box>
            <BpTypography color="grey.700" component="p" fontWeight={600} variant="body1">
              Descripción
            </BpTypography>
            <BpTypography color="grey.600" fontVariant="secondary" component="p" fontWeight={400} variant="body2">
              Para consentirte y disfrutar, nada como el refrescante sabor de Coca-Cola Original. Disfruta de su
              delicioso sabor en todo momento y con tus platillos favoritos. Coca-Cola. Siente el sabor. Haz más ricas
              tus comidas con el delicioso y refrescante sabor de Coca-Cola. Coca-Cola. Siente el sabor.
            </BpTypography>
          </Box>
          <Stack mt={2} flexDirection="row" gap={1} alignItems="center">
            <BpTypography color="grey.800" component="p" fontWeight={600} variant="h4">
              $ 39,00
            </BpTypography>
            <Divider orientation="vertical" variant="middle" flexItem />
            <BpTypography color="grey.600" component="p" fontWeight={500} variant="body1">
              29 disponibles
            </BpTypography>
          </Stack>
          <Box mt={3}>
            <BpTypography
              sx={{
                '&:hover': {
                  textDecoration: 'underline',
                  cursor: 'pointer'
                }
              }}
              textAlign="right"
              color="grey.600"
              component="p"
              fontWeight={500}
              variant="body2"
            >
              Ver políticas de envío
            </BpTypography>
            <Stack
              // height="200px"
              mt={1}
              component="form"
              onSubmit={handleSubmit}
              direction="row"
              justifyContent="space-between"
              gap={2}
            >
              <BpTextField
                color="primary"
                size="small"
                sx={{ width: '100px', height: '100%' }}
                type="number"
                value={count}
                onChange={onChangeCount}
                inputProps={{ min: 1, max: 10, required: true }}
              />
              <BpButton color="primary" fullWidth type="submit">
                <BpTypography color="inherit" variant="body2">
                  Añadir al carrito
                </BpTypography>
              </BpButton>
            </Stack>
          </Box>
        </Stack>
      </CardContent>
    </ContainerCard>
  )
}
export default CardBasicInfoProduct
