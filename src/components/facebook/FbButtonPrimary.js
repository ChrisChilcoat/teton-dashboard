import React from 'react'

import { PlusCircleIcon } from '@heroicons/react/solid'

export default function FbButtonPrimary() {
  return (
    <button
      type="button"
      className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
    >
      <PlusCircleIcon className="w-5 h-5 mr-1"/> 
      Add to Story
    </button>
  )
}