'use client'
import { Home, LucideThumbsUp, ShoppingBag, XCircle } from 'lucide-react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation';
import React from 'react'

interface NavbarProps {
  show: boolean;
}

// Não utilizada

const Navbar = ({ show }: NavbarProps) => {
  const pathname = usePathname()

  return (
    <div className='fixed text-white bottom-10 flex items-center justify-center gap-6 w-[300px] h-20 z-10 rounded-full bg-slate-950/90'>
      <Link className={`${pathname === '/' ? 'bg-white text-black' : ''} rounded-full font-bold p-2`} href="/">
        <Home />
      </Link>
      <Link className={`${pathname === '/favorites' ? 'bg-white text-black' : ''} rounded-full font-bold p-2`} href="/favorites">
        <LucideThumbsUp />
      </Link>
      <Link className={`${pathname === '/cart' ? 'bg-white text-black' : ''} rounded-full font-bold p-2`} href="/cart">
        <ShoppingBag />
      </Link>
      <div className='text-red-500 font-bold p-2 cursor-pointer'>
        <XCircle />
      </div>
    </div>
  )
}

export default Navbar