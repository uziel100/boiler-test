import { createContext, useEffect, useMemo, useState } from 'react'
import { DEFAULT_FILTERS_PRODUCTS } from '../consts'

export const FilterProductContext = createContext(null)

export const FilterProductContextProvider = ({ children, initial = null }) => {
  const [initialFilters] = useState(DEFAULT_FILTERS_PRODUCTS)
  const [filters, setFilters] = useState(initial || DEFAULT_FILTERS_PRODUCTS)

  useEffect(() => {
    setFilters({ ...initial })
  }, [initial])

  const memoFilters = useMemo(
    () => ({
      filters,
      setFilters,
      initialFilters
    }),
    [filters]
  )

  return <FilterProductContext.Provider value={memoFilters}>{children}</FilterProductContext.Provider>
}
