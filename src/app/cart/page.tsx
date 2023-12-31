'use client'
import CartItem from '@/components/PageCart/CartItem'
import MoreMenu from '@/components/PageCart/MoreMenu'
import { SneakerType } from '@/types/SneakerType'
import { ArrowLeft, CheckCircle2, MoreVertical, XCircle } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Cart = () => {
  const [data, setData] = useState<SneakerType[]>([])
  const [counpon, setCounpon] = useState<string>('')
  const [subTotal, setSubtotal] = useState<number>(0)
  const [showModal, setShowModal] = useState<boolean>(false)

  useEffect(() => {
    const getCartItems: string | SneakerType[] = localStorage.getItem('cart') || []

    if (typeof getCartItems === 'string') {
      const parsed = JSON.parse(getCartItems)
      setData(parsed)

      const getSubtotal = parsed.reduce((acc: number, obj: SneakerType) => acc + obj.estimatedMarketValue * obj.quantity, 0);

      setSubtotal(getSubtotal)
    }
  }, [])

  useEffect(() => {
    const getSubtotal = data.reduce((acc: number, obj: SneakerType) => acc + obj.estimatedMarketValue * obj.quantity, 0);

    setSubtotal(getSubtotal)
  }, [data])

  return (
    <div className='w-full px-4 py-4 overflow-y-scroll scrollbar-hide flex flex-col 2xl:mx-auto 2xl:w-[550px]'>
      <div className='w-full flex justify-between items-center'>
        <Link href='/'>
          <div className='h-10 w-10 bg-gray-200 flex items-center justify-center rounded-full'>
            <ArrowLeft />
          </div>
        </Link>
        <h1 className='font-bold text-lg'>Cart</h1>
        <div onClick={() => setShowModal(true)} className='cursor-pointer h-10 w-10 bg-gray-200 flex items-center justify-center rounded-full'>
          <MoreVertical />
        </div>
        <MoreMenu setData={setData} setShowModal={setShowModal} show={showModal} />
      </div>
      <div className='mt-6 flex flex-col sm:self-center md:self-center lg:self-center xl:self-center 2xl:self-center sm:w-[330px] md:w-[330px] lg:w-[330px] xl:w-[330px] 2xl:w-[330px] h-96 xxs:h-64 xs:h-80 s:h-[390px] sm:h-[500px] gap-4 overflow-y-scroll scrollbar-hide'>
        {data
          .map((sneaker) => <CartItem setData={setData} subTotal={subTotal} setSubtotal={setSubtotal} key={sneaker.id} sneaker={sneaker} />)}
      </div>
      <p className='font-semibold text-zinc-400 mt-2'>Have a coupon code?</p>
      <div className='relative'>
        <input value={counpon} onChange={(e) => setCounpon(e.target.value)} type='text' className='font-bold uppercase form-input mt-2 px-4 p-3 border w-full rounded-full focus:ring-green-500 focus:border-0' />
        {counpon.toUpperCase() === 'FELPS'
          ? <div className='flex gap-2 text-green-500 font-semibold absolute top-5 right-3'>
            <p>Available</p>
            <CheckCircle2 />
          </div>
          : <div className='flex gap-2 text-red-500 font-semibold absolute top-5 right-3'>
            <p>Not Available</p>
            <XCircle />
          </div>}
      </div>
      <div className='mt-4 font-semibold border-b-2 pb-4 text-sm'>
        <div className='flex justify-between p-2'>
          <p>Subtotal</p>
          <p className='text-base'>{`$ ${subTotal.toFixed(2)}`}</p>
        </div>
        <div className='flex justify-between p-2'>
          <p>Delivery fee</p>
          <p className='text-base'>{data.length > 0 ? `$ ${(data.length + 50).toFixed(2)}` : '$ 0.00'}</p>
        </div>
        <div className='flex justify-between p-2'>
          <p>Discount</p>
          <p className={`font-bold ${counpon.toUpperCase() === 'FELPS' ? 'text-green-500' : 'text-red-500'} text-base`}>{counpon.toUpperCase() === 'FELPS' ? '- $ 200.00' : '- $ 0.00'}</p>
        </div>
      </div>
      <div className='text-lg mt-4 s:mt-2 font-bold p-2 flex justify-between'>
        <p>Total</p>
        {data.length > 0 ? <p className='text-2xl'>{counpon.toUpperCase() === 'FELPS' ? `$ ${(subTotal - 200 + data.length + 50).toFixed(2)}` : `$ ${(subTotal + data.length + 50).toFixed(2)}`}</p> : <p>$ 0.00</p>}
      </div>
      <button className='p-2 mt-16 xxs:mt-8 xs:mt-10 s:mt-6 w-full 2xl:w-80 2xl:self-center 2xl:mt-10 bg-green-500 rounded-full text-white font-bold'>Checkout</button>
    </div>
  )
}

export default Cart