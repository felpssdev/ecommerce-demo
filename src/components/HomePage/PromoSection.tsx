import Image from 'next/image'
import React from 'react'
import Sneakers from '../../../public/sneaker-image.png'
import Sneakers2 from '../../../public/sneaker-image2.png'
import Link from 'next/link'

const PromoSection = () => {
  return (
    <div className='h-32 w-full mt-6 flex gap-2 overflow-x-scroll scrollbar-hide'>
      <div className='flex min-w-full sm:min-w-0 sm:w-80 md:min-w-0 md:w-[50%] lg:min-w-0 lg:w-[50%] xl:min-w-0 xl:w-[50%] 2xl:min-w-0 2xl:w-[50%] items-center justify-center bg-zinc-950  rounded-3xl'>
        <div>
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
      <div className='flex min-w-full sm:min-w-0 sm:w-80 md:min-w-0 md:w-96 lg:min-w-0 lg:w-[50%] xl:min-w-0 xl:w-[50%] 2xl:min-w-0 2xl:w-[50%] items-center justify-center bg-zinc-950  rounded-3xl'>
        <div>
          <Image src={Sneakers2} width={120} height={120} alt='Sneakers Image 2' />
        </div>
        <div className='pr-5 flex flex-col items-center'>
          <div className='flex flex-col'>
            <h1 className='text-white font-bold'>FELPS Coupoun</h1>
            <h2 className='text-zinc-400 self-center'>$ 200 Off</h2>
          </div>
          <Link href="/cart">
            <button className='text-white h-fit p-2 text-sm font-bold bg-green-600 rounded-full mt-2'>APPLY!</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PromoSection