import React from 'react'
import { LayoutMain } from 'components/layouts'
import useTheme from 'hooks/useTheme'
import LoginPage from 'features/session/pages/LoginPage'

const LoginPageRoot = () => {
  const { toggleTheme } = useTheme()

  return <LoginPage toggleTheme={toggleTheme} />
}

LoginPageRoot.getLayout = function getLayout(page) {
  return <LayoutMain>{page}</LayoutMain>
}

export default LoginPageRoot
