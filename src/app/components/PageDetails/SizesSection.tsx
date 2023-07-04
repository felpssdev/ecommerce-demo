import React, { useState } from 'react'
import SizeButton from './SizeButton'

const SizesSection = () => {
  const [isSelected, setIsSelected] = useState(4)

  return (
    <div className='flex mt-4 w-full justify-between'>
      <SizeButton setIsSelected={setIsSelected} selected={isSelected} size={4} />
      <SizeButton setIsSelected={setIsSelected} selected={isSelected} size={4.5} />
      <SizeButton setIsSelected={setIsSelected} selected={isSelected} size={5.5} />
      <SizeButton setIsSelected={setIsSelected} selected={isSelected} size={6} />
    </div>
  )
}

export default SizesSection