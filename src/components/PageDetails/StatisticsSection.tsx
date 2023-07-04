import React, { memo } from 'react'
import { Star } from 'lucide-react'

const StatisticsSection = memo(function StatisticsSectionComponent() {
  return (
    <div className='flex gap-4 w-full p-2 border-b-2 pb-10 justify-between'>
      <div className='border-2 rounded-full p-1 box-border font-semibold'>{`${Math.floor(Math.random() * 20)} pairs left`}</div>
      <div className='border-2 rounded-full p-1 box-border font-semibold'>{`sold ${Math.floor(Math.random() * 20)}`}</div>
      <div className='flex items-center justify-center gap-1 border-2 rounded-full p-1 box-border font-semibold'><Star />{`${(Math.random() * 5).toFixed(1)} (${Math.floor(Math.random() * 100)} reviews)`}</div>
    </div>
  )
})

export default StatisticsSection