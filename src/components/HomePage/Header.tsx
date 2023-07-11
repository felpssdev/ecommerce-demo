import React from 'react'
import Logo from '../../../public/logo.jpg'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='w-full flex justify-center items-center'>
      <Image src={Logo} width={200} height={200} alt='Logo' />
    </div>
  )
}

export default Header