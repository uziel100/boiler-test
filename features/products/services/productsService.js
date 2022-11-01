import { PRODUCTS } from './queries.graphql'

const productsService = async (apolloClient, variables = {}, options = {}) => {
  try {
    const resp = await apolloClient.query({
      query: PRODUCTS,
      variables,
      ...options
    })
    return resp.data
  } catch (error) {
    throw new Error(error.message)
  }
}

export default productsService
