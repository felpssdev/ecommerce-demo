'use client'
import { SneakerType } from '@/types/SneakerType'
import { Minus, Plus } from 'lucide-react';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'

interface CartItemProps {
  sneaker: SneakerType;
  setSubtotal: Dispatch<SetStateAction<number>>;
  subTotal: number;
}

const CartItem = ({ sneaker, subTotal, setSubtotal }: CartItemProps) => {
  const [quantity, setQuantity] = useState<number>(1)

  useEffect(() => {
    setQuantity(sneaker.quantity)
  }, [])

  const plusTotal = () => {
    setSubtotal(subTotal + (quantity * sneaker.estimatedMarketValue - (sneaker.estimatedMarketValue * (quantity - 1))))
    setQuantity(prev => prev + 1)
  }

  const minusTotal = () => {
    if (quantity === 1) return
    setSubtotal(subTotal - sneaker.estimatedMarketValue)
    setQuantity(prev => prev === 1 ? 1 : prev - 1)
  }

  return (
    <div className='flex w-full items-center justify-center'>
      <div className='bg-gray-200 h-28 w-28 rounded-xl p-2'>
        <img src={sneaker.image.thumbnail} />
      </div>
      <div className='p-2 flex flex-col justify-between w-60'>
        <p className='font-semibold text-zinc-400'>{sneaker.name}</p>
        <div className='flex justify-between items-center'>
          <p className='font-bold text-xl'>{`$ ${sneaker.estimatedMarketValue.toFixed(2)}`}</p>
          <div className='flex bg-gray-200 rounded-full p-1 w-24 justify-between'>
            <div onClick={minusTotal} className='bg-white rounded-full text-sm text-green-500'>
              <Minus />
            </div>
            <div className='font-bold'>{quantity}</div>
            <div onClick={plusTotal} className='bg-green-500 rounded-full text-sm text-white'>
              <Plus />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem