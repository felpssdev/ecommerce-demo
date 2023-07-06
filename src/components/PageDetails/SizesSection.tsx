import React, { useState } from 'react'
import SizeButton from './SizeButton'

const SizesSection = () => {
  const [isSelected, setIsSelected] = useState(4)

  return (
    <div className='flex mt-4 w-full justify-between sm:self-center md:self-center lg:self-center sm:w-[400px] md:w-[400px] lg:w-[400px]'>
      <SizeButton setIsSelected={setIsSelected} selected={isSelected} size={4} />
      <SizeButton setIsSelected={setIsSelected} selected={isSelected} size={4.5} />
      <SizeButton setIsSelected={setIsSelected} selected={isSelected} size={5.5} />
      <SizeButton setIsSelected={setIsSelected} selected={isSelected} size={6} />
    </div>
  )
}

export default SizesSection