'use client'

import { ArrowLeft, MoreVertical } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import User from '../../../public/user-default.png'
import Navbar from '@/components/HomePage/Navbar'
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const Profile = () => {
  const { data, status } = useSession()
  const router = useRouter()

  console.log(data)

  if (status === 'loading') return <p>Hang on there...</p>

  if (status === 'unauthenticated') {
    router.push('/profile/login')
  }

  return (
    <div className='flex flex-col items-center px-4 py-4 pb-32 lg:mx-auto lg:w-[550px] xl:mx-auto xl:w-[550px] 2xl:mx-auto 2xl:w-[550px]'>
      <div className='bg-gray-200 h-96 rounded-3xl w-full flex items-center flex-col'>
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
      <button className='bg-green-500 p-4 font-bold text-white rounded-full' onClick={signOut}>Logout</button>
      <Navbar show={true} />
    </div>
  )
}

export default Profile