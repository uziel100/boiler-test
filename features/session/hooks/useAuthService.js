import { useApolloClient } from '@apollo/client'
import { useCallback } from 'react'
import {
  changePasswordPayloadAdapter,
  loginNormalAdapter,
  mapperRecoveryCodeAdapter,
  mapperUserAdaper
} from '../adapters'
import {
  changePasswordService,
  forgetPasswordService,
  loginService,
  logoutService,
  recoveryCodeService
} from '../services'

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

  const forgetPassword = useCallback(
    async data => {
      try {
        const variables = { email: data.email }
        const res = await forgetPasswordService(apolloClient, variables)
        return res.response
      } catch (error) {
        throw new Error(error)
      }
    },
    [apolloClient]
  )

  const getRecoveryCode = useCallback(
    async data => {
      try {
        const variables = { code: data.code }
        const res = await recoveryCodeService(apolloClient, variables)
        return mapperRecoveryCodeAdapter(res.response)
      } catch (error) {
        throw new Error(error)
      }
    },
    [apolloClient]
  )

  const changePassword = useCallback(
    async data => {
      try {
        const mapperPayload = changePasswordPayloadAdapter(data)
        const res = await changePasswordService(apolloClient, mapperPayload)
        return res.response
      } catch (error) {
        throw new Error(error)
      }
    },
    [apolloClient]
  )

  return {
    onLogin,
    onLogout,
    forgetPassword,
    getRecoveryCode,
    changePassword
  }
}

export default useAuthService
