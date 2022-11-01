import { createContext, useEffect, useMemo, useState } from 'react'

export const FilterProductContext = createContext(null)

const initialState = {
  freeShipping: false,
  priceMin: 0,
  priceMax: 0,
  orderBy: 'none',
  rating: 0
}

export const FilterProductContextProvider = ({ children, initial = null }) => {
  const [filters, setFilters] = useState(initial || initialState)

  useEffect(() => {
    setFilters({ ...initial })
  }, [initial])

  const memoFilters = useMemo(
    () => ({
      filters,
      setFilters
    }),
    [filters]
  )

  return <FilterProductContext.Provider value={memoFilters}>{children}</FilterProductContext.Provider>
}
