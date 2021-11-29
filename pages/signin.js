import Head from 'next/head'
import Footer from "../components/Footer"

const SignIn = () => {
  return (
    <>
      <Head>
        <title>Sign In</title>
        <meta name="sing in" content="Sign in for stay here..." />
      </Head>
      <div className="content">
        Sign In Page
      </div>
    </>
  )
}

export default SignIn

SignIn.getLayout = function PageLayout(page) {
  return (
    <>
      {page}
      <Footer />
    </>
  )
}