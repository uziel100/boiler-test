// import { useContext } from 'react'
// import { FilterProductContext } from '../context/FilterProductContext'

import { useContext, useEffect, useState } from 'react'
import { formatMoney } from 'utils'
import { FilterProductContext } from '../context/FilterProductContext'

const initialState = {
  freeShipping: false,
  priceMin: 0,
  priceMax: 0,
  orderBy: 'none',
  rating: 0
}

const useFilterProducts = () => {
  const { filters, setFilters, initialFilters } = useContext(FilterProductContext)
  const [countFilters, setCountFilters] = useState(0)
  const [chipFilters, setChipFilters] = useState([])

  const resetFilters = () => {
    setFilters(initialState)
  }

  const changeFilters = customFilters => {
    setFilters(prev => ({ ...prev, ...customFilters }))
  }

  const calculateCountFilters = () => {
    let count = 0
    const filtersSelected = {}
    if (initialState.freeShipping !== filters.freeShipping) {
      filtersSelected.freeShipping = {
        key: 'freeShipping',
        value: 'Envío gratis'
      }
      count++
    }
    if (initialState.priceMin + filters.priceMax > 0) {
      filtersSelected.priceRange = {
        key: 'priceRange',
        value: `${formatMoney(filters.priceMin)} - ${formatMoney(filters.priceMax)}`
      }
      count++
    }
    if (initialState.orderBy !== filters.orderBy) {
      filtersSelected.orderBy = {
        key: 'orderBy',
        value: `${filters.orderBy}`
      }
      count++
    }
    if (initialState.rating !== filters.rating) {
      filtersSelected.rating = {
        key: 'rating',
        value: `Calif. ${filters.rating}.0`
      }
      count++
    }

    setCountFilters(count)
    // console.log(Object.values(filtersSelected))
    setChipFilters(Object.values(filtersSelected))
  }

  const handleDeleteChipFilter = (key = null) => {
    if (!key) throw new Error('Need to key')
    if (key === 'priceRange') {
      setFilters(prev => ({ ...prev, priceMin: initialFilters.priceMin, priceMax: initialFilters.priceMax }))
      return
    }

    setFilters(prev => ({ ...prev, [key]: initialFilters[key] }))
  }

  useEffect(() => {
    calculateCountFilters()
  }, [filters])

  return {
    filters,
    setFilters,
    resetFilters,
    changeFilters,
    countFilters,
    chipFilters,
    handleDeleteChipFilter
  }
}
export default useFilterProducts
