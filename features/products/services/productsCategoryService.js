import { PRODUCTS_CATEGORY } from './queries.graphql'

const productsCategoryService = async (apolloClient, variables = {}, options = {}) => {
  try {
    const resp = await apolloClient.query({
      query: PRODUCTS_CATEGORY,
      variables,
      ...options
    })
    return resp.data
  } catch (error) {
    throw new Error(error.message)
  }
}

export default productsCategoryService
