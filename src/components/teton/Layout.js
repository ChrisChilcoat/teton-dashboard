import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types';

import { SwitchHorizontalIcon, SwitchVerticalIcon, SunIcon, MoonIcon, ChevronDoubleLeftIcon, ChevronDoubleRightIcon, ColorSwatchIcon } from '@heroicons/react/solid'

import Button from './Button'
import ButtonGroup from './ButtonGroup'
import Panel from './Panel'

DashboardLayout.propTypes = {
  header: PropTypes.object.isRequired,
  main: PropTypes.object.isRequired,
  aside: PropTypes.object,
  sidebar: PropTypes.object,
  headerPosition: PropTypes.string,
  headerOrientation: PropTypes.string,
  headerCollapsed: PropTypes.bool,
  theme: PropTypes.string,
}

DashboardLayout.defaultProps = {
  header: null,
  main: null,
  aside: null,
  sidebar: null,
  headerPosition: 'fixed',
  headerOrientation: 'vertical',
  headerCollapsed: false,
  theme: 'light',
}

export default function DashboardLayout({header, sidebar, main, aside, }) {

  const [headerPosition, setHeaderPosition] = useState('fixed') // fixed, static
  const [headerOrientation, setheaderOrientation] = useState('vertical') // horizontal, vertical, hybrid
  const [headerCollapsed, setHeaderCollapsed] = useState() // true, false
  const [theme, setTheme] = useState() // true, false
  
  const handleSetHeaderPosition = () => {
    headerPosition === 'fixed' ? setHeaderPosition('static') : setHeaderPosition('fixed');
  }
  
  const handleSetHeaderOrientation = orientation => {
    setheaderOrientation(orientation);
  }
  
  const handleSetHeaderCollapsed = () => {
    setHeaderCollapsed(headerCollapsed => !headerCollapsed)
  }

  const handleSetTheme = (theme) => {
    setTheme(theme)
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
      <main 
        aria-labelledby="main-heading" 
        className={
          (headerPosition === 'fixed' ? 'pt-14 mt-3' : 'mt-3') + 
          " col-span-12 md:col-span-8 lg:col-span-6 dark:bg-gray-600"
        }
      >
        <h1 id="main-heading" className="sr-only">Main Content</h1>

      

        {main}
      </main>
    )
  }

  const RenderLayoutClasses = () => {
    let className = 'grid grid-cols-12 gap-8 pt-10 mx-auto max-w-screen-2xl sm:px-6 lg:max-w-screen-2xl lg:px-2'
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
              icon={<ChevronDoubleRightIcon />}
              disabled={headerOrientation === 'horizontal' ? true : false}
              onClick={() => handleSetHeaderCollapsed(false)} 
              active 
            />
            <Button 
              variant="secondary" 
              text="Collapsed" 
              icon={<ChevronDoubleLeftIcon />}
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
              icon={<SunIcon />}
              text="Light" 
              active 
              onClick={() => handleSetTheme('light')} 
            />
            <Button 
              icon={<MoonIcon />}
              text="Dark" 
              onClick={() => handleSetTheme('dark')} 
            />
          </ButtonGroup>
        </div>
      </Panel>
    
    )
  }
  
  return (
    <div className={theme ? theme : ''}>
      <div className={"min-h-screen bg-gray-100 dark:bg-gray-600"}>
        {RenderHeader()}
        <div className={RenderLayoutClasses()}>
          {RenderSidebar()}
          {RenderMain()}
          {RenderAside()}
        </div>
      </div> 
      { RenderLayoutConfigPanel() }
    </div>
  )
}

{/* 
TODO:
Fix layout.js error
Solve syntax highlighting
solve global themeing/showcase themeing
finish adding buttons to and designing sidebar header
finish api tabels
finish engineering layout/header and create documentation.
design landing page
*/}