import Link from 'next/link'
import React from 'react'

interface NavbarProps {
  show: boolean;
}

// Não utilizada

const Navbar = ({ show }: NavbarProps) => {
  return (
    <div className='fixed text-white bottom-10 flex w-[330px] h-24 z-10 rounded-full bg-slate-950 justify-between'>
      <Link href="/"></Link>
      <Link href="/cart">Products</Link>
    </div>
  )
}

export default Navbar