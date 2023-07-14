'use client'

import { ArrowLeft, ArrowRightCircle, CreditCard, MoreVertical } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import User from '../../../public/user-default.png'
import Navbar from '@/components/HomePage/Navbar'
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const Profile = () => {
  const [isLoading, setIsLoading] = useState(true)
  const { data, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    status !== 'loading' && setIsLoading(false)
  }, [status])

  const handleSignout = async () => {
    await signOut()
  }

  if (status === 'loading') return <p>Hang on there...</p>

  if (status === 'unauthenticated') {
    router.push('/profile/login')
  }

  if (isLoading) return <p>Hang on there...</p>

  return (
    <div className='flex flex-col items-center px-4 py-4 pb-32 lg:mx-auto lg:w-[550px] xl:mx-auto xl:w-[550px] 2xl:mx-auto 2xl:w-[550px]'>
      <div className='bg-gray-200 h-[350px] rounded-3xl w-full flex items-center flex-col'>
        <div className='flex w-full justify-between p-4 items-center'>
          <Link href="/">
            <ArrowLeft />
          </Link>
          <p className='font-bold'>Profile</p>
          <MoreVertical />
        </div>
        <Image width={200} height={200} src={data?.user?.image ? data?.user?.image : User} className='rounded-full' alt="Foto do Usuário" />
        <h1 className='font-bold text-3xl mt-4'>{data?.user?.name}</h1>
        <p className='font-semibold'>{data?.user?.email}</p>
      </div>
      <div className='flex justify-between items-center w-full font-bold mt-4 px-2'>
        <h2>Credit cards</h2>
        <span className='text-green-500 cursor-pointer'>New card</span>
      </div>
      <div className='w-full h-64 mt-2 overflow-y-scroll scrollbar-hide'>
        <div className='flex gap-4 w-full py-4 border-b-2 items-center'>
          <CreditCard />
          <div className='font-semibold text-zinc-700 w-full flex justify-between items-center px-2'>
            <div>
              <p>Card 1</p>
              <span className='text-zinc-400'>.... 7889</span>
            </div>
            <ArrowRightCircle />
          </div>
        </div>
        <div className='flex gap-4 w-full py-4 border-b-2 items-center'>
          <CreditCard />
          <div className='font-semibold text-zinc-700 w-full flex justify-between items-center px-2'>
            <div>
              <p>Card 2</p>
              <span className='text-zinc-400'>.... 5689</span>
            </div>
            <ArrowRightCircle />
          </div>
        </div>
        <div className='flex gap-4 w-full py-4 border-b-2 items-center'>
          <CreditCard />
          <div className='font-semibold text-zinc-700 w-full flex justify-between items-center px-2'>
            <div>
              <p>Card 3</p>
              <span className='text-zinc-400'>.... 5609</span>
            </div>
            <ArrowRightCircle />
          </div>
        </div>
        <div className='flex gap-4 w-full py-4 border-b-2 items-center'>
          <CreditCard />
          <div className='font-semibold text-zinc-700 w-full flex justify-between items-center px-2'>
            <div>
              <p>Card 4</p>
              <span className='text-zinc-400'>.... 1089</span>
            </div>
            <ArrowRightCircle />
          </div>
        </div>
      </div>
      <button className='bg-green-500 p-4 font-bold text-white rounded-full' onClick={handleSignout}>Logout</button>
      <Navbar show={true} />
    </div>
  )
}

export default Profile