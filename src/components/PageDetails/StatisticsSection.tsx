import React, { memo } from 'react'
import { Star } from 'lucide-react'

const StatisticsSection = memo(function StatisticsSectionComponent() {
  return (
    <div className='flex gap-2 w-full sm:w-[400px] md:w-[400px] lg:w-[400px] py-2 border-b-2 pb-10 justify-between xxs:text-xs xs:text-xs s:text-sm'>
      <div className='border-2 rounded-full w-32 h-10 flex items-center justify-center p-1 box-border font-semibold'>{`${Math.floor(Math.random() * 20)} pairs left`}</div>
      <div className='border-2 rounded-full w-20 h-10 flex items-center justify-center box-border font-semibold'>{`sold ${Math.floor(Math.random() * 20)}`}</div>
      <div className='flex items-center justify-center gap-1 border-2 w-44 h-10 rounded-full p-1 box-border font-semibold'><Star />{`${(Math.random() * 5).toFixed(1)} (${Math.floor(Math.random() * 100)} reviews)`}</div>
    </div>
  )
})

export default StatisticsSection