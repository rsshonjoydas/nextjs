import Footer from "@/layout/Footer"
import Head from 'next/head'

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