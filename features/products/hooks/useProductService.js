import { useApolloClient } from '@apollo/client'
import { useCallback } from 'react'
import { productsListAdapter, produtcsCategoryAdapter, produtcsCategoryHistoryAdapter } from '../adapters'
import { categoryHistoryService, productsCategoryService, productsService } from '../services'

const useProductService = () => {
  const apolloClient = useApolloClient()

  const findAllProducts = useCallback(
    async (variables, options = {}) => {
      try {
        const data = await productsService(apolloClient, variables, options)
        return productsListAdapter(data.response)
      } catch (error) {
        throw new Error(error)
      }
    },
    [apolloClient]
  )

  const getProductsCategory = useCallback(
    async variables => {
      try {
        const data = await productsCategoryService(apolloClient, variables, { fetchPolicy: 'cache' })
        return produtcsCategoryAdapter(data.response)
      } catch (error) {
        throw new Error(error)
      }
    },
    [apolloClient]
  )

  const getCategoryHistory = useCallback(
    async (slugBaseCategory, isMobil, variables) => {
      try {
        const data = await categoryHistoryService(apolloClient, variables, { fetchPolicy: 'cache' })
        return produtcsCategoryHistoryAdapter(data.response, slugBaseCategory, isMobil)
      } catch (error) {
        throw new Error(error)
      }
    },
    [apolloClient]
  )

  return {
    findAllProducts,
    getProductsCategory,
    getCategoryHistory
  }
}

export default useProductService
