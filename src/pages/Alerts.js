import React, {Fragment} from 'react'

import { Dialog, Transition } from '@headlessui/react'
import { XIcon, ExclamationIcon } from '@heroicons/react/outline'
import { LinkIcon, PlusSmIcon, QuestionMarkCircleIcon, BellIcon, SwitchHorizontalIcon, SwitchVerticalIcon, DotsHorizontalIcon, ChevronDownIcon} from '@heroicons/react/solid'

import { breadcrumb as Crumbtrail } from '../components/teton/Data'

import Alert from '../components/teton/Alert'
import Button from '../components/teton/Button'
import ButtonGroup from '../components/teton/ButtonGroup'
import Breadcrumb from '../components/teton/Breadcrumb'
import DropdownButton from '../components/teton/DropdownButton'
import Dropdown from '../components/teton/Dropdown'
import Panel from '../components/teton/Panel'
import QuantumToolbar from '../components/teton/QuantumToolbar'

import Showcase from '../components/site/Showcase'

function Alerts() {
  return (
    <span>
      <span class='prose'>  
        <h1>Alerts</h1>
        <p>Custom alerts to quickly grab the users attention.</p>
        <h2>Examples</h2>
        <p>Use any of the available alert style types to quickly create a styled alert. Just modify the variant prop.</p>
      </span>
      <br/>
      <Showcase 
        class="w-full p-4 text-center m-auto space-y-2" // fix this...
        component={
          <>   
            <Alert 
              variant="primary" 
              icon={<ExclamationIcon/>}
              text='Primary'
              subtext={["Something needs your attention. ", <a href="/" className="underline">Check it out!</a>]} 
            />
            <Alert 
              variant="secondary" 
              icon={<ExclamationIcon/>}
              text='Secondary'
              subtext={["Something needs your attention. ", <a href="/" className="underline">Check it out!</a>]}
            /> 
            <Alert 
              variant="success" 
              icon={<ExclamationIcon/>}
              text='Success'
              subtext={["Something needs your attention. ", <a href="/" className="underline">Check it out!</a>]}
            />
            <Alert 
              variant="warning" 
              icon={<ExclamationIcon/>}
              text='Warning'
              subtext={["Something needs your attention. ", <a href="/" className="underline">Check it out!</a>]}
            />
            <Alert 
              variant="danger" 
              icon={<ExclamationIcon/>}
              text='Danger'
              subtext={["Something needs your attention. ", <a href="/" className="underline">Check it out!</a>]}
            />
            <Alert 
              variant="info" 
              icon={<ExclamationIcon/>}
              text='Info'
              subtext={["Something needs your attention. ", <a href="/" className="underline">Check it out!</a>]}
            />
          </>
        } 
        syntaxBlock={
            `<Alert \n` +
            `  variant="primary" \n` + 
            `  icon={<ExclamationIcon/>} \n` +
            `  text='Primary' \n` +
            `  subtext={["Something needs your attention. ", <a href="/" className="underline">Check it out!</a>]} \n` +
            `/> \n` + 
            `<Alert \n` +
            `  variant="secondary" \n` + 
            `  icon={<ExclamationIcon/>} \n` +
            `  text='Secondary' \n` +
            `  subtext={["Something needs your attention. ", <a href="/" className="underline">Check it out!</a>]} \n` +
            `/> \n` + 
            `<Alert \n` +
            `  variant="success" \n` + 
            `  icon={<ExclamationIcon/>} \n` +
            `  text='Success' \n` +
            `  subtext={["Something needs your attention. ", <a href="/" className="underline">Check it out!</a>]} \n` +
            `/> \n` +
            `<Alert \n` + 
            `  variant="warning" \n` + 
            `  icon={<ExclamationIcon/>} \n` +
            `  text='Warning' \n` +
            `  subtext={["Something needs your attention. ", <a href="/" className="underline">Check it out!</a>]} \n` +
            `/> \n` +
            `<Alert \n` + 
            `  variant="danger" \n` +
            `  icon={<ExclamationIcon/>} \n` +
            `  text='Danger' \n` +
            `  subtext={["Something needs your attention. ", <a href="/" className="underline">Check it out!</a>]} \n` +
            `/> \n` +
            `<Alert \n` +
            `  variant="info" \n` + 
            `  icon={<ExclamationIcon/>} \n` +
            `  text='Info' \n` +
            `  subtext={["Something needs your attention. ", <a href="/" className="underline">Check it out!</a>]} \n` +
            `/>`}
        title="Alerts" 
      />
      <span class='prose'>  
        <h2>Dismissable</h2>
        <p>Make your alerts dismissable by adding the dismissable prop.</p>
      </span>
      <br/>
      <Showcase 
        class="w-full p-4 text-center m-auto space-y-2" // fix this...
        component={
          <>   
            <Alert 
              variant="primary" 
              icon={<ExclamationIcon/>}
              text='Alert'
              subtext={"This alert is dismissable."}
              dismissable
            />
            <Alert 
              variant="secondary" 
              icon={<ExclamationIcon/>}
              text='Alert'
              subtext={"This alert is dismissable."}
              dismissable
            />
          </>
        } 
        syntaxBlock={
          `<Alert \n` +
          `  variant="primary" \n` + 
          `  icon={<ExclamationIcon/>} \n` +
          `  text='Primary' \n` +
          `  subtext={["Something needs your attention. ", <a href="/" className="underline">Check it out!</a>]} \n` +
          `  dismissable \n` + 
          `/> \n` + 
          `<Alert \n` +
          `  variant="secondary" \n` + 
          `  icon={<ExclamationIcon/>} \n` +
          `  text='Secondary' \n` +
          `  subtext={["Something needs your attention. ", <a href="/" className="underline">Check it out!</a>]} \n` +
          `  dismissable \n` + 
          `/>`}
        title="Dismissable alerts" 
      />
     
      <span class='prose'>  
        <h2>API</h2>
        <p>Alert</p>
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
                    <td className="px-6 py-2 text-sm font-medium text-gray-900 whitespace-nowrap">dismissable</td>
                    <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">bool</td>
                    <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">false</td>
                    <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">Make alerts dismissable</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-2 text-sm font-medium text-gray-900 whitespace-nowrap">icon</td>
                    <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">object</td>
                    <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">null</td>
                    <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">Sets a primary icon</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-2 text-sm font-medium text-gray-900 whitespace-nowrap">text</td>
                    <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">string</td>
                    <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">""</td>
                    <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">Sets alert text</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-2 text-sm font-medium text-gray-900 whitespace-nowrap">subText</td>
                    <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">string</td>
                    <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">""</td>
                    <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">Sets alert sub text</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-2 text-sm font-medium text-gray-900 whitespace-nowrap">variant</td>
                    <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">'primary' <br/> 'secondary' <br/> 'success' <br/> 'danger' <br/> 'warning' <br/> 'info' </td>
                    <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">'secondary'</td>
                    <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">Sets alert color</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </span>
  )
}

export default Alerts;