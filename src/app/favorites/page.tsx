'use client'
import FavCard from '@/components/PageFavorites/FavCard'
import { SneakerTypeNoQuantity } from '@/types/SneakerType'
import { ArrowLeft, MoreVertical } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Favorites = () => {
  const [data, setData] = useState<SneakerTypeNoQuantity[]>([])
  const router = useRouter()

  useEffect(() => {
    const getFavorites = localStorage.getItem('favorite-sneakers')

    if (typeof getFavorites === 'string') {
      let parsed = JSON.parse(getFavorites)
      setData(parsed)
    }
  }, [])

  return (
    <div className='w-full h-screen p-4 overflow-y-scroll scrollbar-hide flex flex-col'>
      <div className='w-full flex justify-between items-center'>
        <Link href='/'>
          <div className='h-10 w-10 bg-gray-200 flex items-center justify-center rounded-full'>
            <ArrowLeft />
          </div>
        </Link>
        <h1 className='font-bold text-lg'>Favorites</h1>
        <div className='cursor-pointer h-10 w-10 bg-gray-200 flex items-center justify-center rounded-full'>
          <MoreVertical />
        </div>
      </div>
      <div className='flex flex-col gap-4 mt-6 h-[640px] overflow-y-scroll scrollbar-hide'>
        {data.map((snk: SneakerTypeNoQuantity) => <FavCard setData={setData} sneaker={snk} key={snk.id} />)}
      </div>
      <button onClick={() => router.push('/')} className='bg-green-500 mt-10 px-6 py-2 rounded-full text-white font-bold self-center'>Go shop</button>
    </div>
  )
}

export default Favorites