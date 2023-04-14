import Header from 'components/Header/Header'
import Spinner from 'components/Spinner/Spinner'
import { getSession, signIn } from 'next-auth/react'
import Head from 'next/head'
import { useEffect, useState } from 'react'
function story() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const securePage = async () => {
      const session = await getSession()
      if (!session) {
        signIn()
      } else {
        setLoading(false)
      }
    }
    securePage()
  }, [])
  if (loading) {
    return <Spinner/>
  }
  return (
    <>
      <div className="mx-auto max-w-7xl">
        <Head>
          <title>Medium Blog</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <div>In story page</div>
      </div>
    </>
  )
}

export default story


