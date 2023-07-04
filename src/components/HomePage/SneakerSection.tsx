'use client'
import React, { useContext } from 'react'
import { sneakersData } from '../../data/sneakersData'
import SneakerCard from './SneakerCard'
import { BrandContext, NameContext } from '@/contexts/filtersContext'

const SneakerSection = () => {
  const { currentBrand, setCurrentBrand } = useContext(BrandContext)
  const { currentName, setCurrentName } = useContext(NameContext)

  const clearFilters = () => {
    setCurrentBrand('')
    setCurrentName('')
  }

  return (
    <div className='mt-6'>
      <div className='flex justify-between mb-6'>
        <div className='font-bold text-lg flex gap-1'>
          <p>
            {currentBrand !== '' ? `${currentBrand} results` : 'New Arrival'}
          </p>
          <span>
            {currentName !== '' ? `including ${currentName}` : ''}
          </span>
        </div>
        <span onClick={clearFilters} className='text-green-500 font-bold cursor-pointer'>see all</span>
      </div>
      <main className='grid grid-cols-1 gap-10 overflow-y-scroll scrollbar-hide md:grid-cols-3 pb-10'>
        {sneakersData
          .filter((sneaker) => sneaker.brand.includes(currentBrand))
          .filter((sneaker) => sneaker.name.toLowerCase().includes(currentName))
          .map((sneaker) => (<SneakerCard key={sneaker.id} sneaker={sneaker} />))
        }
      </main>
    </div>
  )
}

export default SneakerSection