import React from 'react'

const SneakerDetailsLoader = () => {
  return (
    <div className='flex flex-col items-center px-4 py-4'>
      <div className='bg-gray-300 h-[430px] w-full rounded-3xl animate-pulse'>
      </div>
      <div className='flex mt-3 justify-between w-full '>
        <div className='w-20 h-20 bg-gray-300 animate-pulse rounded-lg'></div>
        <div className='w-20 h-20 bg-gray-300 animate-pulse rounded-lg'></div>
        <div className='w-20 h-20 bg-gray-300 animate-pulse rounded-lg'></div>
        <div className='w-20 h-20 bg-gray-300 animate-pulse rounded-lg'></div>
      </div>
      <div className='w-full flex justify-between mt-6 px-2'>
        <div>
          <div className='w-32 h-4 bg-gray-300 rounded animate-pulse'></div>
          <div className='w-48 h-8 mt-4 bg-gray-300 rounded animate-pulse'></div>
        </div>
        <div className='w-8 h-8 bg-gray-300 rounded-full animate-pulse'></div>
      </div>
      <div className='h-8'></div>
      <div className='flex flex-col w-full p-2'>
        <div className='flex justify-between items-center'>
          <div className='w-24 h-4 bg-gray-300 rounded animate-pulse'></div>
          <div className='w-24 h-4 bg-gray-300 rounded animate-pulse'></div>
        </div>
        <div className='flex justify-between mt-44 items-center'>
          <div className='border-2 box-border border-gray-300 w-12 h-12 rounded-full'></div>
          <div className='border-2 box-border border-gray-300 w-44 h-12 rounded-full'>
          </div>
          <div className='bg-gray-300 w-32 h-12 rounded-full'>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SneakerDetailsLoader