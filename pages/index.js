import Head from 'next/head'
import Image from 'next/image'
import Cat from '../images/12311.jpg'

export default function Home() {
  return (
    <main>
      <Head>
        <title>rsshonjoy</title>
        <meta name="description" content="Shonjoy favorite Dragon Cat" />
      </Head>
      <h1>RS Shonjoy</h1>
      <Image src={Cat} alt="cat profile" />
    </main>
  )
}
