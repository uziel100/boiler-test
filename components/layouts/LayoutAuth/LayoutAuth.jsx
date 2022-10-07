import baseConfig from 'base.config'
import { Footer } from 'components/common/footer'
import Head from 'next/head'
import { NavbarMain } from 'features/common/components'

const LayoutAuth = ({ children, title }) => (
  <>
    <Head>
      <title>
        {' '}
        {title} | {baseConfig.defaultTitle}
      </title>
    </Head>
    <NavbarMain isLogin />
    <main>{children}</main>
    <Footer />
  </>
)

export default LayoutAuth
