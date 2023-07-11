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
    <div className='w-screen h-screen p-4 overflow-y-scroll scrollbar-hide flex flex-col items-center'>
      <div className='w-full flex justify-between items-center sm:w-[540px] md:w-[540px] lg:w-[540px] xl:w-[540px] 2xl:w-[540px]'>
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
      <div className='flex flex-col w-full gap-4 mt-6 h-[620px] xs:h-[660px] s:h-[780px] md:h-[800px] lg:h-[800px] xl:h-[800px] 2xl:h-[800px] sm:w-[330px] md:w-[330px] lg:w-[330px] xl:w-[330px] 2xl:w-[330px] overflow-y-scroll scrollbar-hide'>
        {data.map((snk: SneakerTypeNoQuantity) => <FavCard setData={setData} sneaker={snk} key={snk.id} />)}
      </div>
    </div>
  )
}

export default Favorites