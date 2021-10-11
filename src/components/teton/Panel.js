import { Fragment, useState, Children } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'

export default function Panel({ children, title }) {

  let _size = 'sm' // sm, md, lg, xl
  let _buttonPosition = 'top' // top, middle, bottom
  let _buttonIcon = '' //
  let _open = true
  
  const [open, setOpen] = useState(true)
  
  const arrayChildren = Children.toArray(children);

  return (
    <div as={Fragment}>
      <div>
        <div>
          <div className="fixed inset-y-0 right-0 z-50 flex max-w-full pl-10">
            <div
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="relative w-screen max-w-md">
                <div className="flex flex-col h-full py-6 overflow-y-scroll bg-white shadow-xl">
                  <div className="px-4 sm:px-6">
                    <div className="flex items-start justify-between">
                      <div className="text-lg font-medium text-gray-900">{title}</div>
                      <div className="absolute flex items-center ml-3 -left-10 h-7">
                        <button
                          type="button"
                          className="text-gray-400 bg-white rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          onClick={() => setOpen(false)}
                        >
                          <span className="sr-only">Close panel</span>
                          <XIcon className="w-6 h-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex-1 px-4 mt-6 sm:px-6">
                    {Children.map(arrayChildren, (child, index) => {
                      return (
                        <>
                          {child}
                        </>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
