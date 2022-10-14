import { categoriesDrawer } from './queries.graphql'

const categoriesService = async (apolloClient, variables = {}, options = {}) => {
  try {
    const resp = await apolloClient.query({
      query: categoriesDrawer,
      variables: { ...variables },
      ...options
    })
    return resp.data
  } catch (error) {
    throw new Error(error.message)
  }
}

export default categoriesService
