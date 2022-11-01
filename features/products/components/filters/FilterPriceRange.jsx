import { IconButton, InputAdornment, InputBase, Stack } from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import { useError } from 'hooks'
import { useEffect, useState } from 'react'

const FilterPriceRange = ({ onChange, valueMin, valueMax }) => {
  const { showAlert } = useError()

  const [priceMin, setPriceMin] = useState(valueMin)
  const [priceMax, setPriceMax] = useState(valueMax)

  const handleSubmitFilterRangePrice = e => {
    e.preventDefault()
    const valuePriceMin = parseInt(priceMin, 10)
    const valuePriceMax = parseInt(priceMax, 10)

    if (valuePriceMax < valuePriceMin) {
      showAlert('Rango de precios inválido', 'error')
      return
    }

    onChange({
      priceMin: valuePriceMin,
      priceMax: valuePriceMax
    })
  }

  useEffect(() => {
    setPriceMax(valueMax)
    setPriceMin(valueMin)
  }, [valueMin, valueMax])

  return (
    <Stack
      onSubmit={handleSubmitFilterRangePrice}
      component="form"
      direction="row"
      gap={1.2}
      justifyContent="space-between"
      alignItems="center"
    >
      <InputBase
        type="number"
        sx={{
          border: '1px solid #D4D3D4',
          padding: '4px 8px',
          borderRadius: '4px',
          width: '90px'
        }}
        required
        startAdornment={<InputAdornment position="start">$</InputAdornment>}
        inputProps={{ min: 0 }}
        value={priceMin}
        onChange={event => setPriceMin(event.target.value)}
      />
      <span>-</span>
      <InputBase
        type="number"
        sx={{
          border: '1px solid #D4D3D4',
          padding: '4px 8px',
          borderRadius: '4px',
          width: '92px'
        }}
        required
        startAdornment={<InputAdornment position="start">$</InputAdornment>}
        inputProps={{ min: 0 }}
        value={priceMax}
        onChange={event => setPriceMax(event.target.value)}
      />
      <IconButton
        type="submit"
        sx={{
          bgcolor: 'grey.200'
        }}
      >
        <KeyboardArrowRightIcon />
      </IconButton>
    </Stack>
  )
}
export default FilterPriceRange
