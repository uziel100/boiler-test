import { Stack } from '@mui/system'
import baseConfig from 'base.config'
import { Footer } from 'components/common/footer'
import Head from 'next/head'
import { ScrollTop } from 'components/common'
import { NavbarMain } from 'features/common/components'


const LayoutMain = ({ children, title }) => (
  <>
    <Head>
      <title>
        {' '}
        {title} | {baseConfig.defaultTitle}
      </title>
    </Head>
    <div id="back-to-top-anchor" />
    <NavbarMain />
    <main>
      {children}
      <ScrollTop />
    </main>
    <Footer />
  </>
)

export default LayoutMain
