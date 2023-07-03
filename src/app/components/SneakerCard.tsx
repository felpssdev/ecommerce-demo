import React from 'react'

interface SneakerCardProps {
  sneaker: {
    name: string;
    estimatedMarketValue: number;
  }
}

const SneakerCard = ({ sneaker }: SneakerCardProps) => {
  return (
    <div className='h-fit w-90 flex flex-col items-center justify-center rounded-xl'>
      <div className='w-full h-fit rounded-xl bg-gray-300'>
        <img src={sneaker.image.thumbnail} alt={sneaker.name} />
      </div>
      <div className='w-full mt-4'>
        <h2 className='font-bold'>{sneaker.name}</h2>
        <h3 className='font-bold text-2xl'>{`$ ${sneaker.estimatedMarketValue.toFixed(2)}`}</h3>
      </div>
    </div>
  )
}

export default SneakerCard