import { useApolloClient } from '@apollo/client'
import { SHA256 } from 'crypto-js'
import { useCallback } from 'react'
import { getAgentService, getNonceService } from 'services'
import { loginService, logoutService } from '../services'

const useAuthService = () => {
  const apolloClient = useApolloClient()

  const onLogin = useCallback(
    async ({ email, password }) => {
      try {
        const nonceResponse = await getNonceService(apolloClient)
        const { nonce } = nonceResponse
        const agentResponse = await getAgentService(apolloClient)
        const agentId = agentResponse.agent.id
        const hashedPassword = SHA256(password).toString()
        const passwordData = SHA256(`${agentId}${hashedPassword}${nonce.data}`).toString()

        const variables = { email, password: passwordData, nonce: nonce.id }
        const response = await loginService(apolloClient, variables)
        return response
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
