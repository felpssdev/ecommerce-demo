import Image from 'next/image'
import React from 'react'
import Sneakers from '../../../public/sneaker-image.png'

const PromoSection = () => {
  return (
    <div className='h-32 w-full bg-zinc-950 mt-6 rounded-3xl flex justify-evenly items-center'>
      <div className='w-36 h-36 flex items-center justify-center ml-4'>
        <Image src={Sneakers} width={120} height={120} alt='Sneakers Image' />
      </div>
      <div className='pr-5 flex flex-col items-center'>
        <div className='flex flex-col'>
          <h1 className='text-white font-bold'>Year-End Sale</h1>
          <h2 className='text-zinc-400 self-center'>Up to 90%</h2>
        </div>
        <button className='text-white h-fit p-2 text-sm font-bold bg-green-600 rounded-full mt-2'>SHOP NOW!</button>
      </div>
    </div>
  )
}

export default PromoSection