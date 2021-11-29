import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import '../styles/globals.css'
import '../styles/layout.css'

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
