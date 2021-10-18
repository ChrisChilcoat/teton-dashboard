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

export default function threeColumnLayout() {
  return (
    <span>
      <span class='prose'>  
        <h1>Three Column Layout</h1>
        <p>This layout offers a variety of configureable options.</p>
        <h2>Examples</h2>
        <p>Use this layout to create a header, main, sidebar, and aside.</p>
      </span>
      <br/>
      <Showcase 
        class="w-full p-4 text-center m-auto space-x-2" // fix this...
        component={
          <>
            
          </>
        } 
        syntaxBlock='DragAndDropComposer' 
        title="Buttons" 
      />
    </span>
  )
}