'use client'
import Image from 'next/image'
import React, { FormEvent, useEffect, useState } from 'react'
import User from '@/../public/user-default.png'
import { Lock, Mail, UserIcon } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Register = () => {
  const [err, setErr] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const email = (e.target as any)[0].value
    const name = (e.target as any)[1].value
    const password = (e.target as any)[1].value

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          password
        })
      })

      res.status === 201 && router.push('/profile/login?success=Account has been created!')
      res.status === 500 && setErr(true)
    } catch (error) {
      setErr(true)
    }
  }

  useEffect(() => {
    if (err) {
      setTimeout(() => {
        setErr(false)
      }, 5000)
    }
  }, [err])

  return (
    <div className='w-screen h-screen p-4 flex flex-col items-centera justify-center'>
      <div className='h-[50%] w-[80%] self-center flex items-center justify-center relative rounded-3xl shadow-xl'>
        <div className='absolute top-[-40px]'>
          <Image className='shadow-xl rounded-full' src={User} width={100} height={100} alt='User Image' />
        </div>
        <div className='w-full flex flex-col items-center justify-center mt-16'>
          <form onSubmit={handleSubmit} className='w-full flex flex-col gap-4 items-center justify-center'>
            <div className='w-full self-center flex items-center justify-center relativen'>
              <input required type='email' placeholder='email' className='w-[75%] p-4 px-10 font-bold text-zinc-500 placeholder:text-zinc-400 rounded-full border-0 bg-zinc-200 py-2 shadow-md focus:ring-green-500' />
              <Mail className='absolute left-12 text-zinc-700' />
            </div>
            <div className='w-full self-center flex items-center justify-center relative'>
              <input required type='text' placeholder='username' className='w-[75%] p-4 px-9 font-bold text-zinc-500 placeholder:text-zinc-400 rounded-full border-0 bg-zinc-200 py-2 shadow-md focus:ring-green-500' />
              <UserIcon className='absolute left-12 text-zinc-700' />
            </div>
            <div className='w-full self-center flex items-center justify-center relative'>
              <input required type='password' placeholder='password' className='w-[75%] p-4 px-9 font-bold text-zinc-500 placeholder:text-zinc-400 rounded-full border-0 bg-zinc-200 py-2 shadow-md focus:ring-green-500' />
              <Lock className='absolute left-12 text-zinc-700' />
            </div>
            <button className='font-bold text-white px-3 py-2 rounded-full bg-green-500 mt-3' type='submit'>Register</button>
          </form>
          <div className='space-x-2 text-sm mt-4 font-semibold text-center'>
            <span className='text-zinc-400'>Already have an account?</span>
            <Link href="/profile/login" className='text-green-500'>Sign-in!</Link>
            {err && <p className='text-red-500 text-lg uppercase'>Something went wrong!</p>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register