import { useApolloClient } from '@apollo/client'
import { useCallback } from 'react'
import { loginNormalAdapter, mapperUserAdaper } from '../adapters'
import { loginService, logoutService } from '../services'

const useAuthService = () => {
  const apolloClient = useApolloClient()

  const onLogin = useCallback(
    async ({ email, password }) => {
      try {
        const data = loginNormalAdapter({ email, password })
        const variables = { ...data }
        const response = await loginService(apolloClient, variables)
        return mapperUserAdaper(response.login)
      } catch (error) {
        throw new Error(error)
      }
    },
    [apolloClient]
  )

  const onLogout = useCallback(async () => {
    try {
      const response = await logoutService(apolloClient)
      return response
    } catch (error) {
      throw new Error(error)
    }
  }, [apolloClient])

  return {
    onLogin,
    onLogout
  }
}

export default useAuthService
