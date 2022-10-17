import React from 'react'
import { LayoutMain } from 'components/layouts'
import useTheme from 'hooks/useTheme'
import LoginPage from 'features/session/pages/LoginPage'
import { getToken } from 'next-auth/jwt'

const LoginPageRoot = () => {
  const { toggleTheme } = useTheme()

  return <LoginPage toggleTheme={toggleTheme} />
}

LoginPageRoot.getLayout = function getLayout(page) {
  return (
    <LayoutMain center={false} isLogin>
      {page}
    </LayoutMain>
  )
}

export async function getServerSideProps({ req }) {
  const session = await getToken({ req })
  if (session) {
    return {
      redirect: {
        destination: '/',
        permanent: true
      }
    }
  }
  console.log({ session })

  return {
    props: {} // will be passed to the page component as props
  }
}

export default LoginPageRoot
