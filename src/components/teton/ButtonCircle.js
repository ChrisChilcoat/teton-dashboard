import React from 'react'

import { LinkIcon } from '@heroicons/react/solid';

function ButtonCircle() {
  return (
    <button
      type="button"
      className="px-2 py-2 text-sm font-medium leading-4 text-center text-gray-800 bg-white border border-transparent border-gray-300 rounded-full shadow-sm hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 hover:border-gray-400"
    >
      <span className="sr-only">Button Title</span>
      <LinkIcon className="w-5 h-5"/>
    </button>
  )
}

export default ButtonCircle;