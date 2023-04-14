import { type ReactNode } from 'react'

export interface IBanner {
  primaryContent: ReactNode
  secondaryContent: ReactNode
  backgroundColor: string
}

const Banner = ({ primaryContent, secondaryContent, backgroundColor }: IBanner) => {
  return (
    <section className={`flex h-96 w-full content-center ${backgroundColor} p-5 border border-b-1 border-gray-950`}>
      <div className="container mx-auto flex content-center justify-center">
        <div className="my-auto flex-1">
         {primaryContent}
        </div>
        <div className="my-auto flex-1">
          {secondaryContent}

        </div>
      </div>
    </section>
  )
}

export default Banner
