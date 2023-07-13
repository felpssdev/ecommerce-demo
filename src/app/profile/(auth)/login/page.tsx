'use client'
import Image from 'next/image'
import User from '@/../public/user-default.png'
import Google from '@/../public/google-logo.png'
import { Lock, Mail } from 'lucide-react'
import Link from 'next/link'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const Login = () => {
  const { status } = useSession()
  const router = useRouter()

  if (status === 'loading') return <p>Hang on there...</p>

  const handleLogin = async (e) => {
    e.preventDefault()

    const email = e.target[0].value
    const password = e.target[1].value

    signIn('credentials', { email, password })
  }

  if (status === 'authenticated') router.push('/profile')

  return (
    <div className='w-screen h-screen p-4 flex flex-col items-centera justify-center'>
      <div className='h-[50%] w-[85%] self-center flex flex-col items-center justify-center relative rounded-3xl shadow-xl'>
        <div className='absolute top-[-40px]'>
          <Image className='shadow-xl rounded-full' src={User} width={100} height={100} alt='User Image' />
        </div>
        <div className='w-full flex flex-col items-center justify-center mt-16'>
          <form onSubmit={handleLogin} className='w-full flex flex-col gap-4 items-center justify-center'>
            <div className='w-full self-center flex items-center justify-center relative'>
              <input required type='email' placeholder='email' className='w-[75%] p-4 px-10 font-bold text-zinc-500 placeholder:text-zinc-400 rounded-full border-0 bg-zinc-200 py-2 shadow-md focus:ring-green-500' />
              <Mail className='absolute left-12' />
            </div>
            <div className='w-full self-center flex items-center justify-center relative'>
              <input required type='password' placeholder='password' className='w-[75%] p-4 px-9 font-bold text-zinc-500 placeholder:text-zinc-400 rounded-full border-0 bg-zinc-200 py-2 shadow-md focus:ring-green-500' />
              <Lock className='absolute left-12' />
            </div>
            <button className='font-bold text-white px-5 py-2 rounded-full bg-green-500 mt-3' type='submit'>Login</button>
          </form>
          <div className='space-x-2 text-sm mt-4 font-semibold text-center'>
            <span className='text-zinc-400'>{"Don't have an account?"}</span>
            <Link href="/profile/register" className='text-green-500'>Sign-up!</Link>
          </div>
          <div className="flex items-center mt-6">
            <div className="flex-grow border border-t w-28 border-gray-300"></div>
            <span className="px-1 text-gray-500 font-bold">or</span>
            <div className="flex-grow border border-t w-28 border-gray-300"></div>
          </div>

          <div className='border-2 cursor-pointer rounded w-60 py-2 bg-gray-200 text-zinc-500 font-bold flex items-center justify-center gap-2'>
            <Image src={Google} width={20} height={20} alt='google logo' />
            <span onClick={() => signIn('google')}>Continue with Google</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login