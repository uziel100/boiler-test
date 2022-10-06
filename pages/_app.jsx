import React from 'react'

import Head from 'next/head'
import createEmotionCache from 'utils/createEmotionCache'
import { ApolloProvider } from '@apollo/client'

// date picker
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import esLocale from 'date-fns/locale/es'

import { ThemeContextProvider } from 'context/Theme/ThemeContextProvider'
import { useApollo } from 'utils'
import { Toaster } from 'react-hot-toast';
import '../components/Styles/styles.global.css'
import { Provider } from 'react-redux'
import store from 'store/store'

// import 'swiper/css';
// import "swiper/css/pagination";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const clientSideEmotionCache = createEmotionCache()

const WebApp = ({ Component, emotionCache = clientSideEmotionCache, pageProps }) => {
  const apolloClient = useApollo(pageProps)

  const getLayout = Component.getLayout || (page => page)

  return (
    <>
      <Head>
        <title>Frontend base</title>
      </Head>
      <ApolloProvider client={apolloClient}>
        <ThemeContextProvider emotionCache={emotionCache}>
          <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={esLocale}>
            <Provider store={store}>
              {getLayout(<Component {...pageProps} />)}
            </Provider>
            <Toaster />
          </LocalizationProvider>
        </ThemeContextProvider>
      </ApolloProvider>
    </>
  )
}

export default WebApp
