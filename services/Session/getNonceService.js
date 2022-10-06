import { nonce } from './queries.graphql'

const getNonceService = async apolloClient => {
  try {
    const resp = await apolloClient.mutate({
      mutation: nonce
    })
    return resp.data
  } catch (error) {
    throw new Error(error.message)
  }
}

export default getNonceService
