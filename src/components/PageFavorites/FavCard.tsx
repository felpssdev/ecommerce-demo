'use client'
import { SneakerTypeNoQuantity } from '@/types/SneakerType'
import { ArrowRight, Trash } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { Dispatch, SetStateAction, useState } from 'react'

interface FavCardProps {
  sneaker: SneakerTypeNoQuantity;
  setData: Dispatch<SetStateAction<SneakerTypeNoQuantity[]>>
}

const FavCard = ({ sneaker, setData }: FavCardProps) => {
  const [showRemove, setShowRemove] = useState(false)
  const router = useRouter()

  const handleRemoveFromFavs = () => {
    const getFavorites = localStorage.getItem('favorite-sneakers')

    if (typeof getFavorites === 'string') {
      let parsed = JSON.parse(getFavorites)
      parsed = parsed.filter((snk: SneakerTypeNoQuantity) => snk.id !== sneaker.id)
      localStorage.setItem('favorite-sneakers', JSON.stringify(parsed))
      setData(parsed)
    }
  }

  return (
    <div className={showRemove ? 'flex scrollbar-hide min-h-[112px] translate-x-24 w-[423px] xs:w-[443px] s:w-[513px] overflow-x-hidden self-end items-center justify-center transition duration-150 ease-linear' : 'flex scrollbar-hide translate-x-2 w-[423px] xs:w-[443px] s:w-[513px] overflow-x-hidden self-end items-center justify-center min-h-[112px] transition-all duration-150'}>
      <div className='cursor-pointer bg-gradient-to-r from-red-400 via-red-200 h-28 to-white w-24 flex items-center pl-3 justify-center text-red-700'>
        <Trash onClick={handleRemoveFromFavs} />
      </div>
      <div className='bg-gray-200 h-28 w-28 rounded-xl p-2'>
        <Image width={112} height={112} alt={sneaker.name} onClick={() => setShowRemove(prev => !prev)} src={sneaker.image.thumbnail} className='cursor-pointer' />
      </div>
      <div className='p-2 flex flex-col justify-between w-60'>
        <p className='font-semibold text-zinc-400'>{sneaker.name}</p>
        <div className='flex justify-between items-center'>
          <p className='font-bold text-xl'>{`$ ${sneaker.estimatedMarketValue.toFixed(2)}`}</p>
        </div>
        <div onClick={() => router.push(`/details/${sneaker.id}`)} className='cursor-pointer flex gap-1 text-green-500 font-bold text-sm self-end items-center justify-center'>
          <p>See details</p>
          <ArrowRight className='h-5 w-5' />
        </div>
      </div>
    </div>
  )
}

export default FavCard