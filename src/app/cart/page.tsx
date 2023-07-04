'use client'
import CartItem from '@/components/PageCart/CartItem'
import { SneakerType } from '@/types/SneakerType'
import { ArrowLeft, CheckCircle2, MoreVertical } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Cart = () => {
  const [data, setData] = useState<SneakerType[]>([])

  useEffect(() => {
    const getCartItems: string | SneakerType[] = localStorage.getItem('cart') || []

    if (typeof getCartItems === 'string') {
      const parsed = JSON.parse(getCartItems)
      setData(parsed)
    }
  }, [])

  return (
    <div className='w-full px-4 py-4 overflow-y-scroll scrollbar-hide'>
      <div className='w-full flex justify-between items-center'>
        <Link href='/'>
          <div className='h-10 w-10 bg-gray-200 flex items-center justify-center rounded-full'>
            <ArrowLeft />
          </div>
        </Link>
        <h1 className='font-bold text-lg'>Cart</h1>
        <div className='h-10 w-10 bg-gray-200 flex items-center justify-center rounded-full'>
          <MoreVertical />
        </div>
      </div>
      <div className='mt-6 flex flex-col h-96 gap-4 overflow-y-scroll scrollbar-hide'>
        {data.map((sneaker) => <CartItem key={sneaker.id} sneaker={sneaker} />)}
      </div>
      <p className='font-semibold text-zinc-400 mt-2'>Have a coupon code?</p>
      <div className='relative'>
        <input type='text' className='font-bold uppercase form-input mt-2 px-4 p-3 border w-full rounded-full focus:ring-green-500 focus:border-0' />
        <div className='flex gap-2 text-green-500 font-semibold absolute top-5 right-3'>
          <p>Available</p>
          <CheckCircle2 />
        </div>
      </div>
      <div className='mt-4 font-semibold border-b-2 pb-4 text-sm'>
        <div className='flex justify-between p-2'>
          <p>Subtotal</p>
          <p className='text-base'>$ 1200.00</p>
        </div>
        <div className='flex justify-between p-2'>
          <p>Delivery fee</p>
          <p className='text-base'>$ 0.00</p>
        </div>
        <div className='flex justify-between p-2'>
          <p>Discount</p>
          <p className='font-bold text-green-500 text-base'>- $ 200.00</p>
        </div>
      </div>
      <div className='text-lg mt-4 font-bold p-2 flex justify-between'>
        <p>Total</p>
        <p className='text-2xl'>$ 1000.00</p>
      </div>
      <button className='p-2 mt-20 w-full bg-green-500 rounded-full text-white font-bold'>Checkout</button>
    </div>
  )
}

export default Cart