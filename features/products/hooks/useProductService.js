import { useApolloClient } from '@apollo/client'
import { useCallback } from 'react'
import productsService from '../services/products'

const useProductService = () => {
  const apolloClient = useApolloClient()

  const findAllProducts = useCallback(
    async (variables, options = {}) => {
      try {
        const data = await productsService(apolloClient, variables, options)
        return data.response
      } catch (error) {
        throw new Error(error)
      }
    },
    [apolloClient]
  )

  return {
    findAllProducts
  }
}

export default useProductService
