// import { login } from './queries.graphql'

import { login } from './queries.graphql'

const loginService = async (apolloClient, variables = {}, options = {}) => {
  try {
    const resp = await apolloClient.mutate({
      mutation: login,
      variables: { ...variables },
      ...options
    })
    return resp.data
  } catch (error) {
    throw new Error(error.message)
  }
}

export default loginService
