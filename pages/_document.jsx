/* eslint-disable max-len */
import * as React from 'react'

import Document, { Head, Html, Main, NextScript } from 'next/document'

import { ServerStyleSheets } from '@mui/styles'
import createEmotionCache from 'utils/createEmotionCache'
import createEmotionServer from '@emotion/server/create-instance'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400&family=Poppins:wght@300;400;500;600;700&family=Damion&display=swap"
            rel="stylesheet"
          />
          <meta name="description" content="Uey" />
          <meta name="application-name" content="Uey" />
          <meta name="apple-mobile-web-app-title" content="Uey" />
          <style id="jss-server-side">${this.props.style}</style>
        </Head>
        <body style={{ scrollBehavior: 'smooth', overflowX: 'hidden' }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

MyDocument.getInitialProps = async ctx => {
  const sheets = new ServerStyleSheets()
  const originalRenderPage = ctx.renderPage

  const cache = createEmotionCache()
  const { extractCriticalToChunks } = createEmotionServer(cache)

  /* eslint-disable */
  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: App =>
        function EnhanceApp(props) {
          return sheets.collect(<App emotionCache={cache} {...props} />)
        }
    })
  /* eslint-enable */

  const initialProps = await Document.getInitialProps(ctx)
  const emotionStyles = extractCriticalToChunks(initialProps.html)
  const emotionStyleTags = emotionStyles.styles.map(style => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ))

  return {
    ...initialProps,
    style: sheets.toString(),
    styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement(), ...emotionStyleTags]
  }
}
