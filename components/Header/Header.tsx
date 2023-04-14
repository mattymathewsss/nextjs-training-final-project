import Button from 'components/Button/Button'
import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'

export interface IHeader {}

const Header = ({  }: IHeader) => {
  const { data: session, status } = useSession()
  const loading = status === 'loading'

  const navLinks = [
    {
      title: 'Our story',
      url: '/story',
    },
    {
      title: 'Membership',
      url: '/membership',
    },
    {
      title: 'Write',
      url: '/write',
    },
    {
      title: 'Get Started',
      url: '/get-started',
    },
  ]

  return (
    <header className='sticky top-0 bg-white border-b-1 border-slate-950 w-100 z-50'>
    
      <div className="container mx-auto flex justify-between p-5">
        <div className="flex items-center space-x-5">
          <Link href="/">
          <Image
        className='my-auto'
          src='https://links.papareact.com/yvf'
          alt="Logo"
          width={180}
          height={180}
          priority
        />
            {/* <img
              className="w-44 cursor-pointer object-contain"
              src="https://links.papareact.com/yvf"
              alt=""
            /> */}
          </Link>
        </div>
        <div
          className={`flex items-center space-x-5 ${
            !session && loading
              ? 'delay-10 opacity-0 transition-all ease-in'
              : 'opacity-1 delay-10	transition-all ease-in'
          }`}
        >
          <div className="hidden items-center space-x-5 md:inline-flex">
            {navLinks.map((link) => (
              <Link key={link.title} id={link.title} href={link.url}>
                <p className="font-semibold">{link.title}</p>
              </Link>
            ))}
          </div>
          {!loading && !session && (
            <Link href="">
              <Button
                content={<p>Sign In</p>}
                buttonType="btn-primary"
                handleClick={(e) => {
                  e.preventDefault()
                  signIn().catch((error) => console.log(error))
                }}
              />
            </Link>
          )}
          {session && (
            <>
            
            <Link href="">
                 <p className='font-medium border-x-2 px-2 border-slate-950'>{session ? `Welcome, ${session?.user?.name || ''}` : ''}</p>
                 </Link>
            <Link href="">
              <Button
                content={<p>Sign Out</p>}
                buttonType="btn-primary"
                handleClick={(e) => {
                  e.preventDefault()
                  signOut().catch((error) => console.log(error))
                }}
              />
            </Link>
            </>
          )}
        </div>
      </div>
  
    </header>
  )
}

export default Header
