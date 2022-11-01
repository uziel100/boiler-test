import { DRAWER_CATEGORIES } from './queries.graphql'

const categoriesService = async (apolloClient, variables = {}, options = {}) => {
  try {
    const resp = await apolloClient.query({
      query: DRAWER_CATEGORIES,
      variables: { ...variables },
      ...options
    })
    return resp.data
  } catch (error) {
    throw new Error(error.message)
  }
}

export default categoriesService
