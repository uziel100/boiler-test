import { forgetPassword } from './queries.graphql'

const forgetPasswordService = async (apolloClient, { email }, options = {}) => {
  try {
    const resp = await apolloClient.mutate({
      mutation: forgetPassword,
      variables: {
        email
      },
      ...options
    })
    return resp.data
  } catch (error) {
    throw new Error(error.message)
  }
}

export default forgetPasswordService
