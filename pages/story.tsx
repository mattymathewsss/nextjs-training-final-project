import Header from 'components/Header/Header'
import Spinner from 'components/Spinner/Spinner'
import { getSession, signIn } from 'next-auth/react'
import Head from 'next/head'
import { useEffect, useState } from 'react'
const  Story = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const securePage = async () => {
      const session = await getSession()
      if (!session) {
        signIn().catch((error) => console.log(error))
      } else {
        setLoading(false)
      }
    }
    securePage().catch((error) => console.log(error))
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

export default Story


