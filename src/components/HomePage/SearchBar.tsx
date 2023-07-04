'use client'
import React, { useContext, useState } from 'react'
import { ArrowRight, Search } from 'lucide-react'
import { NameContext } from '@/contexts/filtersContext'

const SearchBar = () => {
  const [search, setSearch] = useState('')
  const { setCurrentName } = useContext(NameContext)

  const filterResults = () => {
    setCurrentName(search.toLowerCase())
    setSearch('')
  }

  return (
    <div className='self-center w-full relative '>
      <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="What are you looking for?" className='form-input bg-gray-200 border-0 p-3 px-8 rounded-full w-full placeholder:pl-8' type='text' />
      {search.length > 0
        ? <div onClick={filterResults} className='absolute right-4 top-3 flex items-center gap-2 bg-green-500 text-white px-2 py-1 rounded-full text-sm font-bold cursor-pointer'>
          <p>
            Look for
          </p>
          <ArrowRight className='w-5 h-5' />
        </div>
        : <div className='absolute left-4 top-3'>
          <Search />
        </div>
      }
    </div>
  )
}

export default SearchBar