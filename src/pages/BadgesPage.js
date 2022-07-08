import React from 'react'

import { ExclamationIcon } from '@heroicons/react/outline'
import { BellIcon, DotsHorizontalIcon, ChevronDownIcon} from '@heroicons/react/solid'

import Container from '../components/teton/Container'
import Row from '../components/teton/Row'
import Col from '../components/teton/Col'
import Stack from '../components/teton/Stack'
import Badge from '../components/teton/Badge'

import Button from '../components/teton/Button'
import Showcase from '../components/site/Showcase'

export default function BadgesPage() {
  return (
    <>
      <span class='prose'>  
        <h1>Badges</h1>
        <p>A simple tools for highlighting content. </p>
        <h2>Examples</h2>
        <p>By default Badges scale to match the font size of the element they are placed within.</p>  
      </span>
      <br/>
      <Showcase 
        class="w-full px-4 py-2 text-center m-auto space-y-2"
        component={
          <>
            <p className="text-2xl">Headline <Badge>Badge</Badge></p>
            <p className="text-xl">Headline <Badge>Badge</Badge></p>
            <p className="text-lg">Headline <Badge>Badge</Badge></p>
            <p className="text-md">Headline <Badge>Badge</Badge></p>
            <p className="text-sm">Headline <Badge>Badge</Badge></p>
            <p className="text-xs">Headline <Badge>Badge</Badge></p>
          </>
        } 
        syntaxBlock={
          `<> \n` +
          `  <p className="text-2xl">Headline <Badge>Badge</Badge></p> \n` +
          `   <p className="text-xl">Headline <Badge>Badge</Badge></p> \n` +
          `   <p className="text-lg">Headline <Badge>Badge</Badge></p> \n` +
          `   <p className="text-md">Headline <Badge>Badge</Badge></p> \n` +
          `   <p className="text-sm">Headline <Badge>Badge</Badge></p> \n` +
          `  <p className="text-xs">Headline <Badge>Badge</Badge></p> \n` +
          `</>`} 
        title="Badges" 
      />
      <span class='prose'>  
        <h2>Variants</h2>
        <p>Change the color of the Badge by using the variant prop.</p>
      </span>
      <br/>
      <Showcase 
        class="w-full py-4 text-center m-auto space-y-2 space-x-2"
        component={
          <>
            <Badge variant="primary">Primary</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="danger">Danger</Badge>
            <Badge variant="info">Info</Badge>
          </>
        } 
        syntaxBlock={
          `<> \n` +
          `  <Badge variant="primary">Primary</Badge> \n` +
          `  <Badge variant="secondary">Secondary</Badge> \n` +
          `  <Badge variant="success">Success</Badge> \n` +
          `  <Badge variant="warning">Warning</Badge> \n` +
          `  <Badge variant="danger">Danger</Badge> \n` +
          `  <Badge variant="info">Info</Badge> \n` +
          `</>`} 
        title="Variants" 
      />
      <span class='prose'>  
        <h2>Size</h2>
        <p>Control the size of the Badge by using the size prop.</p>
      </span>
      <br/>
      <Showcase 
        class="w-full py-4 text-center m-auto space-y-2 space-x-2"
        component={
          <>
            <Badge size="xxl">xxl</Badge>
            <Badge size="xl">xl</Badge>
            <Badge size="lg">lg</Badge>
            <Badge size="md">md</Badge>
            <Badge size="sm">sm</Badge>
            <Badge size="xs">xs</Badge>
          </>
        } 
        syntaxBlock={
          `<> \n` +
          `  <Badge size="xxl">xxl</Badge> \n` +
          `  <Badge size="xl">xl</Badge> \n` +
          `  <Badge size="lg">lg</Badge> \n` +
          `  <Badge size="md">md</Badge> \n` +
          `  <Badge size="sm">sm</Badge> \n` +
          `  <Badge size="xs">xs</Badge> \n` +
          `</>`} 
        title="Variants" 
      />

      <span class='prose'>     
        <h2>API</h2>
        <h3>Badge</h3>
      </span>

      <div className="flex flex-col my-8">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden border-b border-gray-200 shadow">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      Type
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      Default
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-2 text-sm font-medium text-gray-900 whitespace-nowrap">size</td>
                    <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">'xs' <br/> 'sm' <br/> 'md' <br/> 'lg' <br/> 'xl' <br/> 'xxl'</td>
                    <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap"></td>
                    <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">Adjusts badge size</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-2 text-sm font-medium text-gray-900 whitespace-nowrap">variant</td>
                    <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">'primary' <br/> 'secondary' <br/> 'success' <br/> 'danger' <br/> 'warning' <br/> 'info' </td>
                    <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">'secondary'</td>
                    <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">Sets badge color</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}