// import { useContext } from 'react'
// import { FilterProductContext } from '../context/FilterProductContext'

import { useContext } from 'react'
import { FilterProductContext } from '../context/FilterProductContext'

const initialState = {
  freeShipping: false,
  priceMin: 0,
  priceMax: 0,
  orderBy: 'none',
  rating: 0
}

const useFilterProducts = () => {
  // const [filters, setFilters] = useState(initialState)
  const { filters, setFilters } = useContext(FilterProductContext)

  // console.log('xxx---', filters)

  const resetFilters = () => {
    // console.log('reset filters ----', initialState)
    setFilters(initialState)
  }

  return {
    filters,
    setFilters,
    resetFilters
  }
}
export default useFilterProducts
