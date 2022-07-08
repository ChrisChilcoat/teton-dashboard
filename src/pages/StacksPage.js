import React from 'react'

import { ExclamationIcon } from '@heroicons/react/outline'
import { BellIcon, DotsHorizontalIcon, ChevronDownIcon} from '@heroicons/react/solid'

import Container from '../components/teton/Container'
import Row from '../components/teton/Row'
import Col from '../components/teton/Col'
import Stack from '../components/teton/Stack'

import Button from '../components/teton/Button'
import Showcase from '../components/site/Showcase'

function StacksPage() {
  return (
    <>
      <span class='prose'>  
        <h1>Stacks</h1>
        <p>Stacks are simple flex box utilities, designed to make creating components layouts easy.</p>
        <h2>Examples</h2>
        <p>Add a Stack wrapper to create a default flex box layout.</p>
      </span>
      <br/>
      <Showcase 
        class="w-full p-4 text-center m-auto space-y-4"
        component={
          <>
            <Stack>
              <div>
                <div className="p-4 text-center text-white bg-red-400 rounded">1 of 1</div>
              </div>
            </Stack>
            <Stack>
              <div>
                <div className="p-4 text-center text-white bg-red-400 rounded">1 of 2</div>
              </div>
              <div>
                <div className="p-4 text-center text-white bg-red-400 rounded">2 of 2</div>
              </div>
            </Stack>
            <Stack>
              <div>
                <div className="p-4 text-center text-white bg-red-400 rounded">1 of 3</div>
              </div>
              <div>
                <div className="p-4 text-center text-white bg-red-400 rounded">2 of 3</div>
              </div>
              <div>
                <div className="p-4 text-center text-white bg-red-400 rounded">3 of 3</div>
              </div>
            </Stack>
          </>
        } 
        syntaxBlock={
          `<> \n` +
          `  <Stack> \n` +
          `    <div>1 of 1</div> \n` +
          `  </Stack> \n` +
          `  <Stack> \n` +
          `    <div>1 of 2</div> \n` +
          `    <div>2 of 2</div> \n` +
          `  </Stack> \n` +
          `  <Stack> \n` +
          `   <div>1 of 3</div> \n` +
          `   <div>2 of 3</div> \n` +
          `   <div>3 of 3</div> \n` +
          ` </Stack> \n` +
          `</>`} 
        title="Stacks" 
      />
      <span class='prose'>  
        <h2>Stretch</h2>
        <p>Use the stretch prop to make any of the divs span the remaning width of the stack.</p>
      </span>
      <br/>
      <Showcase 
        class="w-full p-4 text-center m-auto space-y-4"
        component={
          <>
            <Stack stretch="center">
              <div>
                <div className="p-4 text-center text-white bg-red-400 rounded">1 of 5</div>
              </div>
              <div>
                <div className="p-4 text-center text-white bg-red-400 rounded">2 of 5</div>
              </div>
              <div>
                <div className="p-4 text-center text-white bg-red-400 rounded">3 of 5</div>
              </div>
              <div>
                <div className="p-4 text-center text-white bg-red-400 rounded">4 of 5</div>
              </div>
              <div>
                <div className="p-4 text-center text-white bg-red-400 rounded">5 of 5</div>
              </div>
            </Stack>
            <Stack stretch="ends">
              <div>
                <div className="p-4 text-center text-white bg-red-400 rounded">1 of 3</div>
              </div>
              <div>
                <div className="p-4 text-center text-white bg-red-400 rounded">2 of 3</div>
              </div>
              <div>
                <div className="p-4 text-center text-white bg-red-400 rounded">3 of 3</div>
              </div>
            </Stack>
            <Stack stretch="first">
              <div>
                <div className="p-4 text-center text-white bg-red-400 rounded">1 of 3</div>
              </div>
              <div>
                <div className="p-4 text-center text-white bg-red-400 rounded">2 of 3</div>
              </div>
              <div>
                <div className="p-4 text-center text-white bg-red-400 rounded">3 of 3</div>
              </div>
            </Stack>
            <Stack stretch="middle">
              <div>
                <div className="p-4 text-center text-white bg-red-400 rounded">1 of 4</div>
              </div>
              <div>
                <div className="p-4 text-center text-white bg-red-400 rounded">2 of 4</div>
              </div>
              <div>
                <div className="p-4 text-center text-white bg-red-400 rounded">3 of 4</div>
              </div>
              <div>
                <div className="p-4 text-center text-white bg-red-400 rounded">4 of 4</div>
              </div>
            </Stack>
            <Stack stretch="last">
              <div>
                <div className="p-4 text-center text-white bg-red-400 rounded">1 of 3</div>
              </div>
              <div>
                <div className="p-4 text-center text-white bg-red-400 rounded">2 of 3</div>
              </div>
              <div>
                <div className="p-4 text-center text-white bg-red-400 rounded">3 of 3</div>
              </div>
            </Stack>
          </>
        } 
        syntaxBlock={
          `<> \n` +
          `  <Stack stretch="center"> \n` +
          `   <div>1 of 5</div> \n` +
          `   <div>2 of 5</div> \n` +
          `   <div>3 of 5</div> \n` +
          `   <div>4 of 5</div> \n` +
          `   <div>5 of 5</div> \n` +
          ` </Stack> \n` +
          ` <Stack stretch="ends"> \n` +
          `   <div>1 of 3</div> \n` +
          `   <div>2 of 3</div> \n` +
          `   <div>3 of 3</div> \n` +
          ` </Stack> \n` +
          ` <Stack stretch="first"> \n` +
          `   <div>1 of 3</div> \n` +
          `   <div>2 of 3</div> \n` +
          `   <div>3 of 3</div> \n` +
          ` </Stack> \n` +
          ` <Stack stretch="middle"> \n` +
          `   <div>1 of 5</div> \n` +
          `   <div>2 of 5</div> \n` +
          `   <div>3 of 5</div> \n` +
          `   <div>4 of 5</div> \n` +
          `   <div>5 of 5</div> \n` +
          ` </Stack> \n` +
          ` <Stack stretch="last"> \n` +
          `   <div>1 of 3</div> \n` +
          `   <div>2 of 3</div> \n` +
          `   <div>3 of 3</div> \n` +
          ` </Stack> \n` +
          `</>`
          } 
        title="Stretch" 
      />

      <span class='prose'>  
        <h2>API</h2>
        <h3>Stack</h3>
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
                    <td className="px-6 py-2 text-sm font-medium text-gray-900 whitespace-nowrap">stretch</td>
                    <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">'none'<br/>'first'<br/>'center'<br/>'last'<br/>'middle'<br/>'ends'</td>
                    <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap"></td>
                    <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">Sets columns in row</td>
                  </tr>    
                  <tr>
                    <td className="px-6 py-2 text-sm font-medium text-gray-900 whitespace-nowrap">suffixClasses</td>
                    <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">string</td>
                    <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">""</td>
                    <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">Appends additional classes</td>
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

export default StacksPage;