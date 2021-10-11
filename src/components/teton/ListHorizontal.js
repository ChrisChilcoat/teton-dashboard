import React from 'react';

import {
  TemplateIcon,
  ChevronDownIcon,
  VideoCameraIcon,
  ShoppingBagIcon,
  UserGroupIcon,
  PuzzleIcon
} from '@heroicons/react/solid'

const navigation = [
  { name: 'Dashboard', href: '#', icon: TemplateIcon, current: true },
  { name: 'Watch', href: '#', icon: VideoCameraIcon, current: false },
  { name: 'Marketplace', href: '#', icon: ShoppingBagIcon, current: false },
  { name: 'Groups', href: '#', icon: UserGroupIcon, current: false },
  { name: 'Gaming', href: '#', icon: PuzzleIcon, current: false },
  //{ name: 'More', href: '#', icon: ChevronDownIcon, current: false },
]

function ListHorizontal() {
  return (
    <ul className="inline-flex w-3/5 py-2 mb-4 space-y-1 border-b border-gray-300">               
      {navigation.map((item) => (
        <li class={item.current ? 'border-b-2 border-blue-600 text-black -bottom-2 pb-2 relative -mt-1' : 'text-gray-500  hover:bg-gray-200 rounded-md '}>
          <a
            key={item.name}
            href={item.href}
            className="flex items-center px-4 py-2 text-sm group focus:outline-none focus:ring-2 focus:ring-blue-600 ring-inset focus:ring-opacity-60"
            aria-current={item.current ? 'page' : undefined}
          >
            <item.icon
              className={!item.current ? "hidden" : "flex-shrink-0 w-5 h-5 mr-2"}
              aria-hidden="true"
            />
            <span className="text-sm truncate">{item.name}</span>
          </a>
        </li>
      ))}
        <li class={'text-gray-500  hover:bg-gray-200 rounded-md '}>
          <button
            className="flex items-center px-4 py-2 pr-2.5 text-sm group focus:outline-none focus:ring-2 focus:ring-blue-600 ring-inset focus:ring-opacity-60"
          >
            <span className="text-sm truncate">More</span>
            <ChevronDownIcon className="relative flex-shrink-0 w-4 h-4"/>
          </button>
        </li>
    </ul>
  )
}

export default ListHorizontal