import AuthorTitle from '../AuthorTitle/AuthorTitle'
import Link from 'next/link'

export interface IArticleCard {
  title: string
  url?: string
  author: string
  authorImageUrl: string
  description?: string
  size?: string
}

const ArticleCard = ({
  url,
  title,
  author,
  authorImageUrl,
  description,
  size,
}: IArticleCard) => {
  console.log(url)
  return (
    <div className="w-full">
      <AuthorTitle name={author} imageUrl={authorImageUrl} />
      <Link href={url || ''}>
        <h5
          className={`line-clamp-2 ${
            size === 'base' ? 'text-2xl' : 'text-xl'
          } my-2 font-bold`}
        >
          {title}
        </h5>
      </Link>
      {size === 'base' ? (
        <div><p className="mb-2 text-slate-500">{description}</p></div>
      ) : null}
      <div className="text-slate-500">
        <small>March {Math. floor((Math. random()*10))}</small>
        <span className="mx-2">·</span>
        <small>{Math. floor((Math. random()*10))} min Read</small>
      </div>
    </div>
  )
}

export default ArticleCard
