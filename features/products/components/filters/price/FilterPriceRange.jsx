import { Stack } from '@mui/material'
import { useError } from 'hooks'
import { useEffect, useState } from 'react'
import InputPrice from './InputPrice'
import ButtonAction from './ButtonAction'

const FilterPriceRange = ({ onChange, valueMin, valueMax, children, component = 'form' }) => {
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
      component={component}
      direction="row"
      gap={1.2}
      justifyContent="space-between"
      alignItems="center"
    >
      {typeof children === 'function' ? children({ priceMin, setPriceMin, priceMax, setPriceMax }) : children}
    </Stack>
  )
}

FilterPriceRange.Input = InputPrice
FilterPriceRange.Submit = ButtonAction

export default FilterPriceRange
