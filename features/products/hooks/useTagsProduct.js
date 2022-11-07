import { useApolloClient } from '@apollo/client'
import { useCallback } from 'react'
import { tagsListAdapter } from '../adapters'
import { tagsProductService } from '../services'

const useTagsProductService = () => {
  const apolloClient = useApolloClient()

  const findAllTags = useCallback(
    // eslint-disable-next-line no-unused-vars
    async (variables, options = {}) => {
      try {
        const data = await tagsProductService(apolloClient, variables, options)
        return tagsListAdapter(data.response)
      } catch (error) {
        throw new Error(error)
      }
    },
    [apolloClient]
  )

  return {
    findAllTags
  }
}

export default useTagsProductService
