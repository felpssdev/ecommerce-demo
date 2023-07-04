import React from 'react'
import { sneakersData } from '../../data/sneakersData'
import SneakerCard from './SneakerCard'

const SneakerSection = () => {
  return (
    <div className='mt-6'>
      <div className='flex justify-between mb-6'>
        <h1 className='font-bold text-lg'>New Arrival</h1>
        <span className='text-green-500 font-bold'>see all</span>
      </div>
      <main className='grid grid-cols-1 gap-10 overflow-y-scroll scrollbar-hide md:grid-cols-3'>
        {sneakersData.map((sneaker) => (<SneakerCard key={sneaker.id} sneaker={sneaker} />))}
      </main>
    </div>
  )
}

export default SneakerSection