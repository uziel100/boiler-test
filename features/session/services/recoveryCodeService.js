import { recoveryCode } from './queries.graphql'

const recoveryCodeService = async (apolloClient, { code }, options = {}) => {
  try {
    const resp = await apolloClient.query({
      query: recoveryCode,
      variables: {
        code
      },
      ...options
    })
    return resp.data
  } catch (error) {
    throw new Error(error.message)
  }
}

export default recoveryCodeService
