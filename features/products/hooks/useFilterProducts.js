// import { useContext } from 'react'
// import { FilterProductContext } from '../context/FilterProductContext'

import { useContext, useEffect, useState } from 'react'
import { FilterProductContext } from '../context/FilterProductContext'

const initialState = {
  freeShipping: false,
  priceMin: 0,
  priceMax: 0,
  orderBy: 'none',
  rating: 0
}

const useFilterProducts = () => {
  const { filters, setFilters } = useContext(FilterProductContext)
  const [countFilters, setCountFilters] = useState(0)

  const resetFilters = () => {
    setFilters(initialState)
  }

  const changeFilters = customFilters => {
    setFilters(prev => ({ ...prev, ...customFilters }))
  }

  const calculateCountFilters = () => {
    let count = 0
    if (initialState.freeShipping !== filters.freeShipping) count++
    if (initialState.priceMin + filters.priceMax > 0) count++
    if (initialState.orderBy !== filters.orderBy) count++
    if (initialState.rating !== filters.rating) count++

    setCountFilters(count)
  }

  useEffect(() => {
    calculateCountFilters()
  }, [filters])

  return {
    filters,
    setFilters,
    resetFilters,
    changeFilters,
    countFilters
  }
}
export default useFilterProducts
