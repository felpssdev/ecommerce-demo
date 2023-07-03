'use client'
import { sneakersData } from '@/app/data/sneakersData'
import { ArrowLeft, MoreVertical, Star, ThumbsUp } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Details = ({ params }) => {
  const [data, setData] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const waitSneaker = setTimeout(() => {
      const sneaker = sneakersData.filter((sneaker) => sneaker.id === params.id)
      setData(sneaker[0])
      setIsLoading(false)
    }, 1000)
    return () => clearTimeout(waitSneaker)
  }, [])

  if (isLoading) return <>Carregando...</>

  return (
    <div className='flex flex-col items-center px-4 pt-4'>
      <div className='bg-gray-300 h-fit rounded-3xl'>
        <div className='flex w-full justify-between p-4 items-center'>
          <Link href="/">
            <ArrowLeft />
          </Link>
          <p className='font-bold'>Sneaker Detail</p>
          <MoreVertical />
        </div>
        <img src={data.image.thumbnail} />
      </div>
      <div className='w-full flex justify-between mt-6 px-2'>
        <div>
          <p className='font-bold'>{data.name}</p>
          <p className='font-bold text-3xl mt-4'>{`$ ${data.estimatedMarketValue.toFixed(2)}`}</p>
        </div>
        <div>
          <ThumbsUp />
        </div>
      </div>
      <div className='flex gap-4 w-full p-2 border-b-2 pb-10'>
        <div className='border-2 rounded-full p-1 box-border font-semibold'>{`${Math.floor(Math.random() * 20)} pairs left`}</div>
        <div className='border-2 rounded-full p-1 box-border font-semibold'>{`sold ${Math.floor(Math.random() * 20)}`}</div>
        <div className='flex items-center justify-center gap-1 border-2 rounded-full p-1 box-border'><Star />{`${(Math.random() * 5).toFixed(1)} (${Math.floor(Math.random() * 100)}) reviews`}</div>
      </div>
    </div>
  )
}

export default Details