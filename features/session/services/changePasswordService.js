import { changePassword } from './queries.graphql'

const changePasswordService = async (apolloClient, variables = {}, options = {}) => {
  try {
    const resp = await apolloClient.mutate({
      mutation: changePassword,
      variables: { ...variables },
      ...options
    })
    return resp.data
  } catch (error) {
    throw new Error(error.message)
  }
}

export default changePasswordService
