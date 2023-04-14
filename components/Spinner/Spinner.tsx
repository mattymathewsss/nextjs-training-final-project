import Image from 'next/image'

const Spinner = () => {
  return (
    <div className="flex h-screen	w-screen justify-center bg-slate-100">
      <Image src="/assets/spinner.svg" alt="loading" height={100} width={100} />
    </div>
  )
}

export default Spinner
