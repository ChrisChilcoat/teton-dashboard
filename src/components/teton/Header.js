import React, { useState, Fragment } from 'react'

import { Popover, Transition } from '@headlessui/react'

import { user, data, company, resources, navigation, components } from './Data'

import {
  MenuIcon,
  XIcon,
  DotsHorizontalIcon
} from '@heroicons/react/outline'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Header({orientation, collapsed}) {
  const renderHorizontalHeader = () => {
    return (
      <header className="transition-all duration-1000 ease-in-out bg-white border-b border-gray-100 divide-gray-200 shadow opacity-100 lg:static lg:overflow-y-visible">
        <div className="px-4 py-4 mx-auto max-w-8xl md:py-0 sm:px-6 lg:px-8">
          <div className="relative grid justify-between grid-cols-12 gap-0">
              <div className="flex col-span-7 md:col-span-4">
                <div className="flex items-center flex-shrink-0">
                  <Popover>
                    {({ open }) => (
                      <>
                        <Popover.Button
                          className={classNames(
                            open ? 'text-gray-900' : 'text-gray-500',
                            'group relative flex items-center flex-shrink-0 p-1 px-4 mr-0 text-gray-400 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 hover:bg-gray-50 sm:mr-5'
                          )}
                        >
                          {open 
                            ? <XIcon className='w-6 h-6 text-gray-600 group-hover:text-gray-500' aria-hidden="true"/>
                            : <MenuIcon className='w-6 h-6 text-gray-400 group-hover:text-gray-500' aria-hidden="true"/>
                          }
                          <span className="hidden ml-1 text-xs font-medium tracking-wider text-gray-500 uppercase sm:flex">Menu</span>
                        </Popover.Button>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 -translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 -translate-y-1"
                        >
                          <Popover.Panel className="absolute inset-x-0 z-10 hidden mt-px transform shadow-lg md:block top-full">
                            <div className="relative mx-auto lg:grid">
                              <nav className="grid px-4 py-8 bg-white gap-y-10 sm:grid-cols-4 sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12">
                                <div>
                                  <h3 className="text-sm font-medium tracking-wide text-gray-500 uppercase">Components</h3>
                                  <ul role="list" className="mt-5 space-y-6">
                                    {components.map((item) => (
                                      <li key={item.name} className="flow-root">
                                        <a
                                          href={item.href}
                                          className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
                                        >
                                          <item.icon className="flex-shrink-0 w-6 h-6 text-gray-400" aria-hidden="true" />
                                          <span className="ml-4">{item.name}</span>
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <div>
                                  <h3 className="text-sm font-medium tracking-wide text-gray-500 uppercase">Resources</h3>
                                  <ul role="list" className="mt-5 space-y-6">
                                    {company.map((item) => (
                                      <li key={item.name} className="flow-root">
                                        <a
                                          href={item.href}
                                          className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
                                        >
                                          <item.icon className="flex-shrink-0 w-6 h-6 text-gray-400" aria-hidden="true" />
                                          <span className="ml-4">{item.name}</span>
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <div>
                                  <h3 className="text-sm font-medium tracking-wide text-gray-500 uppercase">Resources</h3>
                                  <ul role="list" className="mt-5 space-y-6">
                                    {resources.map((item) => (
                                      <li key={item.name} className="flow-root">
                                        <a
                                          href={item.href}
                                          className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
                                        >
                                          <item.icon className="flex-shrink-0 w-6 h-6 text-gray-400" aria-hidden="true" />
                                          <span className="ml-4">{item.name}</span>
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <div>
                                  <h3 className="text-sm font-medium tracking-wide text-gray-500 uppercase">Resources</h3>
                                  <ul role="list" className="mt-5 space-y-6">
                                    {resources.map((item) => (
                                      <li key={item.name} className="flow-root">
                                        <a
                                          href={item.href}
                                          className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
                                        >
                                          <item.icon className="flex-shrink-0 w-6 h-6 text-gray-400" aria-hidden="true" />
                                          <span className="ml-4">{item.name}</span>
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </nav>
                              
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                  <button className="flex items-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
                    <img className="inline-block w-auto h-8" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=rose&shade=500" alt="Workflow"></img>
                    <span className="ml-1 text-xl font-medium">Teton</span>
                  </button>
                </div>
              </div>
              <div className="flex-1 col-span-0 md:col-span-4">
                <div className="flex items-center px-6 py-4 md:max-w-3xl md:mx-auto lg:max-w-none lg:mx-0 xl:px-0">
                  <div className="w-full ">
                    <label for="search" className="sr-only">Search</label>
                    <div className="relative hidden md:flex">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-400" x-description="Heroicon name: solid/search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
                        </svg>
                      </div>
                      <input id="search" name="search" className="block w-full py-2 pl-10 pr-3 text-sm placeholder-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 sm:text-sm " placeholder="Search" type="search"></input>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-end col-span-4">
                <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white rounded-full hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 md:flex">Help <span className="hidden md:flex"> &nbsp; Center<span></span></span></button>
                <button className="relative flex flex-shrink-0 p-1 ml-3 text-gray-400 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 hover:bg-gray-50 md:hidden">
                  <span className="sr-only">View notifications</span>
                  <svg className="w-6 h-6" x-description="Heroicon name: outline/bell" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="-2 0 24 20" aria-hidden="true" stroke="none">
                    <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
                  </svg>
                </button>
                <button className="relative flex-shrink-0 inline-block p-1 ml-3 text-gray-400 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 hover:bg-gray-50">
                  <span className="sr-only">View notifications</span>
                  <svg className="w-6 h-6" x-description="Heroicon name: outline/bell" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                  </svg>
                  <span className="absolute top-0 right-0 block w-2 h-2 bg-red-400 rounded-full ring-2 ring-white"></span>
                </button>
                <button className="flex ml-4 text-sm bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 hover:bg-gray-50 md:flex">
                <span className="sr-only">Open user menu</span>
                <img className="w-8 h-8 rounded-full" src={user.avatarUrl} alt={"View "+ user.name +"'s Profile"}></img>
                </button>
                <button className="inline-flex items-center px-2 py-2 ml-4 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full shadow-sm lg:px-4 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
                  <svg className="flex w-6 h-6 lg:hidden" x-description="Heroicon name: outline/bell" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                  </svg>
                  <span className="hidden lg:flex"> Add New</span>
                </button>
              </div>
          </div>
        </div>
      </header> 
    )
  },
  renderVerticalHeader = () => {
    return (
      <header className="hidden md:flex md:flex-shrink-0">
        <div className={(collapsed ? 'w-20' : 'w-64') + " flex flex-col"}>
          <div className="flex flex-col flex-1 min-h-0 bg-gray-800">
            <div className="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto scrollbar-hide">
              <div className={(collapsed ? 'justify-center' : '') + " flex items-center flex-shrink-0 px-4"}>
                <button className="flex items-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
                  <img className="inline-block w-auto h-8" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=rose&shade=500" alt="Workflow"></img>
                  <span className={(collapsed ? 'hidden' : '') + " ml-1 text-xl font-medium"}>Teton</span>
                </button>
              </div>
              <nav className="flex-1 px-2 mt-5 space-y-1 bg-gray-800">
                <div class="p-3.5">
                  {collapsed
                    ?<h3 className="flex justify-center text-sm font-medium tracking-wide text-gray-600 uppercase jusity-center"><DotsHorizontalIcon className="w-6 h-6"/><span className="sr-only">Resources</span></h3>
                    :<h3 className="text-sm font-medium tracking-wide text-gray-500 uppercase">Components</h3>
                  }
                  <ul className="mt-5 space-y-6">
                    {components.map((item) => (
                      <li key={item.name} className="flow-root">
                        <a
                          href={item.href}
                          className={(collapsed ? "justify-center" : "") + " flex items-center p-3 -m-3 text-base font-medium text-gray-400 rounded-md hover:bg-gray-50"}
                        >
                          <item.icon className="flex-shrink-0 w-6 h-6 text-gray-400" aria-hidden="true" />
                          {!collapsed && <span className="ml-4">{item.name}</span>}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div class="p-3.5">
                  {collapsed
                    ?<h3 className="flex justify-center text-sm font-medium tracking-wide text-gray-600 uppercase jusity-center"><DotsHorizontalIcon className="w-6 h-6"/><span className="sr-only">Resources</span></h3>
                    :<h3 className="text-sm font-medium tracking-wide text-gray-500 uppercase">Dashboards</h3>
                  }
                  <ul className="mt-5 space-y-6">
                    {company.map((item) => (
                      <li key={item.name} className="flow-root">
                        <a
                          href={item.href}
                          className={(collapsed ? "justify-center" : '') + " flex items-center p-3 -m-3 text-base font-medium text-gray-400 rounded-md hover:bg-gray-50"}
                        >
                          <item.icon className="flex-shrink-0 w-6 h-6 text-gray-400" aria-hidden="true" />
                          {!collapsed && <span className="ml-4">{item.name}</span>}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div class="p-3.5">
                  {collapsed
                    ?<h3 className="flex justify-center text-sm font-medium tracking-wide text-gray-600 uppercase jusity-center"><DotsHorizontalIcon className="w-6 h-6"/><span className="sr-only">Resources</span></h3>
                    :<h3 className="text-sm font-medium tracking-wide text-gray-500 uppercase">Dashboards</h3>
                  }
                  <ul className="mt-5 space-y-6">
                    {company.map((item) => (
                      <li key={item.name} className="flow-root">
                        <a
                          href={item.href}
                          className={(collapsed ? "justify-center" : '') + " flex items-center p-3 -m-3 text-base font-medium text-gray-400 rounded-md hover:bg-gray-50"}
                        >
                          <item.icon className="flex-shrink-0 w-6 h-6 text-gray-400" aria-hidden="true" />
                          {!collapsed && <span className="ml-4">{item.name}</span>}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div class="p-3.5">
                  {collapsed
                    ?<h3 className="flex justify-center text-sm font-medium tracking-wide text-gray-600 uppercase jusity-center"><DotsHorizontalIcon className="w-6 h-6"/><span className="sr-only">Resources</span></h3>
                    :<h3 className="text-sm font-medium tracking-wide text-gray-500 uppercase">Dashboards</h3>
                  }
                  <ul className="mt-5 space-y-6">
                    {company.map((item) => (
                      <li key={item.name} className="flow-root">
                        <a
                          href={item.href}
                          className={(collapsed ? "justify-center" : '') + " flex items-center p-3 -m-3 text-base font-medium text-gray-400 rounded-md hover:bg-gray-50"}
                        >
                          <item.icon className="flex-shrink-0 w-6 h-6 text-gray-400" aria-hidden="true" />
                          {!collapsed && <span className="ml-4">{item.name}</span>}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </nav>
            </div>
            <div className="flex flex-shrink-0 p-4 bg-gray-700">
              <a href="#" className="flex-shrink-0 block w-full group">
                <div className="flex items-center">
                  <div>
                    <img
                      className="inline-block rounded-full h-9 w-9"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-white">{user.name}</p>
                    <p className="text-xs font-medium text-gray-300 group-hover:text-gray-200">View profile</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </header> 
    )
  }
  return (
    <>
      {orientation === 'vertical' && renderVerticalHeader()}
      {orientation === 'horizontal' && renderHorizontalHeader()}
    </> 
  )
}

export default Header