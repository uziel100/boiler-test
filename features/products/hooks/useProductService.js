import { useApolloClient } from '@apollo/client'
import productsSeeds from 'seeds/products'
import { useCallback } from 'react'
import { produtcsCategoryAdapter, produtcsCategoryHistoryAdapter } from '../adapters'
import { categoryHistoryService, productsCategoryService, productsService } from '../services'

const useProductService = () => {
  const apolloClient = useApolloClient()

  const findAllProducts = useCallback(
    async (variables, options = {}) => {
      try {
        // const data = await productsService(apolloClient, variables, options)
        const data = { response: productsSeeds }
        return data.response
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
    async (slugBaseCategory, variables) => {
      try {
        const data = await categoryHistoryService(apolloClient, variables, { fetchPolicy: 'cache' })
        return produtcsCategoryHistoryAdapter(data.response, slugBaseCategory)
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
