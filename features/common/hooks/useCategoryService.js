import { useApolloClient } from '@apollo/client'
import { useCallback } from 'react'
import { categoriesDrawerAdapter } from '../adapters'
import { categoriesService } from '../services'

const useCategoryService = () => {
  const apolloClient = useApolloClient()

  const getCategoriesDrawer = useCallback(async () => {
    try {
      const variables = {
        where: {
          parent: 0
        }
      }
      const data = await categoriesService(apolloClient, variables, { fetchPolicy: 'cache' })
      return categoriesDrawerAdapter(data.response)
    } catch (error) {
      throw new Error(error)
    }
  }, [apolloClient])

  return {
    getCategoriesDrawer
  }
}

export default useCategoryService
