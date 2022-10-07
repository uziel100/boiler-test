import baseConfig from 'base.config'
import { Footer } from 'components/common/footer'
import Head from 'next/head'
import { ScrollTop } from 'components/common'
import { NavbarLogin, NavbarMain } from 'features/common/components'

const styleCenter = {
  height: 'calc(100vh - 90px)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}

const LayoutMain = ({ children, title, isLogin = false, center = false }) => (
  <>
    <Head>
      <title>
        {' '}
        {title} | {baseConfig.defaultTitle}
      </title>
    </Head>
    <div id="back-to-top-anchor" />
    {!isLogin ? <NavbarMain isLogin={isLogin} /> : <NavbarLogin />}
    <main style={center ? { ...styleCenter } : {}}>
      {children}
      {!isLogin && <ScrollTop />}
    </main>
    {!isLogin && <Footer />}
  </>
)

export default LayoutMain
