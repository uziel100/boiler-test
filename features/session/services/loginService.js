// import { login } from './queries.graphql'

import { login } from './queries.graphql'

const loginService = async (apolloClient, { email, password }, options = {}) => {
  try {
    const resp = await apolloClient.mutate({
      mutation: login,
      variables: {
        email,
        password,
      },
      ...options
    })
    return resp.data
  } catch (error) {
    throw new Error(error.message)
  }
}

export default loginService
