import { Dispatch, SetStateAction } from 'react'

interface SizeButtonProps {
  size: number,
  selected: number,
  setIsSelected: Dispatch<SetStateAction<number>>
}

const SizeButton = ({ size, selected, setIsSelected }: SizeButtonProps) => {
  return (
    <div onClick={() => setIsSelected(size)}>
      <div className={`cursor-pointer rounded-full w-20 h-10 flex items-center justify-center font-semibold box-border ${selected === size ? 'bg-green-500 text-white' : 'text-zinc-400 border-4'}`}>{size}</div>
    </div>
  )
}

export default SizeButton