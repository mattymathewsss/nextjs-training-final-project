import { signIn } from 'next-auth/react'

export interface IBtnLogn {
  provider: {name: string, id: string},
   bgColor: string,
   txtColor: string

}

const BtnLogin = ({ provider, bgColor, txtColor } : IBtnLogn) => {
  return (
    <div>
      <button
        className="btn w-100 my-2 py-3"
        style={{ background: `${bgColor}`, color: `${txtColor}` }}
        onClick={() => {
          signIn(provider.id).catch((error) => console.log(error))
        }}
      >
        Sign in with {provider.name}
      </button>
    </div>
  )
}

BtnLogin.defaultProps = {
  txtColor: '#eee',
}
export default BtnLogin
