import { TAGS_PRODUCTS } from './queries.graphql'

const tagsProductService = async (apolloClient, variables = {}, options = {}) => {
  try {
    const resp = await apolloClient.query({
      query: TAGS_PRODUCTS,
      variables,
      ...options
    })
    return resp.data
  } catch (error) {
    throw new Error(error.message)
  }
}

export default tagsProductService
