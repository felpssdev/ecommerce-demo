'use client'
import { SneakerType } from '@/types/SneakerType'
import { Minus, Plus, Trash } from 'lucide-react'
import React, { Dispatch, SetStateAction, useEffect, useState, memo } from 'react'

interface CartItemProps {
  sneaker: SneakerType;
  setSubtotal: Dispatch<SetStateAction<number>>;
  subTotal: number;
  setData: Dispatch<SetStateAction<SneakerType[]>>;
}

const CartItem = memo(function CartItemComponent({ sneaker, subTotal, setSubtotal, setData }: CartItemProps) {
  const [quantity, setQuantity] = useState<number>(1)
  const [showRemove, setShowRemove] = useState(false)

  useEffect(() => {
    setQuantity(sneaker.quantity)
  }, [])

  const plusTotal = () => {
    setSubtotal(subTotal + (quantity * sneaker.estimatedMarketValue - (sneaker.estimatedMarketValue * (quantity - 1))))
    setQuantity(prev => prev + 1)
  }

  const minusTotal = () => {
    if (quantity === 1) {
      setShowRemove(true)
    } else {
      setSubtotal(subTotal - sneaker.estimatedMarketValue)
      setQuantity(prev => prev - 1)
    }
  }

  const handleRemoveFromCart = () => {
    const getCartItems: string | SneakerType[] = localStorage.getItem('cart') || []

    if (typeof getCartItems === 'string') {
      let parsed = JSON.parse(getCartItems)
      parsed = parsed.filter((snk: SneakerType) => snk.id !== sneaker.id)
      localStorage.setItem('cart', JSON.stringify(parsed))
      setData(parsed)
    }
  }

  return (
    <div className={showRemove ? 'flex scrollbar-hide min-h-[115px] translate-x-24 w-fit overflow-x-hidden self-end items-center justify-center transition duration-150 ease-linear' : 'flex scrollbar-hide translate-x-2 w-fit overflow-x-hidden self-end items-center justify-center min-h-[115px] transition-all duration-150'}>
      <div onClick={handleRemoveFromCart} className='cursor-pointer bg-gradient-to-r from-red-400 via-red-200 h-28 to-white w-24 flex items-center pl-3 justify-center text-red-700'>
        <Trash />
      </div>
      <div className='bg-gray-200 h-28 w-28 rounded-xl p-2'>
        <img onClick={() => setShowRemove(prev => !prev)} src={sneaker.image.thumbnail} className='cursor-pointer' />
      </div>
      <div className='p-2 flex flex-col justify-between w-60'>
        <p className='font-semibold text-zinc-400'>{sneaker.name}</p>
        <div className='flex justify-between items-center'>
          <p className='font-bold text-xl'>{`$ ${sneaker.estimatedMarketValue.toFixed(2)}`}</p>
          <div className='flex bg-gray-200 rounded-full p-1 w-24 justify-between'>
            <div onClick={minusTotal} className='bg-white rounded-full text-sm text-green-500 cursor-pointer'>
              <Minus />
            </div>
            <div className='font-bold'>{quantity}</div>
            <div onClick={plusTotal} className='bg-green-500 rounded-full text-sm text-white cursor-pointer'>
              <Plus />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})

export default CartItem