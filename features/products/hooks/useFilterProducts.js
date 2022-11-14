import { useRouter } from 'next/router'
import { useCallback, useContext, useEffect, useState } from 'react'
import { formatMoney } from 'utils'
import { FilterProductContext } from '../context/FilterProductContext'

const useFilterProducts = () => {
  const router = useRouter()
  const { filters, setFilters, initialFilters } = useContext(FilterProductContext)
  const [chipFilters, setChipFilters] = useState([])

  const resetFilters = () => {
    setFilters({ ...initialFilters, ctg: router.query?.ctg })
  }

  const changeFilters = useCallback(
    customFilters => {
      setFilters(prev => ({ ...prev, ...customFilters }))
    },
    [filters]
  )

  const calculateCountFilters = () => {
    const filtersSelected = {}
    if (initialFilters.freeShipping !== filters.freeShipping) {
      filtersSelected.freeShipping = {
        key: 'freeShipping',
        value: 'Envío gratis'
      }
    }
    if (initialFilters.priceMin + filters.priceMax > 0) {
      filtersSelected.priceRange = {
        key: 'priceRange',
        value: `${formatMoney(filters.priceMin)} - ${formatMoney(filters.priceMax)}`
      }
    }
    if (initialFilters.orderBy !== filters.orderBy) {
      filtersSelected.orderBy = {
        key: 'orderBy',
        value: `${filters.orderBy}`
      }
    }
    if (initialFilters.rating !== filters.rating) {
      filtersSelected.rating = {
        key: 'rating',
        value: `Calif. ${filters.rating}.0`
      }
    }

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
    countFilters: chipFilters.length,
    chipFilters,
    handleDeleteChipFilter
  }
}
export default useFilterProducts
