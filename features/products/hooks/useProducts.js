import { useError } from 'hooks'
import { useState } from 'react'
import { productFilterPaginationsAdapter, productFiltersAdapter } from '../adapters'
import useFilterProducts from './useFilterProducts'
import useProductService from './useProductService'

const useProducts = () => {
  const { logError } = useError()
  const { findAllProducts } = useProductService()
  const { filters } = useFilterProducts()

  // items
  const [products, setProducts] = useState(null)
  // pagination
  const [afterCursor, setAfterCursor] = useState(null)
  const [hasNextPage, setHasNextPage] = useState(true)
  const [loadingFechingMore, setLoadingFechingMore] = useState(false)

  const getProducts = () => {
    const filterAdapter = productFiltersAdapter(filters)
    setProducts(null)
    findAllProducts(filterAdapter, { fetchPolicy: 'no-cache' })
      .then(data => {
        const { pageInfo, items } = data
        setHasNextPage(pageInfo.hasNextPage)
        setAfterCursor(pageInfo.endCursor)
        setProducts(items)
      })
      .catch(logError)
  }

  const fetchMoreProducts = () => {
    setLoadingFechingMore(true)
    const filterAdapter = productFilterPaginationsAdapter({ ...filters, afterCursor })
    findAllProducts(filterAdapter, { fetchPolicy: 'no-cache' })
      .then(data => {
        const { pageInfo, items } = data
        setHasNextPage(pageInfo.hasNextPage)
        setAfterCursor(pageInfo.endCursor)
        setProducts(prev => [...prev, ...items])
      })
      .catch(logError)
      .finally(() => {
        setLoadingFechingMore(false)
      })
  }

  return {
    products,
    getProducts,
    afterCursor,
    hasNextPage,
    loadingFechingMore,
    fetchMoreProducts
  }
}

export default useProducts
