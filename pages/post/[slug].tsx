import Header from 'components/Header/Header'
import Spinner from 'components/Spinner/Spinner'
import { type GetStaticProps } from 'next'
import { getSession, signIn } from 'next-auth/react'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useForm, type SubmitHandler } from 'react-hook-form'
import PortableText from 'react-portable-text'
import { sanityClient, urlFor } from '../../sanity'
import { Post } from '../../typings'
// import {} from 'next-auth/client'
interface Props {
  post: Post
}

interface IFormInput {
  _id: string
  name: string
  email: string
  comment: string
}

function Post({ post }: Props) {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(true)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>()

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    fetch('/api/createComment', {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then(() => {
        console.log(data)
        setSubmitted(true)
      })
      .catch((err) => {
        console.log(err)
        setSubmitted(false)
      })
  }

  useEffect(() => {
    const securePage = async () => {
      const session = await getSession()
      if (!session) {
        await signIn()
      } else {
        setLoading(false)
      }
    }
    securePage().catch((error) => console.log(error))
  }, [])
  if (loading) {
    return <Spinner />
  }
  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl">
        <div className="relative h-96 w-full object-cover">
          <Image
            src={urlFor(post.mainImage).url() || ''}
            alt="Logo"
            objectFit="cover"
            fill
          />
        </div>

        <article className="mx-auto max-w-3xl p-5">
          <h1 className="mb-3 mt-10 text-3xl ">{post.title}</h1>
          <h2 className="mb-2 text-xl font-light text-gray-500">
            {post.description}
          </h2>
          <div className="flex items-center space-x-2">
            <Image
              className="my-auto"
              src={urlFor(post.author.image).url() || ''}
              alt="Logo"
              width={0}
              height={0}
              style={{
                width: '30px',
                height: '30px',
                objectFit: 'cover',
                borderRadius: '50%',
              }}
              priority
            />

            <p className="text-sm font-extralight">
              Blog post by{' '}
              <span className="text-green-600">{post.author.name}</span> -
              published at {new Date(post._createdAt).toLocaleString()}
            </p>
          </div>
          <div className="mt-10">
            <PortableText
              dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
              projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
              content={post.body}
              serializers={{
                h1: (props: any) => (
                  <h1 className="my-5 text-2xl font-bold" {...props} />
                ),
                h2: (props: any) => (
                  <h2 className="my-5 text-xl font-bold" {...props} />
                ),
                li: ({ children }: any) => (
                  <li className="ml-4 list-disc">{children}</li>
                ),
                link: ({ href, children }: any) => (
                  <a href={href} className="text-blue-500 hover:underline">
                    {children}
                  </a>
                ),
              }}
            />
          </div>
        </article>
        <hr className="mx-auto my-5 max-w-lg border border-yellow-500" />
        {submitted ? (
          <div className="mx-auto my-10 flex max-w-2xl flex-col bg-yellow-500 p-10 text-white">
            <h3 className="text-3xl font-bold">
              Thank you for submitting your comment!
            </h3>
            <p>Once it has been approved, it will appear below!</p>
          </div>
        ) : (
          <form
            className="mx-auto mb-10 flex max-w-2xl flex-col p-5"
            onSubmit={() => handleSubmit(onSubmit)}
          >
            <h3 className="text-sm text-yellow-500">Enjoyed this article?</h3>
            <h4 className="text-3xl font-bold">Leave a comment below!</h4>
            <hr className="mt-2 py-3" />
            <input
              type="hidden"
              {...register('_id')}
              name="_id"
              value={post._id}
            />
            <label className="mb-5 block">
              <span className="text-gray-700">Name</span>
              <input
                {...register('name', { required: true })}
                className="form-input mt-1 block w-full rounded border px-3 py-2 shadow ring-yellow-500"
                placeholder="John Appleseed"
                type="text"
              />
            </label>
            <label className="mb-5 block">
              <span className="text-gray-780">Email</span>
              <input
                {...register('email', { required: true })}
                className="form-input mt-1 block w-full rounded border px-3 py-2 shadow ring-yellow-500"
                placeholder="John Appleseed"
                type="text"
              />
            </label>

            <label className="mb-5 block">
              <span className="text-gray-700">Comment</span>
              <textarea
                {...register('comment', { required: true })}
                className="form-input mt-1 block w-full rounded border px-3 py-2 shadow ring-yellow-500"
                placeholder="John Appleseed"
                rows={8}
              />
            </label>
            <div className="flex flex-col p-5">
              {errors.name && <p className="text-red-500">Name is required</p>}
              {errors.email && (
                <p className="text-red-500">Email is required</p>
              )}
              {errors.comment && (
                <p className="text-red-500">Comment is required</p>
              )}
            </div>
            <input
              type="submit"
              className="focus:shadow-outline cursor-pointer rounded bg-yellow-500 px-4 py-2 font-bold text-white shadow hover:bg-yellow-400 focus:outline-none"
            />
          </form>
        )}

        {/* Comment */}
        <div className="mx-auto my-5 flex max-w-2xl flex-col space-y-2 p-10 shadow shadow-yellow-500">
          <h3>Comments</h3>
          <hr />
          {post.comments.map((comment) => (
            <div key={comment._id}>
              <p>
                <span className="text-yellow-500"> {comment.name}:</span>{' '}
                {comment.comment}
              </p>
            </div>
          ))}
        </div>
      </main>
    </>
  )
}

export default Post

export const getStaticPaths = async () => {
  const query = `*[_type=='post']{
        _id,
        slug{
            current
        }
    }    
    `
  const posts: Array<Post> = await sanityClient.fetch(query) 


  const paths = posts?.map((post: Post) => ({
    params: {  
      slug: post.slug.current,
    },
  }))

  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `*[_type=='post' && slug.current==$slug][0]{
        _id,
        _createdAt,
        title,
        author->{
            name,
            image
        },
        'comments':*[_type=='comment' && 
         post._ref==^._id &&
         approved ==true]
        ,
        description,
        mainImage,
        slug,
        body,
        
    }    
    `
  const post = await sanityClient.fetch(query, {
    slug: params?.slug,
  })

  if (!post) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      post,
    },
    revalidate: 60, //after 60 seconds, it will update the old cached version
  }
}
