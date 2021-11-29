import Footer from "../components/Footer"

const SignIn = () => {
  return (
    <div className="content">
      Sign In Page
    </div>
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