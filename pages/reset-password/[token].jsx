import { LayoutMain } from 'components/layouts'
import { ResetPasswordPage } from 'features/session/pages'

const ResetPasswordRoot = () => <ResetPasswordPage />

ResetPasswordRoot.getLayout = function getLayout(page) {
  return <LayoutMain isLogin>{page}</LayoutMain>
}

export default ResetPasswordRoot
