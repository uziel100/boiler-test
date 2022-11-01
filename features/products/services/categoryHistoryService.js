import { CATEGORY_HISTORY } from '../../common/services/queries.graphql'

const categoryHistoryService = async (apolloClient, variables = {}, options = {}) => {
  try {
    const resp = await apolloClient.query({
      query: CATEGORY_HISTORY,
      variables: { ...variables },
      ...options
    })
    return resp.data
  } catch (error) {
    throw new Error(error.message)
  }
}

export default categoryHistoryService
