'use client'
import React, { useEffect, useState } from 'react'
import { ShoppingCart, Menu } from 'lucide-react'
import { useRouter } from 'next/navigation'
import Navbar from './Navbar'

const Header = () => {
  const [cartItemsQtd, setCartItemsQtd] = useState(0)
  const router = useRouter()

  useEffect(() => {
    const getQtd = localStorage.getItem('cart') || 0

    if (typeof getQtd === 'string') {
      const parsed = JSON.parse(getQtd)
      setCartItemsQtd(parsed.length)
    }
  }, [])

  return (
    <div className='w-full h-20 py-6 flex justify-between items-center'>
      <div className='flex md:hidden bg-gray-200 rounded-full items-center h-9 w-9 justify-center'>
        <Menu />
      </div>
      <div>
        LOGO
      </div>
      <div onClick={() => router.push('/cart')} className='cursor-pointer relative flex bg-gray-200 rounded-full items-center h-9 w-9 justify-center'>
        <ShoppingCart />
        {cartItemsQtd > 0
          ? <div className='absolute bg-red-500 rounded-full w-5 h-5 flex items-center justify-center right-[-10px] top-0 text-sm font-bold'>{cartItemsQtd}</div>
          : null
        }
      </div>
      {/* <Navbar show={true} /> */}
    </div>
  )
}

export default Header