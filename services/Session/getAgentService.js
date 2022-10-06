import { getAgent } from './queries.graphql'

const getAgentService = async apolloClient => {
  try {
    const resp = await apolloClient.query({
      query: getAgent
    })
    return resp.data
  } catch (error) {
    throw new Error(error.message)
  }
}

export default getAgentService
