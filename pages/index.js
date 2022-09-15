import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import ActiveLink from '@components/active-link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main-wrapper">
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
        <ActiveLink href="/feedback">
          <p className="description"> Submit Feedback here!</p>
        </ActiveLink>
      </main>

      <Footer />
    </div>
  )
}
