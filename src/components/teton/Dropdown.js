/* This example requires Tailwind CSS v2.0+ */

import React, { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'

import Button from './Button'

import { XIcon, ExclamationIcon, InformationCircleIcon } from '@heroicons/react/outline'

const menu = [
  { name: 'Hide Ad', subtext: 'Never see this ad again.', icon: XIcon },
  { name: 'Report Ad', subtext: 'Tell us about a problem with this ad.', icon: ExclamationIcon},
  { name: 'Why am I seeing this?', href: '#', icon: InformationCircleIcon},
  // More menu items...
]

export default function Dropdown( { variant, size, icon, iconSize, secondaryIcon, suffixClasses, text, active, onClick, rounded }) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button as={Fragment}>
        <Button    
          variant={variant}
          size={size}
          icon={icon}
          iconSize={iconSize}
          suffixClasses={suffixClasses}
          secondaryIcon={secondaryIcon}
          text={text}
          active={active}
          onClick={onClick}
          rounded={rounded}
        />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute bg-white w-96 rounded-md shadow p-1 mt-1.5 right-0 z-30">
          {menu.map((item) => ( 
            <Menu.Item>
            {({ active }) => (
              <a
                href='/'
                className={active && "bg-blue-500" + " relative flex px-4 py-2 text-sm font-semibold text-gray-700 rounded-md items-top hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-inset focus:ring-opacity-60"}
              >
                <item.icon
                  className="w-5 h-5 mr-3"
                  aria-hidden="true"
                />
                <span>
                  <span className="block">{item.name}</span>
                  {item.subtext ? <span className="block text-xs font-normal text-gray-500">{item.subtext}</span> : ''}
                </span>
           
              </a>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
