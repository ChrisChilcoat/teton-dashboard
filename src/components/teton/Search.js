import React from 'react'

import { ChevronDownIcon } from '@heroicons/react/solid'

function Search() {
  return (
    <div className="w-full">
      <label for="search" className="sr-only">Search</label>
      <div className="relative hidden md:flex">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg className="w-5 h-5 text-gray-400" x-description="Heroicon name: solid/search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
          </svg>
        </div>
        <button className="absolute inset-y-0 right-0 px-2 py-2 m-px text-sm font-medium leading-4 text-center text-gray-400 bg-transparent border border-transparent rounded-full border-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 hover:border-none hover:text-gray-800 dark:hover:text-gray-200">
          <span className="sr-only">Open filter menu</span>
          <ChevronDownIcon className="w-5 h-5"/>
        </button>
        <input id="search" name="search" className="block w-full py-2 pl-10 pr-10 font-serif text-sm placeholder-gray-500 bg-gray-100 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 sm:text-sm dark:bg-black dark:border-gray-600 dark:text-gray-200" placeholder="Find" type="search"></input>
      </div>
    </div>
  )
}

export default Search