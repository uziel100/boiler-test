import React, { useEffect } from 'react'

import Head from 'next/head'
import createEmotionCache from 'utils/createEmotionCache'
import { ApolloProvider } from '@apollo/client'

// date picker
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import esLocale from 'date-fns/locale/es'

import { ThemeContextProvider } from 'context/Theme/ThemeContextProvider'
import { useApollo } from 'utils'
import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux'
import store from 'store/store'

import { SessionProvider } from 'next-auth/react'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'photoswipe/style.css'
import '../components/styles/styles.global.css'
import { AppContextProvider } from 'context/app/AppContext'

const clientSideEmotionCache = createEmotionCache()
const WebApp = ({ Component, emotionCache = clientSideEmotionCache, pageProps: { session, ...pageProps } }) => {
  const apolloClient = useApollo(pageProps)

  const getLayout = Component.getLayout || (page => page)

  useEffect(() => {
    // inicializar local storage
  }, [])

  return (
    <>
      <Head>
        <title>Frontend base</title>
      </Head>
      <SessionProvider session={session}>
        <ApolloProvider client={apolloClient}>
          <ThemeContextProvider emotionCache={emotionCache}>
            <LocalizationProvider
              dateAdapter={AdapterDateFns}
              adapterLocale={esLocale}
              localeText={{
                okButtonLabel: 'Aceptar',
                cancelButtonLabel: 'Cerrar'
              }}
            >
              <Provider store={store}>
                <AppContextProvider>{getLayout(<Component {...pageProps} />)}</AppContextProvider>
              </Provider>
              <Toaster />
            </LocalizationProvider>
          </ThemeContextProvider>
        </ApolloProvider>
      </SessionProvider>
    </>
  )
}

export default WebApp
