import { LayoutMain } from 'components/layouts'
import { ForgetPassword } from 'features/session/pages'

const ForgetPasswordRoot = () => <ForgetPassword />

ForgetPasswordRoot.getLayout = function getLayout(page) {
  return <LayoutMain isLogin>{page}</LayoutMain>
}

export default ForgetPasswordRoot
