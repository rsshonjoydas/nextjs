import Footer from '@/layout/Footer'
import Header from '@/layout/Header'
import Head from 'next/head'
import 'styles/globals.css'
import 'styles/layout.css'

function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />)
  }

  return (
    <>
      <Head>
        <title>RS Shonjoy</title>
        <meta name="rsshonjoy" content="RS Shonjoy | Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
