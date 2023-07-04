import { SneakerType } from '@/types/SneakerType'
import React from 'react'

interface ImagesSectionProps {
  data: SneakerType;
}

const ImagesSection = ({ data }: ImagesSectionProps) => {
  return (
    <div className='flex justify-between gap-2 w-full p-1 mt-2'>
      <div className='w-20 h-20 rounded-xl bg-gray-200 '>
        <img src={data.image.thumbnail} />
      </div>
      <div className='w-20 h-20 rounded-xl bg-gray-200 '>
        <img src={data.image.thumbnail} />
      </div>
      <div className='w-20 h-20 rounded-xl bg-gray-200 '>
        <img src={data.image.thumbnail} />
      </div>
      <div className='w-20 h-20 rounded-xl bg-gray-200 '>
        <img src={data.image.thumbnail} />
      </div>
    </div>
  )
}

export default ImagesSection