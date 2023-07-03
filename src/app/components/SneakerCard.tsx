'use client'
import { ThumbsDown, ThumbsUp } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

interface SneakerCardProps {
  sneaker: {
    id: string;
    name: string;
    estimatedMarketValue: number;
  }
}

const SneakerCard = ({ sneaker }: SneakerCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false)
  const router = useRouter()

  return (
    <div onClick={() => router.push(`/details/${sneaker.id}`)} className='cursor-pointer h-fit w-90 flex flex-col items-center justify-center rounded-xl'>
      <div className='relative w-full h-fit rounded-xl bg-gray-300 flex items-center justify-center'>
        <img src={sneaker.image.thumbnail} alt={sneaker.name} />
        <div onClick={() => setIsFavorite(prev => !prev)} className='absolute cursor-pointer bg-white top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full'>
          {isFavorite ? <ThumbsUp /> : <ThumbsDown />}
        </div>
      </div>
      <div className='w-full mt-4'>
        <h2 className='font-bold'>{sneaker.name}</h2>
        <h3 className='font-bold text-2xl'>{`$ ${sneaker.estimatedMarketValue.toFixed(2)}`}</h3>
      </div>
    </div>
  )
}

export default SneakerCard