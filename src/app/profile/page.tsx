import { ArrowLeft, MoreVertical } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import User from '../../../public/user-default.png'

const Profile = () => {
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
        <Image width={200} height={200} src={User} alt="Foto do Usuário" />
      </div>
    </div>
  )
}

export default Profile