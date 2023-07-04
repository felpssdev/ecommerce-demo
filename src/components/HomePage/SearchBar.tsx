import React from 'react'
import { Search } from 'lucide-react'

const SearchBar = () => {
  return (
    <div className='self-center w-full relative'>
      <input placeholder="What are you looking for?" className='form-input bg-gray-200 border-0 p-3 rounded-full w-full placeholder:pl-8' type='text' />
      <div className='absolute left-4 top-3'>
        <Search />
      </div>
    </div>
  )
}

export default SearchBar