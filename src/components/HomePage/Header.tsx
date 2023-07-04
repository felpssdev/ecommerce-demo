'use client'
import React, { useState } from 'react'
import Navbar from './Navbar'
import { ShoppingCart, Menu } from 'lucide-react'

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false)
  return (
    <div className='w-full h-20 py-6 flex justify-between items-center'>
      <div onClick={() => setShowNavbar(prev => !prev)} className='flex md:hidden bg-gray-200 rounded-full items-center h-9 w-9 justify-center'>
        <Menu />
      </div>
      <Navbar show={showNavbar} />
      <div>
        LOGO
      </div>
      <div className='relative flex bg-gray-200 rounded-full items-center h-9 w-9 justify-center'>
        <ShoppingCart />
        <div className='absolute bg-red-500 rounded-full w-5 h-5 flex items-center justify-center right-[-8px] top-0'>0</div>
      </div>
    </div>
  )
}

export default Header