'use client'
import useCart from '@/hooks/useCart'
import { Home, LucideThumbsUp, ShoppingBag, User } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

interface NavbarProps {
  show: boolean;
}

const Navbar = ({ show }: NavbarProps) => {
  const pathname = usePathname()
  // const { cartItemsQtd } = useCart()

  return (
    <div className='fixed text-white left-1/2 transform -translate-x-1/2 bottom-10 flex items-center justify-center gap-2 w-[240px] h-16 z-10 rounded-full bg-slate-950/90'>
      <Link className={`${pathname === '/' ? 'bg-white text-black' : ''} rounded-full font-bold p-3`} href="/">
        <Home />
      </Link>
      <Link className={`${pathname === '/favorites' ? 'bg-white text-black' : ''} rounded-full font-bold p-3`} href="/favorites">
        <LucideThumbsUp />
      </Link>
      {/* <Link className={`${pathname === '/cart' ? 'bg-white text-black' : ''} p-3 cursor-pointer relative flex rounded-full items-center justify-center`} href="/cart">
        <ShoppingBag />
        {cartItemsQtd > 0
          ? <div className='absolute bg-red-500 rounded-full w-5 h-5 flex items-center justify-center right-[-10px] top-0 text-sm font-bold'>{cartItemsQtd}</div>
          : null
        }
      </Link> */}
      <Link className={`${pathname === '/cart' ? 'bg-white text-black' : ''} rounded-full font-bold p-3`} href="/cart">
        <ShoppingBag />
      </Link>
      <Link className={`${pathname === '/profile' ? 'bg-white text-black' : ''} rounded-full font-bold p-3`} href="/profile">
        <User />
      </Link>
    </div>
  )
}

export default Navbar