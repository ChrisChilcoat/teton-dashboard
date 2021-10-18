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

function Dropdowns() {
  return (
    <span>
      <span class='prose'>  
        <h1>Dropdowns</h1>
        <p>Custom dropdowns can be added.</p>
        <h2>Examples</h2>
        <p>Use any of the available button style types to quickly create a styled dropdown button. Just modify the variant prop.</p>
      </span>
      <br/>
      <Showcase 
        class="w-full p-4 text-center m-auto space-x-2" // fix this...
        component={
          <>
            <DropdownButton variant="outline-light" text="" icon={<DotsHorizontalIcon class='transform rotate-90'/>} iconSize="lg" rounded />
          </>
        } 
        syntaxBlock='DragAndDropComposer' 
        title="Buttons" 
      />
     
    </span>
  )
}

export default Dropdowns;