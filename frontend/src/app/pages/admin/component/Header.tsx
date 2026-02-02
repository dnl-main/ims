import React from 'react'
import { Search } from 'lucide-react'
import './header.css';

const Header = () => {
  return (
    <div className='flex justify-between'>
        <h1 className='header'>Dashboard</h1>
        <div className="search-bar flex gap-2 justify-center items-center">
            <input type="text" className='
            searchbar
            w-105 
            h-10 
            shadow-sm 
            rounded-md 
            bg-white border-1 
            border-gray-300 px-2' 
            placeholder='Wireless Mouse...'
            />
            <button className='searchBtn border-l-3 border-gray p-2'><Search/></button>
        </div>
    </div>
  )
}

export default Header