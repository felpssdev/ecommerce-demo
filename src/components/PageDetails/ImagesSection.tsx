import { SneakerType } from '@/types/SneakerType'
import Image from 'next/image';
import React from 'react'

interface ImagesSectionProps {
  data: SneakerType;
}

const ImagesSection = ({ data }: ImagesSectionProps) => {
  return (
    <div className='flex justify-between gap-2 w-full s:w-[400px] sm:w-[400px] md:w-[400px] lg:w-[400px] xl:w-[400px] 2xl:w-[400px] p-1 mt-2'>
      <div className='w-20 h-20 rounded-xl bg-gray-200 '>
        <Image width={80} height={80} alt='Thumbnail' src={data.image.thumbnail} />
      </div>
      <div className='w-20 h-20 rounded-xl bg-gray-200 '>
        <Image width={80} height={80} alt='Thumbnail' src={data.image.thumbnail} />
      </div>
      <div className='w-20 h-20 rounded-xl bg-gray-200 '>
        <Image width={80} height={80} alt='Thumbnail' src={data.image.thumbnail} />
      </div>
      <div className='w-20 h-20 rounded-xl bg-gray-200 '>
        <Image width={80} height={80} alt='Thumbnail' src={data.image.thumbnail} />
      </div>
    </div>
  )
}

export default ImagesSection