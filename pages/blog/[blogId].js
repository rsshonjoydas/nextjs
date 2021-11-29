import Head from 'next/head'

const Blog = ({ title, description }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
      </Head>
      <div className='content'>
        <h1>Env user {process.env.DB_USER} Password {process.env.DB_PASSWORD}</h1>
        <h1>Env Analytics {process.env.NEXT_PUBLIC_ANALYTICS_ID}</h1>
      </div>
    </>
  )
}

export default Blog

export async function getServerSideProps() {
  const user = process.env.DB_USER
  const password = process.env.DB_PASSWORD

  console.log(`Connecting to database with username ${user} and password ${password}`);

  return {
    props: {
      title: 'Article Title',
      description: 'Article description'
    }
  }
}