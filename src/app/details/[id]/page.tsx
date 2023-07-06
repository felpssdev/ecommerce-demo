'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { ArrowLeft, MessageCircle, MoreVertical, ShoppingBag, ThumbsDown, ThumbsUp } from 'lucide-react'
import { sneakersData } from '@/data/sneakersData'
import useFavorite from '@/hooks/useFavorite'
import { SneakerType } from '@/types/SneakerType'
import ImagesSection from '@/components/PageDetails/ImagesSection'
import StatisticsSection from '@/components/PageDetails/StatisticsSection'
import SizesSection from '@/components/PageDetails/SizesSection'
import SneakerDetailsLoader from '@/loaders/SneakerDetailsLoader'
import Image from 'next/image'

interface DetailsProps {
  params: {
    id: string;
  }
}

const Details = ({ params }: DetailsProps) => {
  const [data, setData] = useState<SneakerType>({ name: '', id: '', estimatedMarketValue: 0, image: { thumbnail: '' }, quantity: 0 })
  const [isLoading, setIsLoading] = useState(true)
  const { isFavorite, setIsFavorite, addToFavorites } = useFavorite()

  useEffect(() => {
    const oldFavorites = localStorage.getItem('favorite-sneakers')

    if (typeof oldFavorites === 'string') {
      const parsed = JSON.parse(oldFavorites)
      setIsFavorite(parsed.some((favSneaker: SneakerType) => favSneaker.id === params.id))
    }

    const waitSneaker = setTimeout(() => {
      const sneaker = sneakersData.filter((sneaker) => sneaker.id === params.id)
      setData({
        name: sneaker[0].name,
        id: sneaker[0].id,
        estimatedMarketValue: sneaker[0].estimatedMarketValue,
        image: {
          thumbnail: sneaker[0].image.thumbnail
        },
        quantity: 0
      })

      setIsLoading(false)
    }, 1000)
    return () => clearTimeout(waitSneaker)
  }, [])

  const addToCart = ({ name, id, estimatedMarketValue, image }: SneakerType) => {
    const oldCartItems: string | SneakerType[] = localStorage.getItem('cart') || []

    if (typeof oldCartItems === 'string') {
      let parsed = JSON.parse(oldCartItems)

      if (parsed.some((snk: SneakerType) => snk.id === id)) {
        const getSneaker = parsed.filter((snk: SneakerType) => snk.id === id)
        getSneaker[0].quantity = getSneaker[0].quantity + 1

        parsed = parsed.filter((snk: SneakerType) => snk.id !== id)
        parsed.push(getSneaker[0])
      } else {
        parsed.push({ name, id, estimatedMarketValue, image, quantity: 1 })
      }

      localStorage.setItem('cart', JSON.stringify(parsed))
    } else {
      oldCartItems.push({ name, id, estimatedMarketValue, image, quantity: 1 })

      localStorage.setItem('cart', JSON.stringify(oldCartItems))
    }
  }

  if (isLoading) return <SneakerDetailsLoader />

  return (
    <div className='flex flex-col items-center px-4 py-4'>
      <div className='bg-gray-200 h-fit rounded-3xl'>
        <div className='flex w-full justify-between p-4 items-center'>
          <Link href="/">
            <ArrowLeft />
          </Link>
          <p className='font-bold'>Sneaker Detail</p>
          <MoreVertical />
        </div>
        <Image width={400} height={400} src={data.image.thumbnail} alt={data.name} />
      </div>
      <ImagesSection data={data} />
      <div className='w-full flex justify-between mt-2 px-2'>
        <div>
          <p className='font-bold'>{data.name}</p>
          <p className='font-bold text-3xl mt-4'>{`$ ${data.estimatedMarketValue.toFixed(2)}`}</p>
        </div>
        <div onClick={() => addToFavorites(data)} className='cursor-pointer'>
          {isFavorite ? <ThumbsUp /> : <ThumbsDown />}
        </div>
      </div>
      <StatisticsSection />
      <div className='flex flex-col w-full p-2'>
        <div className='flex justify-between items-center'>
          <h1 className='font-bold text-lg'>Select Size</h1>
          <span className='text-green-500 font-bold'>size chart</span>
        </div>
        <SizesSection />
        <div className='flex justify-between mt-6 items-center'>
          <div className='border-2 border-green-500 text-green-500 w-12 h-12 rounded-full flex items-center justify-center'>
            <MessageCircle />
          </div>
          <div className='border-2 border-green-500 text-green-500 w-44 h-12 rounded-full flex items-center justify-center'>
            <div onClick={() => addToCart(data)} className='flex gap-2 cursor-pointer'>
              <ShoppingBag />
              <p className='font-bold'>Add to Cart</p>
            </div>
          </div>
          <div>
            <button className='bg-green-500 text-white font-bold w-32 h-12 rounded-full'>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details