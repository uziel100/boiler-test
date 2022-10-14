import { registerUser } from './queries.graphql'

const registerUserService = async (apolloClient, variables = {}, options = {}) => {
  try {
    const resp = await apolloClient.mutate({
      mutation: registerUser,
      variables: { ...variables },
      ...options
    })
    return resp.data
  } catch (error) {
    throw new Error(error.message)
  }
}

export default registerUserService
