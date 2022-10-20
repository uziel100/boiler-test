import React, { useEffect } from 'react'
import { LayoutMain } from 'components/layouts'
import useTheme from 'hooks/useTheme'
import LoginPage from 'features/session/pages/LoginPage'

const LoginPageRoot = () => {
  const { toggleTheme } = useTheme()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch('https://staging.uey.mx/wp-json/wp/v2/users')
        const json = await resp.json()
        console.log({ json })
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  return <LoginPage toggleTheme={toggleTheme} />
}

LoginPageRoot.getLayout = function getLayout(page) {
  return (
    <LayoutMain center={false} isLogin>
      {page}
    </LayoutMain>
  )
}

export default LoginPageRoot
