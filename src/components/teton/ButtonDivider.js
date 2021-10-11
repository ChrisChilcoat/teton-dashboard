import React from 'react'

function ButtonDivider() {
  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-blue-600" />
      </div>
      <div className="relative flex justify-center">
        <button
          type="button"
          className="inline-flex items-center px-8 py-1.5 text-sm leading-5 font-medium rounded-full text-blue-600 bg-gray-100 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <span>Show 12 More</span>
        </button>
      </div>
    </div>

  )
}

export default ButtonDivider;