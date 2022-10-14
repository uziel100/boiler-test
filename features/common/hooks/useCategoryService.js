import { useApolloClient } from '@apollo/client'
import { useCallback } from 'react'
import { categoriesService } from '../services'

const useCategoryService = () => {
  const apolloClient = useApolloClient()

  const getCategoriesDrawer = useCallback(
    async variables => {
      try {
        const response = await categoriesService(apolloClient, variables)
        return response.response
      } catch (error) {
        throw new Error(error)
      }
    },
    [apolloClient]
  )

  return {
    getCategoriesDrawer
  }
}

export default useCategoryService
