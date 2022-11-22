import baseConfig from 'base.config'
import { Footer } from 'components/common/footer'
import Head from 'next/head'
import { ScrollTop } from 'components/common'
import { NavbarLogin, NavbarMain } from 'features/common/components'
import { Backdrop } from '@mui/material'
import { useSelector } from 'react-redux'

const styleCenter = {
  height: 'calc(100vh - 90px)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}

const LayoutMain = ({ children, title, isLogin = false, center = false }) => {
  const { openSearch } = useSelector(store => store.ui)

  return (
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
        <Backdrop sx={{ zIndex: 100, background: 'rgba(0, 0, 0, 0.7)' }} open={openSearch} />
        {children}
        {!isLogin && <ScrollTop />}
      </main>
      {!isLogin && <Footer />}
    </>
  )
}

export default LayoutMain
