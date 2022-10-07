import { LayoutMain } from 'components/layouts'
import { RegisterPage } from 'features/session/pages'

const RegisterPageRoot = () => <RegisterPage />

RegisterPageRoot.getLayout = function getLayout(page) {
  return (
    <LayoutMain center isLogin>
      {page}
    </LayoutMain>
  )
}

export default RegisterPageRoot
