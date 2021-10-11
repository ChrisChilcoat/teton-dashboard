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

function Buttons() {
  return (
    <span>
      <p><Breadcrumb trail={Crumbtrail} label="site component pages" /></p>
      <br/><br/>
      <span class='prose'>  
        <h1>Buttons</h1>
        <p>Custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.</p>
        <h2>Examples</h2>
        <p>Use any of the available button style types to quickly create a styled button. Just modify the variant prop.</p>
      </span>
      <br/>
      <Showcase 
        class="w-full p-4 text-center m-auto space-x-2" // fix this...
        component={
          <>
            <Button variant="primary" text="Primary" />
            <Button variant="secondary" text="Secondary" />
            <Button variant="success" text="Success" />
            <Button variant="warning" text="Warning" />
            <Button variant="danger" text="Danger" />
            <Button variant="info" text="Info" />
            <Button variant="light" text="Light" />
            <Button variant="dark" text="Dark" />
          </>
        } 
        syntaxBlock='DragAndDropComposer' 
        title="Buttons" 
      />
      <span class='prose'>  
        <h2>Outline</h2>
        <p>For a lighter touch, Buttons also come in outline-* variants with no background color.</p>
      </span>
      <br/>
      <Showcase 
        class="w-full p-4 text-center m-auto space-x-2" // fix this...
        component={
          <>
            <Button variant="outline-primary" text="Primary" />
            <Button variant="outline-secondary" text="Secondary" />
            <Button variant="outline-success" text="Success" />
            <Button variant="outline-warning" text="Warning" />
            <Button variant="outline-danger" text="Danger" />
            <Button variant="outline-info" text="Info" />
            <Button variant="outline-light" text="Light" />
            <Button variant="outline-dark" text="Dark" />
          </>
        } 
        syntaxBlock='DragAndDropComposer' 
        title="Outline" 
      />
      <span class='prose'>  
        <h2>Rounded</h2>
        <p>Round button corners by adding the rounded prop</p>
      </span>
      <br/>
      <Showcase 
        class="w-full p-4 text-center m-auto space-x-2" // fix this...
        component={
          <>
            <Button variant="primary" text="Rounded Button" rounded />
            <Button variant="secondary" text="Rounded Button" rounded />
          </>
        } 
        syntaxBlock='DragAndDropComposer' 
        title="Rounded" 
      />
      <span class='prose'>  
        <h2>Sizes</h2>
        <p>Fancy larger or smaller buttons?<br/>
        Add size="xs", size="sm", size="lg" size="xl" for additional sizes.</p>
      </span>
      <br/>
      <Showcase 
        class="w-full p-4 text-center m-auto space-y-2 space-x-2 align-middle" // fix this...
        component={
          <>
            <Button variant="primary" size="xl" text="XL Button" />
            <Button variant="primary" size="lg" text="LG Button" />
            <Button variant="primary" size="sm" text="SM Button" />
            <Button variant="primary" size="xs" text="XS Button" />
          </>
        } 
        syntaxBlock='DragAndDropComposer' 
        title="Sizes" 
      />
      <span class='prose'>  
        <h2>Block buttons</h2>
        <p>Create full-width, “block buttons” by adding the block prop.</p>
      </span>
      <br/>
      <Showcase 
        class="w-full p-4 text-center m-auto space-y-2" // fix this...
        component={
          <>
            <Button variant="primary" text="Block Button" block />
            <Button variant="secondary" text="Block Button" block />
          </>
        } 
        syntaxBlock='DragAndDropComposer' 
        title="Block" 
      />
      <span class='prose'>  
        <h2>Active state</h2>
        <p>To set a button's active state simply set the component's active prop.</p>
      </span>
      <br/>
      <Showcase 
        class="w-full p-4 text-center m-auto space-x-2" // fix this...
        component={
          <>
            <Button variant="primary" text="Active Button" active />
            <Button variant="secondary" text="Active Button" active />
          </>
        } 
        syntaxBlock='DragAndDropComposer' 
        title="Active" 
      />
      <span class='prose'>  
        <h2>Disabled state</h2>
        <p>Make buttons look inactive by adding the disabled prop to.</p>
      </span>
      <br/>
      <Showcase 
        class="w-full p-4 text-center m-auto space-x-2" 
        component={
          <>
            <Button variant="primary" text="Disabled Button" disabled />
            <Button variant="secondary" text="Disabled Button" disabled />
          </>
        } 
        syntaxBlock={
        `<Button variant="primary" text="Disabled Button" disabled /> \n<Button variant="secondary" text="Disabled Button" disabled />`
        }
        title="Active" 
      />
      <span class='prose'>  
        <h2>Loading state</h2>
        <p>Convert buttons to a loading state by adding the loading prop.</p>
      </span>
      <br/>
      <Showcase 
        class="w-full p-4 text-center m-auto space-x-2" // fix this...
        component={
          <>
            <Button variant="primary" text="Button" loading />
            <Button variant="secondary" text="Button" loading />
          </>
        } 
        syntaxBlock='DragAndDropComposer' 
        title="Loading" 
      />
      <span class='prose'>  
        <h2>Icons</h2>
        <p>Add icons to your buttons by adding the icon prop</p>
      </span>
      <br/>
      <Showcase 
        class="w-full p-4 text-center m-auto space-x-2" // fix this...
        component={
          <>
            <Button variant="primary" text="Button" icon={<ExclamationIcon/>} />
            <Button variant="secondary" text="Button" icon={<ExclamationIcon/>} />
          </>
        } 
        syntaxBlock='DragAndDropComposer' 
        title="Loading" 
      />
        <span class='prose'>  
        <h2>Secondary Icons</h2>
        <p>Add secondary icons to your buttons by adding the secondaryIcon prop</p>
      </span>
      <br/>
      <Showcase 
        class="w-full p-4 text-center m-auto space-x-2" // fix this...
        component={
          <>
            <Button variant="primary" text="Button" secondaryIcon={<ChevronDownIcon/>} />
            <Button variant="secondary" text="Button" secondaryIcon={<ChevronDownIcon/>} />
          </>
        } 
        syntaxBlock='DragAndDropComposer' 
        title="Loading" 
      />
      <span class='prose'>  
        <h2>Icon sizes</h2>
        <p>Change the size of button icons by using the iconSize prop. <br/>
        Add iconSize="xs", iconSize="sm", iconSize="lg" iconSize="xl" for additional sizes.</p>

      </span>
      <br/>
      <Showcase 
        class="w-full p-4 text-center m-auto space-x-2" // fix this...
        component={
          <>
            <Button variant="primary" text="Icon SM" iconSize="sm" icon={<ExclamationIcon/>} />
            <Button variant="secondary" text="Icon LG" iconSize="lg" icon={<ExclamationIcon/>} />
            <Button variant="secondary" text="Icon XL" iconSize="xl" icon={<ExclamationIcon/>} />
          </>
        } 
        syntaxBlock='DragAndDropComposer' 
        title="Icon sizes" 
      />
      <span class='prose'>  
        <h2>Icon only buttons</h2>
        <p>Create icon only buttons by removing the text prop.</p>
      </span>
      <br/>
      <Showcase 
        class="w-full p-4 text-center m-auto space-x-2" // fix this...
        component={
          <>
            <Button variant="primary" secondaryIcon={<DotsHorizontalIcon/>} />
            <Button variant="secondary" secondaryIcon={<DotsHorizontalIcon/>} />
          </>
        } 
        syntaxBlock='DragAndDropComposer' 
        title="Icon Buttons" 
      />
      <span class='prose'>  
        <h2>Notifications</h2>
        <p>Create notification badges by passing in custom markup.</p>
      </span>
      <br/>
      <Showcase 
        class="w-full p-4 text-center m-auto space-x-2" // fix this...
        component={
          <>
            <Button variant="outline-light" size="md" icon={<BellIcon/>} iconSize="lg" rounded > 
              <span class="sr-only">View notifications</span>
              <span class="absolute top-0 right-0 block w-2 h-2 bg-red-400 rounded-full ring-2 ring-white"></span>
            </Button>
          </>
        } 
        syntaxBlock='DragAndDropComposer' 
        title="Icon Buttons" 
      />
      <span class='prose'>  
        <h2>Avatars</h2>
        <p>Create button backgrounds by passing in custom markup.</p>
      </span>
      <br/>
      <Showcase 
        class="w-full p-4 text-center m-auto space-x-2" // fix this...
        component={
          <>
            <Button variant="dark" size="md" rounded suffixClasses="overflow-hidden">
              <span className="sr-only">User Profile</span>
              <img src="https://avatars0.githubusercontent.com/u/39002455?v=4" aria-hidden="true" alt="touha98" class="object-cover w-full h-full top-0 absolute bottom-0 left-0 right-0 hover:opacity-80 transition duration-300 ease-in-out"></img>
            </Button>
          </>
        } 
        syntaxBlock='DragAndDropComposer' 
        title="Icon Buttons" 
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
                      <td className="px-6 py-2 text-sm font-medium text-gray-900 whitespace-nowrap">active</td>
                      <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">bool</td>
                      <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">false</td>
                      <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">Set state to active</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-2 text-sm font-medium text-gray-900 whitespace-nowrap">block</td>
                      <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">bool</td>
                      <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">false</td>
                      <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">Sets width to full</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-2 text-sm font-medium text-gray-900 whitespace-nowrap">disabled</td>
                      <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">bool</td>
                      <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">false</td>
                      <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">Sets state to disabled</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-2 text-sm font-medium text-gray-900 whitespace-nowrap">icon</td>
                      <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">object</td>
                      <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">null</td>
                      <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">Sets a primary icon</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-2 text-sm font-medium text-gray-900 whitespace-nowrap">iconSize</td>
                      <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">'xs' | 'sm' | 'lg' | 'xl'</td>
                      <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">'md'</td>
                      <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">Adjusts icon size</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-2 text-sm font-medium text-gray-900 whitespace-nowrap">loading</td>
                      <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">bool</td>
                      <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">false</td>
                      <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">Sets state to loading</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-2 text-sm font-medium text-gray-900 whitespace-nowrap">rounded</td>
                      <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">bool</td>
                      <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">false</td>
                      <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">Sets radius to full</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-2 text-sm font-medium text-gray-900 whitespace-nowrap">onClick</td>
                      <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">func</td>
                      <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">null</td>
                      <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">Sets onClick event</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-2 text-sm font-medium text-gray-900 whitespace-nowrap">size</td>
                      <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">'xs' | 'sm' | 'lg' | 'xl'</td>
                      <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">'md'</td>
                      <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">Adjusts button size</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-2 text-sm font-medium text-gray-900 whitespace-nowrap">suffixClasses</td>
                      <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">string</td>
                      <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">""</td>
                      <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">Appends additional classes</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-2 text-sm font-medium text-gray-900 whitespace-nowrap">secondaryIcon</td>
                      <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">object</td>
                      <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">null</td>
                      <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">Sets a secondary icon</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-2 text-sm font-medium text-gray-900 whitespace-nowrap">text</td>
                      <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">string</td>
                      <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">""</td>
                      <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">Sets button text</td>
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
{/*
        Button.propTypes = {
          active: PropTypes.bool,
          block: PropTypes.bool,
          disabled: PropTypes.bool,
          icon: PropTypes.object,
          iconSize: PropTypes.string,
          loading: PropTypes.bool,
          rounded: PropTypes.bool,
          onClick: PropTypes.func,
          size: PropTypes.string,
          suffixClasses: PropTypes.string,
          text: PropTypes.string,
          variant: PropTypes.string, 
        }

        Button.defaultProps = {
          active: false,
          block: false,
          disabled: false,
          icon: null,
          iconSize: 'md',
          loading: false,
          rounded: false,
          onClick: null,
          size: 'md',
          suffixClasses: '',
          text: '',
          variant: 'secondary', 
        };

*/}
      




      <Button variant="primary" text="Primary" />
      <Button variant="success" text="Success" />


                        
        <br/><br/>

        <Alert 
          variant="primary" 
          icon={<ExclamationIcon/>}
          text='Warning'
          subtext={["This is ", <a href="/" className="underline">link</a>, " working."]}
          dismissable 
        />

        <Alert 
          variant="secondary" 
          icon={<ExclamationIcon/>}
          subtext={["This is ", <a href="/" className="underline">link</a>, " working."]} 
        /> 

        <Alert 
          variant="danger" 
          icon={<ExclamationIcon/>}
          text="this should be red, danger"
        />   

        <br/><br/>
        {/*
        <Dropdown>
          <Dropdown.Button>
            <Button variant="outline-light" text="ass" icon={<DotsHorizontalIcon class='transform rotate-90'/>} iconSize="lg" rounded />
          </Dropdown.Button>
          <Dropdown.Items>
            <Button variant="light" text="last" />
          </Dropdown.Items>
        </Dropdown>
          <br/><br/>
        */}

        <Button variant="secondary" icon={<DotsHorizontalIcon class='transform rotate-90'/>} text="I should be loading" loading />


        <QuantumToolbar>
          <Button variant="secondary" text="I should be loading" loading />
          <Button variant="success" text="Success" />
          <Button variant="warning" text="Warning" />
          <Button variant="danger" text="Danger" />
          <Button variant="info" text="Info" />
          <Button variant="light" text="Light" />
          <Button variant="dark" text="Dark" />
          <DropdownButton variant="outline-light" text="Click me" loading icon={<DotsHorizontalIcon class='transform rotate-90'/>} iconSize="lg" rounded >
            <DropdownButton.Menu as={Fragment}>
              <Button variant="light" text="last" />
            </DropdownButton.Menu>
          </DropdownButton>
        </QuantumToolbar>

        <br/><br/>

        <div class="flex space-x-2">
          <Button variant="link" size="md" icon={<BellIcon/>} iconSize="lg" rounded ></Button>
          <Button variant="outline-link" size="md" icon={<BellIcon/>} iconSize="lg" rounded ></Button>
          <Button variant="light" size="md" icon={<BellIcon/>} iconSize="lg" rounded ></Button>
          <Button variant="primary" size="sm" suffixClasses="w-32" rounded >Follow</Button>
          <DropdownButton variant="outline-light" text="" icon={<DotsHorizontalIcon class='transform rotate-90'/>} iconSize="lg" rounded />
          <Button variant="light" size="md" icon={<BellIcon/>} iconSize="lg" rounded > 
            <span class="sr-only">View notifications</span>
            <span class="absolute top-0 right-0 block w-2 h-2 bg-red-400 rounded-full ring-2 ring-white"></span>
          </Button>
          <Button variant="dark" size="md" rounded suffixClasses="overflow-hidden">
            <span className="sr-only">User Profile</span>
            <img src="https://avatars0.githubusercontent.com/u/39002455?v=4" aria-hidden="true" alt="touha98" class="object-cover w-full h-full top-0 absolute bottom-0 left-0 right-0 hover:opacity-80 transition duration-300 ease-in-out"></img>
          </Button>
        </div>


        <br/><br/>
        
        <ButtonGroup
          label='select a new item'
          variant="secondary"
          size="xs"
          rounded
        >
          <Button variant="secondary" text="Vertical" icon={<SwitchVerticalIcon/>} active />
          <Button variant="success" text="Horizontal" icon={<SwitchHorizontalIcon/>} />         
        </ButtonGroup>

        <br/><br/>

        <ButtonGroup
          label='select a new item'
          variant="secondary"
          size="md"
        >
          <Button variant="secondary" text="Vertical" icon={<SwitchVerticalIcon/>} active />
          <Button variant="success" text="Horizontal" icon={<SwitchHorizontalIcon/>} secondaryIcon={<SwitchHorizontalIcon/>} />         
        </ButtonGroup>

        <br/><br/>
        
        <ButtonGroup
          label='select a new item'
          variant="secondary"
          size="xl"
          rounded
        >
          <Button variant="secondary" text="Vertical" icon={<SwitchVerticalIcon/>} active />
          <Button variant="success" text="Horizontal" icon={<SwitchHorizontalIcon/>} />         
        </ButtonGroup>

        <br/><br/>
        
        <ButtonGroup
          label='select a new item'
          variant="outline-link"
          size="sm"
          rounded
        >
          <Button variant="secondary" text="Vertical" icon={<SwitchVerticalIcon/>} active />
          <Button variant="success" text="Horizontal" icon={<SwitchHorizontalIcon/>} />
          <DropdownButton variant="success" text="Dropdown Button" icon={<SwitchVerticalIcon/>} secondaryIcon={<ChevronDownIcon/>} />           
        </ButtonGroup>


  
        
        
        <br/><br/>
        
      
        <div class="space-x-2">
          <Button variant="primary" icon={<XIcon/>} tooltip="button" size="sm" disabled />
          <Button variant="primary" icon={<XIcon/>} text="Primary with icon" tooltip="button" size="sm" />
          <Button variant="primary" text="Primary" size="sm"/>
          <Button variant="secondary" text="Secondary" size="sm" rounded />
          <Button variant="success" text="Success" size="sm" />
          <Button variant="danger" text="Danger" size="sm" />
          <Button variant="info" text="Info" size="sm" />
          <Button variant="light" text="Light" size="sm" />
          <Button variant="dark" text="Dark" size="sm" />
        </div>
          <br/><br/>
        <div class="space-x-2">
          <Button variant="primary" icon={<XIcon/>} iconSize="sm" />
          <Button variant="primary" icon={<XIcon/>} iconSize="md" size="md" active rounded />
          <Button variant="primary" icon={<XIcon/>} iconSize="lg" text="Primary" size="md" />
          <Button variant="primary" icon={<XIcon/>} iconSize="xl" text="Primary Active" size="md" active />
          <Button variant="secondary" text="Secondary" size="md" />
          <Button variant="secondary" text="Secondary" size="md" active />
          <Button variant="success" text="Success" size="md" />
          <Button variant="success" text="Success" size="md" active />
          <Button variant="warning" text="Warning" size="md" />
          <Button variant="warning" text="Warning" size="md" active />
          <Button variant="danger" text="Danger" size="md" />
          <Button variant="danger" text="Danger" size="md" active />
          <Button variant="info" text="Info" size="md" />
          <Button variant="info" text="Info" size="md" active />
          <Button variant="light" text="Light" size="md" />
          <Button variant="light" text="Light" size="md" active />
          <Button variant="dark" text="Dark" size="md" />
          <Button variant="dark" text="Dark" size="md" active />
        </div>
          <br/><br/>
        <div class="space-x-2">
          <Button variant="outline-secondary" disabled icon={<XIcon/>} size="lg" />
          <Button variant="outline-secondary" icon={<XIcon/>} text="Outline Secondary" size="lg" />
          <Button variant="outline-primary" text="Outline Primary" size="lg" />
          <Button variant="outline-success" text="Success" size="lg" />
          <Button variant="outline-warning" text="Warning" size="lg" />
          <Button variant="outline-danger" text="Danger" size="lg" />
          <Button variant="outline-info" text="Info" size="lg" />
          <Button variant="outline-light" text="Light" size="lg" />
          <Button variant="outline-dark" text="Dark" size="lg" />
        </div>
        <div class="space-x-2">
          <Button variant="outline-secondary" disabled icon={<XIcon/>} size="lg" active/>
          <Button variant="outline-secondary" icon={<XIcon/>} text="Outline Secondary" size="lg" active/>
          <Button variant="outline-primary" text="Active!!!!!!!" size="lg" active />
          <Button variant="outline-success" text="Success" size="lg" active />
          <Button variant="outline-warning" text="Warning" size="lg" active />
          <Button variant="outline-danger" text="Danger" size="lg" active />
          <Button variant="outline-info" text="Info" size="lg" active />
          <Button variant="outline-light" text="Light" size="lg" active />
          <Button variant="outline-dark" text="Dark" size="lg" active />
        </div>
          <br/><br/>
        <div class="space-x-2">
          <Button variant="outline-secondary" icon={<XIcon/>} iconSize="xl" size="xl" />
          <Button variant="outline-secondary" icon={<XIcon/>} text="Outline Secondary" size="xl" />
          <Button variant="outline-primary" text="Outline Primary" size="xl" />
          <Button variant="outline-success" text="Success" size="xl" />
          <Button variant="outline-warning" disabled text="Warning" size="xl" />
          <Button variant="outline-danger" text="Danger" size="xl" />
          <Button variant="outline-info" text="Info" size="xl" />
          <Button variant="outline-light" text="Light" size="xl" />
        </div>
          <br/><br/>
          <Button variant="outline-light" text="block" size="xl" block />
          <br/><br/>
          <Button variant="secondary" icon={<XIcon/>} text="Outline Secondary" size="xl" block />
          <br/><br/>
          <Button variant="secondary" icon={<XIcon/>} text="Outline Secondary" size="xl" block disabled />
    </span>
  )
}

export default Buttons;