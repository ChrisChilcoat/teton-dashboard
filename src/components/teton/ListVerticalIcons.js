import React from 'react';
import {
  UsersIcon,
  ChevronDownIcon,
  VideoCameraIcon,
  ShoppingBagIcon,
  UserGroupIcon,
  PuzzleIcon
} from '@heroicons/react/solid'

const navigation = [
  { name: 'Dashboard', href: '#', icon: UsersIcon, current: true },
  { name: 'Watch', href: '#', icon: VideoCameraIcon, current: false },
  { name: 'Marketplace', href: '#', icon: ShoppingBagIcon, current: false },
  { name: 'Groups', href: '#', icon: UserGroupIcon, current: false },
  { name: 'Gaming', href: '#', icon: PuzzleIcon, current: false },
  //{ name: 'Show More', href: '#', icon: ChevronDownIcon, current: false },
]

function ListVerticalIcons() {
  return (
    <ul className="py-2 space-y-1">               
      {navigation.map((item) => (
        <li className={item.current ? 'border-l-2 -ml-px border-blue-600 -left-1 bg-gray-200 ' : undefined}>
          <a
            key={item.name}
            href={item.href}
            className="items-center block py-3 text-sm font-medium text-gray-900 rounded-md group hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 ring-inset focus:ring-opacity-60"
            aria-current={item.current ? 'page' : undefined}
          >
            <item.icon
              className="w-8 h-8 m-auto "
              aria-hidden="true"
            />
            <span className="m-auto text-xs font-medium text-gray-800 truncate">{item.name}</span>
          </a>
        </li>
      ))}
    </ul>
  )
}

export default ListVerticalIcons