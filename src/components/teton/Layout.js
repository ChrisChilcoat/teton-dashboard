import React, { Fragment, useState } from 'react'

import { Dialog, Transition } from '@headlessui/react'
import { XIcon, ExclamationIcon } from '@heroicons/react/outline'
import { LinkIcon, PlusSmIcon, QuestionMarkCircleIcon, BellIcon, SwitchHorizontalIcon, SwitchVerticalIcon, DotsHorizontalIcon, ChevronDownIcon} from '@heroicons/react/solid'

import { breadcrumb as Crumbtrail } from './Data'

import Alert from './Alert'
import Button from './Button'
import ButtonGroup from './ButtonGroup'
import Breadcrumb from './Breadcrumb'
import DropdownButton from './DropdownButton'
import Dropdown from './Dropdown'
import Panel from './Panel'
import QuantumToolbar from './QuantumToolbar'


export default function DashboardLayout({header, sidebar, main, aside}) {

  const [headerPosition, setHeaderPosition] = useState('fixed') // fixed, static
  //[headerMenuType, setHeaderMenuType] = useState('Dropdown'), //dropdown, pushdown, trowser
  const [headerOrientation, setheaderOrientation] = useState('vertical') // horizontal, vertical, hybrid
  const [headerCollapsed, setHeaderCollapsed] = useState(false) // true, false
  const [layoutWidth, setLayoutWidth] = useState('full') //full, constrained
  const [darkMode, setDarkMode] = useState(false) // true, false
  const handleSetHeaderPosition = () => {
    headerPosition === 'fixed' ? setHeaderPosition('static') : setHeaderPosition('fixed');
  }
  const handleSetHeaderOrientation = orientation => {
    setheaderOrientation(orientation);
  }
  const handleSetLayoutWidth = () => {
    layoutWidth === 'full' ? setLayoutWidth('constrained') : setLayoutWidth('full');
  }
  const handleSetHeaderCollapsed = () => {
    setHeaderCollapsed(headerCollapsed => !headerCollapsed);
  }
  const RenderHorizontalHeader = () => {
    return (
      <div className={(headerPosition === 'fixed' ? 'fixed z-40' : 'static') + " w-full mx-auto max-w-screen-2x"}>
        {React.cloneElement(header, {orientation: 'horizontal'})}
      </div>
    )
  }
  const RenderVerticalHeader = () => {
    return (
      <div className="fixed flex h-screen overflow-hidden bg-gray-100">
        {React.cloneElement(header, {orientation: 'vertical', collapsed: headerCollapsed})}
      </div>
    )
  }
  const RenderHybridHeader = () => {
    return (
      <>
        {RenderHorizontalHeader()}
        {RenderVerticalHeader()}
      </>
    )
  }
  const RenderHeader = () => {
    return (
      <>
        {headerOrientation === 'horizontal' && RenderHorizontalHeader()}
        {headerOrientation === 'vertical' && RenderVerticalHeader()}
        {headerOrientation === 'hybrid' && RenderHybridHeader()}
      </>
    )
  }
  const RenderSidebar = () => {
    return (
      <nav className={(headerPosition === 'fixed' ? '' : '') + " sticky top-0 hidden h-screen space-y-2 lg:block lg:col-span-3"}>
        <div className="h-full pt-2 pr-4 overflow-scroll divide-y divide-gray-300">
          {sidebar}
        </div>
      </nav>
    )
  }
  const RenderMain = () => {
    return (
      <main aria-labelledby="main-heading" className={(headerPosition === 'fixed' ? 'pt-14 mt-3' : 'mt-3') + " col-span-12 md:col-span-8 lg:col-span-6"}>
        <h1 id="main-heading" className="sr-only">Main Content</h1>
        {main}
      </main>
    )
  }
  const RenderLayoutConfigPanel = () => {
    return (

      <Panel title="Layout Options">
        <div className="prose">
          <h4>Header Orientation</h4>
          <ButtonGroup
            label='Layout Options'
            variant="secondary"
            size="sm"
          >
            <Button 
              variant="secondary" 
              text="Vertical" 
              icon={<SwitchVerticalIcon/>} 
              onClick={() => handleSetHeaderOrientation('vertical')} 
              active   
            />
            <Button 
              variant="success" 
              text="Horizontal" 
              icon={<SwitchHorizontalIcon/>} 
              onClick={() => handleSetHeaderOrientation('horizontal')} 
            />         
          </ButtonGroup>
          <h4>Header Position</h4>
          <ButtonGroup
            label='Header Position Options'
            variant="secondary"
            size="sm"
          >
            <Button 
              variant="secondary" 
              text="Fixed" 
              disabled={headerOrientation === 'vertical' ? true : false}
              active 
              onClick={() => handleSetHeaderPosition('fixed')} 
            />
            <Button 
              variant="secondary" 
              text="Static" 
              disabled={headerOrientation === 'vertical' ? true : false} 
              onClick={() => handleSetHeaderPosition('static')} 
            />
          </ButtonGroup>
          <h4>Sidebar Position</h4>
          <ButtonGroup
            label='Sidebar Options'
            variant="secondary"
            size="sm"
          >
            <Button 
              variant="secondary" 
              text="Expanded" 
              disabled={headerOrientation === 'horizontal' ? true : false}
              onClick={() => handleSetHeaderCollapsed(false)} 
              active 
            />
            <Button 
              variant="secondary" 
              text="Collapsed" 
              disabled={headerOrientation === 'horizontal' ? true : false}
              onClick={() => handleSetHeaderCollapsed(true)} 
            />
          </ButtonGroup>
          <h4>Theme</h4>
          <ButtonGroup
            label='Themes'
            variant="secondary"
            size="sm"
          >
            <Button 
              variant="secondary" 
              text="Light" 
              active 
            />
            <Button 
              variant="secondary" 
              text="Dark" 
            />
          </ButtonGroup>
        </div>
      </Panel>
    
    )
  }
  const RenderLayoutClasses = () => {
    let className = 'grid grid-cols-12 gap-8 pt-10 mx-auto max-w-screen-2xl sm:px-6 lg:max-w-screen-2xl lg:px-2';
    if (headerOrientation === 'vertical') {
      headerCollapsed ? className += ' ml-20' : className += ' ml-64'
    }
    if (headerOrientation === 'horizontal') {
      className += ' pt-10'
    }
    return className
  }
  const RenderAside = () => {
    return (
      <aside className={(headerPosition === 'fixed' ? 'pt-0' : '') + " sticky top-0 hidden h-screen col-span-4 space-y-4 md:block lg:col-span-3"}>
        <div className="h-full pt-4 space-y-2 overflow-scroll divide-y divide-gray-300 top-20 scrollbar-hide">
          {aside}
        </div>
      </aside>
    )
  }
  
  return (
    <>
      <div className="min-h-screen bg-gray-100">
        {RenderHeader()}
        <div className={RenderLayoutClasses()}>
          {RenderSidebar()}
          {RenderMain()}
          {RenderAside()}
        </div>
      </div> 
      {/* RenderLayoutConfigPanel() */}
    </>
  )
}