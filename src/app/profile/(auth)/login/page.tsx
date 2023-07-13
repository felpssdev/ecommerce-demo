'use client'
import Image from 'next/image'
import User from '@/../public/user-default.png'
import { Lock, Mail, UserIcon } from 'lucide-react'
import Link from 'next/link'

const Login = () => {
  return (
    <div className='w-screen h-screen p-4 flex flex-col items-centera justify-center'>
      <div className='h-[40%] w-[85%] self-center flex items-center justify-center relative rounded-3xl shadow-xl'>
        <div className='absolute top-[-40px]'>
          <Image className='shadow-xl rounded-full' src={User} width={100} height={100} alt='User Image' />
        </div>
        <div className='w-full flex flex-col items-center justify-center mt-16'>
          <form className='w-full flex flex-col gap-4 items-center justify-center'>
            <div className='w-full self-center flex items-center justify-center relative'>
              <input required type='email' placeholder='email' className='w-[75%] p-4 px-10 font-bold text-zinc-500 placeholder:text-zinc-400 rounded-full border-0 bg-zinc-200 py-2 shadow-md focus:ring-green-500' />
              <Mail className='absolute left-12' />
            </div>
            <div className='w-full self-center flex items-center justify-center relative'>
              <input required type='password' placeholder='password' className='w-[75%] p-4 px-9 font-bold text-zinc-500 placeholder:text-zinc-400 rounded-full border-0 bg-zinc-200 py-2 shadow-md focus:ring-green-500' />
              <Lock className='absolute left-12' />
            </div>
            <button className='font-bold text-white px-5 py-2 rounded-full bg-green-500 mt-5' type='submit'>Login</button>
          </form>
          <div className='space-x-2 text-sm mt-4 font-semibold text-center'>
            <span className='text-zinc-400'>Doesn't have an account?</span>
            <Link href="/profile/login" className='text-green-500'>Sign-up!</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login