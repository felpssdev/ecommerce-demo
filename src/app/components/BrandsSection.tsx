import React from 'react'
import { brandsData } from '@/app/data/brandsData'
import Image from 'next/image'

const BrandsSection = () => {
  return (
    <section className='grid grid-cols-9 gap-28 mt-6 overflow-x-scroll scrollbar-hide'>
      {brandsData.map((brand) =>
        <div className='bg-gray-200 h-24 w-24 rounded-full flex items-center justify-center' key={brand.name}>
          <Image src={brand.image} width={60} height={60} alt={brand.name} />
        </div>
      )}
    </section>
  )
}

export default BrandsSection