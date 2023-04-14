import ArticleCard from 'components/ArticleCard/ArticleCard'
import Banner from 'components/Banner/Banner'
import Button from 'components/Button/Button'
import PrimaryLayout from 'components/Layouts/PrimaryLayout/PrimaryLayout'
import { useSession } from 'next-auth/react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { sanityClient, urlFor } from '../sanity'
import { Post } from '../typings'
import { NextPageWithLayout } from './page'

interface Props {
  posts: [Post]
}

type AppWithLayout = Props & NextPageWithLayout

const Home = ({ posts }: AppWithLayout) => {
  const { data: session, status } = useSession()
  const loading = status === 'loading'

  //dummy data only
  const trendingData = [
    {
      title: 'Here’s How Two New Orleans Teenagers Found a New Proof of the Pythagorean Theorem',
      author: 'Keith McNulty',
      authorImage: 'https://miro.medium.com/v2/resize:fill:132:132/1*5jw92xZWkTltN6nnAF3D1A.png'
    },
    {
      title: 'lack Hole Alert: Initially identified as a galaxy maybe a threat to Earth',
      author: 'Faisal Khan',
      authorImage: 'https://miro.medium.com/v2/resize:fill:132:132/1*zTg8HJw7-OAGn3swR20B2A@2x.jpeg'
    },
    {
      title: 'Teaching ChatGPT to Speak my Son’s Invented Language',
      author: 'Ryszard Szopa ',
      authorImage: 'https://miro.medium.com/v2/resize:fill:132:132/1*7e-0agPPtL2ralWcgyde9Q.jpeg'
    },
    {
      title: 'I’m an ER doctor: Here’s what I found when I asked ChatGPT to diagnose my patients',
      author: 'Inflect Health',
      authorImage: 'https://miro.medium.com/v2/resize:fill:132:132/1*2ywRkIoylLQxGKg9FshvFA.jpeg'
    },
    {
      title: 'My kids and I just played D&D with ChatGPT4 as the DM',
      author: 'Obie Fernandez',
      authorImage: 'https://miro.medium.com/v2/resize:fill:132:132/1*HBnYc_3J-_5uWc2Sbnx0Jg.jpeg'
    },
    {
      title: 'lack Hole Alert: Initially identified as a galaxy maybe a threat to Earth',
      author: 'Faisal Khan',
      authorImage: 'https://miro.medium.com/v2/resize:fill:132:132/1*zTg8HJw7-OAGn3swR20B2A@2x.jpeg'
    },


  ]
  return (
    <>
      <div className="mx-auto" suppressHydrationWarning>
        <Head>
          <title>Medium Blog</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Banner
          backgroundColor="bg-amber-400"
          primaryContent={
            <>
              <h1 className="mb-6 text-7xl">Stay Curious</h1>
              <p className="mb-6 text-xl">
                Discover stories, thinking, and expertise from writers on any
                topic.
              </p>
              <Button
                className="w-40"
                buttonType="btn-primary"
                content="Start Reading"
              />
            </>
          }
          secondaryContent={
            <div className="relative -mt-5 hidden h-96 w-96 md:inline-flex lg:h-96">
              <Image
                src="/assets/medium-logo.png"
                alt="Logo"
                fill
                className="rounded-full"
              />
            </div>
          }
        />

        <section className="container mx-auto mt-5 border-b-1 border-slate-950">
          <div className="flex w-fit content-center">
            <Image
              className="my-auto"
              src="/assets/trending-icon.png"
              alt="Logo"
              width={25}
              height={25}
            />
            <p className="my-auto ml-2 font-medium">Trending on Medium</p>
          </div>
          <div className="my-4 grid grid-cols-3 gap-4">
           
          {
            trendingData.map((data, index) => (
              <div className="flex" key={data.title}>
              <h3 className="mr-3 font-bold text-slate-300">0{index + 1}</h3>
              <ArticleCard 
              title={data.title}
              author={data.author}
              authorImageUrl={data.authorImage}
              />
            </div>
            ))
          }
          </div>
        </section>

        {/* Posts */}
        <div className="container mx-auto mb-10">
          {/* grid grid-cols p-2 sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3 */}
          <div className="grid p-3">
            {posts?.map((post) => ( 
             <>
             <Link href={`/post/${post?.slug.current}`}>
              <div key={post?._id} className="my-10 grid grid-cols-2 gap-2">
                <ArticleCard
                  title={post?.title}
                  url={`/post/${post?.slug.current}`}
                  author={post?.author.name}
                  authorImageUrl={urlFor(post?.author.image).url()!}
                  description={post?.description}
                  size="base"
                />

                <div className="relative h-80 w-full">
                  <Image
                    src={urlFor(post?.mainImage).url()!}
                    alt="Logo"
                    style={{
                      objectFit: 'cover',
                    }}
                    fill
                  />
                </div>
              </div>
             </Link>
             </>
            ))}
          </div>

   
        </div>
      </div>
    </>
  )
}

export default Home

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>
}

export const getServerSideProps = async () => {
  const query = `*[_type=="post"]{
_id,
title,
  slug,
  author -> {
  name,
image
},
description,
mainImage,
slug
}`
  const posts = await sanityClient.fetch(query)
  return {
    props: {
      posts,
    },
  }
}
