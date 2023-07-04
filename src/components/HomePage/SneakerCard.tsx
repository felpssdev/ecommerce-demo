'use client'
import { ThumbsDown, ThumbsUp } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import SneakerCardLoader from '@/loaders/SneakerCardLoader';
import useFavorite from '../../hooks/useFavorite';
import { SneakerType } from '@/types/SneakerType'

interface SneakerCardProps {
  sneaker: {
    id: string;
    name: string;
    estimatedMarketValue: number;
    image: {
      thumbnail: string;
    }
  }
}

const SneakerCard = ({ sneaker }: SneakerCardProps) => {
  const [isLoading, setIsLoading] = useState(true)
  const { addToFavorites, isFavorite, setIsFavorite } = useFavorite()
  const router = useRouter()

  useEffect(() => {
    const oldFavorites = localStorage.getItem('favorite-sneakers')

    if (typeof oldFavorites === 'string') {
      const parsed = JSON.parse(oldFavorites)
      setIsFavorite(parsed.some((favSneaker: SneakerType) => favSneaker.id === sneaker.id))
    }

    const loadSneakers = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(loadSneakers)

  }, [])

  if (isLoading) return <SneakerCardLoader />

  return (
    <div className='cursor-pointer h-fit w-90 flex flex-col items-center justify-center rounded-xl'>
      <div className='relative w-full h-fit rounded-xl bg-gray-200 flex items-center justify-center'>
        <img onClick={() => router.push(`/details/${sneaker.id}`)} src={sneaker.image.thumbnail} alt={sneaker.name} />
        <div onClick={() => addToFavorites(sneaker)} className='absolute cursor-pointer bg-white top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full'>
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