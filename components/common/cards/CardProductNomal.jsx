/* eslint-disable max-len */
import { useState } from 'react'
import Image from 'next/image'
import { formatMoney } from 'utils'
import { Box, CardActions, CardContent, Stack, useMediaQuery } from '@mui/material'
import { BpButton, BpTextField, BpTypography } from 'components/shared'
import StarRoundedIcon from '@mui/icons-material/StarRounded'
import { IconCartDelivery } from 'components/icons'
import { StyledCard } from './StyledCommon'

const CardProductNormal = ({
  img,
  title,
  price,
  rating = 0,
  discount = false,
  freeShipping = false,
  onAddToCart = () => {}
}) => {
  const isXs = useMediaQuery('(min-width:769px)')
  const [count, setCount] = useState(1)

  const onChangeCount = e => {
    setCount(e.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    onAddToCart(parseInt(count, 10))
  }

  return (
    <StyledCard
      elevation={0}
      sx={{
        height: 'auto',
        width: 'auto',
        minWidth: 'auto',
        maxWidth: '100%',
        position: 'relative'
      }}
    >
      {discount && (
        <Box
          sx={{
            bgcolor: 'primary.main',
            textAlign: 'center',
            position: 'absolute',
            zIndex: 1,
            width: '127px',
            left: '-30px',
            top: '15px',
            transform: 'rotateZ(322deg)'
          }}
        >
          <BpTypography
            fontWeight={700}
            textAlign="center"
            isUpperCase
            label="desc."
            sx={{ fontSize: '11px', color: '#fff' }}
          />
        </Box>
      )}
      <Stack
        flexDirection="row"
        sx={{
          bgcolor: 'grey.200',
          width: '50px',
          height: '25px',
          borderRadius: '1.5rem',
          display: {
            xs: 'flex',
            sm: 'none'
          },
          position: 'absolute',
          top: 10,
          right: 10,
          zIndex: 1
        }}
        justifyContent="center"
        alignItems="center"
        gap="2px"
      >
        <StarRoundedIcon color="primary" sx={{ fontSize: '18px' }} fontSize="small" />
        <BpTypography fontWeight={400} variant="caption" color="grey.700">
          {`${rating.toFixed(1)}`}
        </BpTypography>
      </Stack>
      <Box width="100%" position="relative">
        <Image
          objectFit="cover"
          layout="responsive"
          placeholder="blur"
          blurDataURL={img}
          width={252}
          height={210}
          src={img}
          alt={title}
        />
        {freeShipping && (
          <Stack
            direction="row"
            alignItems="center"
            gap={1}
            sx={{
              bgcolor: 'grey.100',
              borderRadius: 4,
              padding: '4px 8px',
              position: 'absolute',
              bottom: 15,
              left: 10
            }}
          >
            <IconCartDelivery />
            <BpTypography color="grey.700" fontWeight={400} sx={{ fontSize: '10px' }}>
              ¡Envío gratis!
            </BpTypography>
          </Stack>
        )}
      </Box>
      <Stack flexDirection="column" alignContent="space-between" gap={1} pt={1} pb={2} px={1}>
        <CardContent sx={{ p: '0 0.5rem', maxHeight: '60px', minHeight: 'auto', overflow: 'hidden' }}>
          <BpTypography variant="body2" fontWeight={400} color="grey.700">
            {title}
          </BpTypography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'space-between', py: 0 }}>
          <Stack direction="row" alignItems="center" gap={1}>
            <BpTypography component="h6" variant="h6" fontWeight={700} color="grey.800">
              {formatMoney(price)}
            </BpTypography>
            {discount && (
              <BpTypography
                sx={{ textDecoration: 'line-through' }}
                component="p"
                variant="body2"
                fontWeight={400}
                color="grey.600"
              >
                {formatMoney(price)}
              </BpTypography>
            )}
          </Stack>
          <Stack
            flexDirection="row"
            sx={{
              bgcolor: 'grey.200',
              width: '50px',
              height: '25px',
              borderRadius: '1.5rem',
              display: {
                xs: 'none',
                sm: 'flex'
              }
            }}
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
        <Stack component="form" onSubmit={handleSubmit} direction="row" justifyContent="space-between" gap={2} px={1}>
          <BpTextField
            color="primary"
            size="small"
            sx={{ width: '100px' }}
            type="number"
            value={count}
            onChange={onChangeCount}
            inputProps={{ min: 1, max: 10, required: true }}
          />
          <BpButton color="primary" fullWidth type="submit">
            <BpTypography color="inherit" variant="body2">
              {isXs ? 'Añadir al carrito' : 'Añadir'}
            </BpTypography>
          </BpButton>
        </Stack>
      </Stack>
    </StyledCard>
  )
}
export default CardProductNormal
