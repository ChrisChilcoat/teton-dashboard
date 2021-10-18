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

function ButtonGroups() {
  return (
    <span>
      <span class='prose'>  
        <h1>Button Groups</h1>
        <p>Button Groups work in combination with the Button component. Just wrap your Buttons in a Button Group component and voilà!</p>
        <h2>Examples</h2>
        <p>Use any of the available button group style types to quickly create a styled button groups. Just modify the variant prop.</p>
      </span>
      <br/>
      <Showcase 
        class="w-full p-4 text-center m-auto space-y-2"
        component={
          <>
            <ButtonGroup variant="primary">
              <Button text="Button" />
              <Button text="Button" />
            </ButtonGroup>
            <ButtonGroup variant="secondary">
              <Button text="Button" />
              <Button text="Button" />
            </ButtonGroup>
            <ButtonGroup variant="success">
              <Button text="Button" />
              <Button text="Button" />
            </ButtonGroup>
            <ButtonGroup variant="warning">
              <Button text="Button" />
              <Button text="Button" />
            </ButtonGroup>
            <ButtonGroup variant="danger">
              <Button text="Button" />
              <Button text="Button" />
            </ButtonGroup>
            <ButtonGroup variant="info">
              <Button text="Button" />
              <Button text="Button" />
            </ButtonGroup>
            <ButtonGroup variant="light">
              <Button text="Button" />
              <Button text="Button" />
            </ButtonGroup>
            <ButtonGroup variant="dark">
              <Button text="Button" />
              <Button text="Button" />
            </ButtonGroup>
          </>
        } 
        syntaxBlock={
          '<ButtonGroup variant="primary"> \n' +
          '  <Button text="Button" /> \n' +
          '  <Button text="Button" /> \n' +
          '</ButtonGroup> \n' +
          '<ButtonGroup variant="secondary"> \n' +
          '  <Button text="Button" /> \n' +
          '  <Button text="Button" /> \n' +
          '</ButtonGroup> \n' +
          '<ButtonGroup variant="success"> \n' +
          '  <Button text="Button" /> \n' +
          '  <Button text="Button" /> \n' +
          '</ButtonGroup> \n' +
          '<ButtonGroup variant="warning"> \n' +
          '  <Button text="Button" /> \n' +
          '  <Button text="Button" /> \n' +
          '</ButtonGroup> \n' +
          '<ButtonGroup variant="danger"> \n' +
          '  <Button text="Button" /> \n' +
          '  <Button text="Button" /> \n' +
          '</ButtonGroup> \n' +
          '<ButtonGroup variant="info"> \n' +
          '  <Button text="Button" /> \n' +
          '  <Button text="Button" /> \n' +
          '</ButtonGroup> \n' +
          '<ButtonGroup variant="light"> \n' +
          '  <Button text="Button" /> \n' +
          '  <Button text="Button" /> \n' +
          '</ButtonGroup> \n' +
          '<ButtonGroup variant="dark"> \n' +
          '  <Button text="Button" /> \n' +
          '  <Button text="Button" /> \n' +
          '</ButtonGroup>'
        }
        title="Button groups" 
      />
      <span class='prose'>  
        <h2>Outline</h2>
        <p>For a lighter touch, button groups also come in outline-* variants with no background color.</p>
      </span>
      <br/>
      <Showcase 
        class="w-full p-4 text-center m-auto space-y-2"
        component={
          <>
            <ButtonGroup
              label='button group'
              variant="outline-primary"
            >
              <Button text="Button" />
              <Button text="Button" />
            </ButtonGroup>
            <ButtonGroup
              label='button group'
              variant="outline-secondary"
            >
              <Button text="Button" />
              <Button text="Button" />
            </ButtonGroup>
            <ButtonGroup
              label='button group'
              variant="outline-success"
            >
              <Button text="Button" />
              <Button text="Button" />
            </ButtonGroup>
            <ButtonGroup
              label='button group'
              variant="outline-warning"
            >
              <Button text="Button" />
              <Button text="Button" />
            </ButtonGroup>
            <ButtonGroup
              label='button group'
              variant="outline-danger"
            >
              <Button text="Button" />
              <Button text="Button" />
            </ButtonGroup>
            <ButtonGroup
              label='button group'
              variant="outline-info"
            >
              <Button text="Button" />
              <Button text="Button" />
            </ButtonGroup>
            <ButtonGroup
              label='button group'
              variant="outline-light"
            >
              <Button text="Button" />
              <Button text="Button" />
            </ButtonGroup>
            <ButtonGroup
              label='button group'
              variant="outline-dark"
            >
              <Button text="Button" />
              <Button text="Button" />
            </ButtonGroup>
          </>
        } 
        syntaxBlock={
          '<ButtonGroup variant="outline-primary"> \n' +
          '  <Button text="Button" /> \n' +
          '  <Button text="Button" /> \n' +
          '</ButtonGroup> \n' +
          '<ButtonGroup variant="outline-secondary"> \n' +
          '  <Button text="Button" /> \n' +
          '  <Button text="Button" /> \n' +
          '</ButtonGroup> \n' +
          '<ButtonGroup variant="outline-success"> \n' +
          '  <Button text="Button" /> \n' +
          '  <Button text="Button" /> \n' +
          '</ButtonGroup> \n' +
          '<ButtonGroup variant="outline-warning"> \n' +
          '  <Button text="Button" /> \n' +
          '  <Button text="Button" /> \n' +
          '</ButtonGroup> \n' +
          '<ButtonGroup variant="outline-danger"> \n' +
          '  <Button text="Button" /> \n' +
          '  <Button text="Button" /> \n' +
          '</ButtonGroup> \n' +
          '<ButtonGroup variant="outline-info"> \n' +
          '  <Button text="Button" /> \n' +
          '  <Button text="Button" /> \n' +
          '</ButtonGroup> \n' +
          '<ButtonGroup variant="outline-light"> \n' +
          '  <Button text="Button" /> \n' +
          '  <Button text="Button" /> \n' +
          '</ButtonGroup> \n' +
          '<ButtonGroup variant="outline-dark"> \n' +
          '  <Button text="Button" /> \n' +
          '  <Button text="Button" /> \n' +
          '</ButtonGroup>'
        }
        title="Outline groups" 
      />
      <span class='prose'>  
        <h2>Rounded</h2>
        <p>Round button group corners by adding the rounded prop</p>
      </span>
      <br/>
      <Showcase 
        class="w-full p-4 text-center m-auto space-y-2" 
        component={
          <>
            <ButtonGroup
              variant="primary"
              rounded
            >
              <Button text="Button" />
              <Button text="Button" />
            </ButtonGroup>
            <ButtonGroup
              variant="secondary"
              rounded
            >
              <Button text="Button" />
              <Button text="Button" />
            </ButtonGroup>
          </>
        } 
        syntaxBlock={
          '<ButtonGroup variant="outline-primary" rounded> \n' +
          '  <Button text="Button" /> \n' +
          '  <Button text="Button" /> \n' +
          '</ButtonGroup> \n' +
          '<ButtonGroup variant="outline-secondary" rounded> \n' +
          '  <Button text="Button" /> \n' +
          '  <Button text="Button" /> \n' +
          '</ButtonGroup>'
        } 
        title="Rounded groups" 
      />
      <span class='prose'>  
        <h2>Sizes</h2>
        <p>Fancy larger or smaller button groups?<br/>
        Add size="xs", size="sm", size="lg" size="xl" for additional sizes.</p>
      </span>
      <br/>
      <Showcase 
        class="w-full p-4 text-center m-auto space-y-2 space-x-2 align-middle" 
        component={
          <>
            <ButtonGroup variant="primary" size="xl">
              <Button text="Button" />
              <Button text="Button" />
            </ButtonGroup>
            <ButtonGroup variant="primary" size="lg">
              <Button text="Button" />
              <Button text="Button" />
            </ButtonGroup>
            <ButtonGroup variant="primary" size="md">
              <Button text="Button" />
              <Button text="Button" />
            </ButtonGroup>
            <ButtonGroup variant="primary" size="sm">
              <Button text="Button" />
              <Button text="Button" />
            </ButtonGroup>
            <ButtonGroup variant="primary" size="xs">
              <Button text="Button" />
              <Button text="Button" />
            </ButtonGroup>
          </>
        } 
        syntaxBlock={
          '<ButtonGroup variant="primary" size="xl"> \n' +
          '  <Button text="Button" /> \n' +
          '  <Button text="Button" /> \n' +
          '</ButtonGroup> \n' +
          '<ButtonGroup variant="primary" size="lg"> \n' +
          '  <Button text="Button" /> \n' +
          '  <Button text="Button" /> \n' +
          '</ButtonGroup> \n' +
          '<ButtonGroup variant="primary" size="md"> \n' +
          '  <Button text="Button" /> \n' +
          '  <Button text="Button" /> \n' +
          '</ButtonGroup> \n' +
          '<ButtonGroup variant="primary" size="sm"> \n' +
          '  <Button text="Button" /> \n' +
          '  <Button text="Button" /> \n' +
          '</ButtonGroup> \n' +
          '<ButtonGroup variant="primary" size="xs"> \n' +
          '  <Button text="Button" /> \n' +
          '  <Button text="Button" /> \n' +
          '</ButtonGroup>'}
        title="Group sizes" 
      />
       <span class='prose'>  
        <h2>API</h2>
        <p>Button</p>
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
                      <td className="px-6 py-2 text-sm font-medium text-gray-900 whitespace-nowrap">rounded</td>
                      <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">bool</td>
                      <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">false</td>
                      <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">Sets radius to full</td>
                    </tr>     
                    <tr>
                      <td className="px-6 py-2 text-sm font-medium text-gray-900 whitespace-nowrap">size</td>
                      <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">'xs' | 'sm' | 'lg' | 'xl'</td>
                      <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">'md'</td>
                      <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">Adjusts button size</td>
                    </tr>          
                    <tr>
                      <td className="px-6 py-2 text-sm font-medium text-gray-900 whitespace-nowrap">variant</td>
                      <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">'primary' <br/> 'secondary' <br/> 'success' <br/> 'danger' <br/> 'warning' <br/> 'info' <br/> 'light' <br/> 'dark' <br/> 'outline-primary' <br/> 'outline-secondary' <br/> 'outline-success' <br/> 'outline-danger' <br/> 'outline-warning' <br/> 'outline-info' <br/> 'outline-light' <br/> 'outline-dark' </td>
                      <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">'secondary'</td>
                      <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">Sets button color</td>
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

export default ButtonGroups;