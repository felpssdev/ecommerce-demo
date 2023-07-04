import { SneakerType } from '@/types/SneakerType'
import { Minus, Plus } from 'lucide-react';
import React from 'react'

interface CartItemProps {
  sneaker: SneakerType;
}

const CartItem = ({ sneaker }: CartItemProps) => {
  return (
    <div className='flex w-full items-center justify-center'>
      <div className='bg-gray-200 h-28 w-28 rounded-xl p-2'>
        <img src={sneaker.image.thumbnail} />
      </div>
      <div className='p-2 flex flex-col justify-between'>
        <p className='font-semibold text-zinc-400'>{sneaker.name}</p>
        <div className='flex justify-between items-center'>
          <p className='font-bold text-xl'>{`$ ${sneaker.estimatedMarketValue.toFixed(2)}`}</p>
          <div className='flex bg-gray-200 rounded-full p-1 w-24 justify-between'>
            <div className='bg-white rounded-full text-sm text-green-500'>
              <Minus />
            </div>
            <div className='font-bold'>0</div>
            <div className='bg-green-500 rounded-full text-sm text-white'>
              <Plus />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem