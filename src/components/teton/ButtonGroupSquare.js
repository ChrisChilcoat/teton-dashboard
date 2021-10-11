import React from 'react'

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';

function ButtonGroupSquare() {
  return (
    <>
      <button
        type="button"
        className="px-2 py-2 text-sm font-medium leading-4 text-center text-gray-800 bg-gray-100 border border-transparent border-gray-300 hover:text-gray-900 focus:outline-none focus:ring-2 focus:-ring-offset-0 focus:ring-blue-500 hover:border-gray-400 ring-inset"
      >
        <span className="sr-only">Button Title</span>
        <ChevronLeftIcon className="w-5 h-5"/>
      </button>
      <button
        type="button"
        className="px-2 py-2 text-sm font-medium leading-4 text-center text-gray-800 bg-gray-100 border border-transparent border-gray-300 hover:text-gray-900 focus:outline-none focus:ring-2 focus:-ring-offset-0 focus:ring-blue-500 hover:border-gray-400 ring-inset"
      >
        <span className="sr-only">Button Title</span>
        <ChevronRightIcon className="w-5 h-5"/>
      </button>
    </>
  )
}

export default ButtonGroupSquare;