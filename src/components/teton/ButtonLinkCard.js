import React from 'react'

import { ChevronRightIcon } from '@heroicons/react/solid';


function ButtonLinkCard() {
  return (
    <button
      type="button"
      className="relative items-center min-w-2/5 p-2.5 space-x-3 bg-white border border-gray-300 rounded-md shadow-sm hover:shadow hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 flex group"
    >
      <div className="flex-shrink-0">
        <img className="w-10 h-10 rounded-full" src='https://images.unsplash.com/photo-1501031170107-cfd33f0cbdcc?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80' alt="" />
      </div>
      <div className="flex-1 min-w-0">
        <span className="text-left">
          <span className="absolute inset-0" aria-hidden="true" />
          <p className="text-sm font-medium text-gray-900">Document Title</p>
          <p className="text-sm text-gray-500 truncate">PDF</p>
        </span>
      </div>
      <div class="flex-shrink-0">
        <div class="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 group-hover:text-gray-600 group-focus:text-gray-600 rounded-full bg-transparent hover:text-gray-500">
          <ChevronRightIcon class="w-5 h-5"/>
        </div>
      </div>
    </button>
  )
}

export default ButtonLinkCard;