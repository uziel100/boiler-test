import { useApolloClient } from '@apollo/client'
import productsSeeds from 'seeds/products'
import { useCallback } from 'react'
import { produtcsCategoryAdapter, produtcsCategoryHistoryAdapter } from '../adapters'
import { categoryHistoryService, productsCategoryService } from '../services'

const useProductService = () => {
  const apolloClient = useApolloClient()

  const findAllProducts = useCallback(
    // eslint-disable-next-line no-unused-vars
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
