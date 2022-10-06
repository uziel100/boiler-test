import { logout } from './queries.graphql'

const logoutService = async apolloClient => {
  try {
    const resp = await apolloClient.mutate({
      mutation: logout
    })
    return resp.data
  } catch (error) {
    console.log(error)
    throw new Error(error)
  }
}

export default logoutService
