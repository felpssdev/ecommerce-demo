'use client'
import { SneakerType } from '@/types/SneakerType';
import { ArrowLeft, Trash } from 'lucide-react'
import React, { Dispatch, SetStateAction } from 'react'

interface MoreMenuProps {
  show: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  setData: Dispatch<SetStateAction<SneakerType[]>>
}

const MoreMenu = ({ show, setShowModal, setData }: MoreMenuProps) => {
  const handleClearCart = () => {
    localStorage.setItem('cart', JSON.stringify([]))
    setData([])
  }

  return (
    <div className={show ? 'fixed inset-0 backdrop-blur-sm z-20 transition-all duration-150' : 'hidden'}>
      <div className='fixed p-2 pb-2 right-4 top-5 bg-white w-44 h-36 rounded-xl border-red-500 border-4 flex flex-col items-center justify-between'>
        <h1 className='font-bold'>More</h1>
        <div className='flex flex-col items-center gap-2'>
          <div onClick={handleClearCart} className='cursor-pointer flex items-center justify-center gap-2 text-white font-bold bg-red-500 w-28 py-2 px-1 rounded-lg text-xs'>
            <p>Clear Cart</p>
            <Trash />
          </div>
          <div onClick={() => setShowModal(false)} className='cursor-pointer flex gap-1 text-xs items-center'>
            <ArrowLeft className='w-3 h-3' />
            <p>Go back</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MoreMenu