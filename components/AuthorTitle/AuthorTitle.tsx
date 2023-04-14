import Image from 'next/image'

export interface IAuthorTitle {
  name: string
  imageUrl: string
}

const AuthorTitle = ({ name, imageUrl }: IAuthorTitle) => {
  return (
    <div className="flex w-fit content-center">
      {
        imageUrl &&    <Image
        className='my-auto'
          src={imageUrl}
          alt="Logo"
          width={0}
          height={0}
          style={{
            width: '20px',
            height: '20px',
            objectFit: 'cover',
            borderRadius: '50%',
          }}
        />
      }
      <small className='ml-2 my-auto font-medium'>{name}</small>
    </div>
  )
}

export default AuthorTitle
