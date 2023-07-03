import Link from 'next/link'
import React from 'react'

interface NavbarProps {
  show: boolean;
}

const Navbar = ({ show }: NavbarProps) => {
  return (
    <div className={`gap-6 text-gray-500 absolute left-[-1000px] md:flex ${show && 'left-10'}`}>
      <Link href="/">Home</Link>
      <Link href="/products">Products</Link>
      <Link href="#brands">Brands</Link>
    </div>
  )
}

export default Navbar