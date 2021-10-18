import React from 'react'

import { ExclamationIcon } from '@heroicons/react/outline'
import { BellIcon, DotsHorizontalIcon, ChevronDownIcon} from '@heroicons/react/solid'

import Button from '../components/teton/Button'
import Showcase from '../components/site/Showcase'

function Buttons() {
  return (
    <span>
      <span class='prose'>  
        <h1>Buttons</h1>
        <p>Custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.</p>
        <h2>Examples</h2>
        <p>Use any of the available button style types to quickly create a styled button. Just modify the variant prop.</p>
      </span>
      <br/>
      <Showcase 
        class="w-full p-4 text-center m-auto space-x-2"
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
        syntaxBlock={
          `<Button variant="primary" text="Primary" /> \n` +
          `<Button variant="secondary" text="Secondary" /> \n` +
          `<Button variant="success" text="Success" /> \n` +
          `<Button variant="warning" text="Warning" /> \n` +
          `<Button variant="danger" text="Danger" /> \n` +
          `<Button variant="info" text="Info" /> \n` +
          `<Button variant="light" text="Light" /> \n` +
          `<Button variant="dark" text="Dark" />`} 
        title="Buttons" 
      />
      <span class='prose'>  
        <h2>Outline</h2>
        <p>For a lighter touch, Buttons also come in outline-* variants with no background color.</p>
      </span>
      <br/>
      <Showcase 
        class="w-full p-4 text-center m-auto space-x-2"
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
        syntaxBlock={
          `<Button variant="outline-primary" text="Primary" /> \n` +
          `<Button variant="outline-secondary" text="Secondary" /> \n` +
          `<Button variant="outline-success" text="Success" /> \n` +
          `<Button variant="outline-warning" text="Warning" /> \n` +
          `<Button variant="outline-danger" text="Danger" /> \n` +
          `<Button variant="outline-info" text="Info" /> \n` +
          `<Button variant="outline-light" text="Light" /> \n` +
          `<Button variant="outline-dark" text="Dark" />`} 
        title="Outline buttons" 
      />
      <span class='prose'>  
        <h2>Rounded</h2>
        <p>Round button corners by adding the rounded prop</p>
      </span>
      <br/>
      <Showcase 
        class="w-full p-4 text-center m-auto space-x-2" 
        component={
          <>
            <Button variant="primary" text="Rounded Button" rounded />
            <Button variant="secondary" text="Rounded Button" rounded />
          </>
        } 
        syntaxBlock={
          `<Button variant="primary" text="Rounded Button" rounded /> \n` +
          `<Button variant="secondary" text="Rounded Button" rounded />`}
        title="Rounded buttons" 
      />
      <span class='prose'>  
        <h2>Sizes</h2>
        <p>Fancy larger or smaller buttons?<br/>
        Add size="xs", size="sm", size="lg" size="xl" for additional sizes.</p>
      </span>
      <br/>
      <Showcase 
        class="w-full p-4 text-center m-auto space-y-2 space-x-2 align-middle" 
        component={
          <>
            <Button variant="primary" size="xl" text="XL Button" />
            <Button variant="primary" size="lg" text="LG Button" />
            <Button variant="primary" size="sm" text="SM Button" />
            <Button variant="primary" size="xs" text="XS Button" />
          </>
        } 
        syntaxBlock={
          `<Button variant="primary" size="xl" text="XL Button" /> \n` +
          `<Button variant="primary" size="lg" text="LG Button" /> \n` +
          `<Button variant="primary" size="sm" text="SM Button" /> \n` +
          `<Button variant="primary" size="xs" text="XS Button" />`} 
        title="Button Sizes" 
      />
      <span class='prose'>  
        <h2>Block buttons</h2>
        <p>Create full-width, “block buttons” by adding the block prop.</p>
      </span>
      <br/>
      <Showcase 
        class="w-full p-4 text-center m-auto space-y-2" 
        component={
          <>
            <Button variant="primary" text="Block Button" block />
            <Button variant="secondary" text="Block Button" block />
          </>
        } 
        syntaxBlock={
          `<Button variant="primary" text="Block Button" block /> \n` +
          `<Button variant="secondary" text="Block Button" block />`}
        title="Block buttons" 
      />
      <span class='prose'>  
        <h2>Active state</h2>
        <p>To set a button's active state simply set the component's active prop.</p>
      </span>
      <br/>
      <Showcase 
        class="w-full p-4 text-center m-auto space-x-2" 
        component={
          <>
            <Button variant="primary" text="Active Button" active />
            <Button variant="secondary" text="Active Button" active />
          </>
        } 
        syntaxBlock={
          `<Button variant="primary" text="Active Button" active /> \n` +
          `<Button variant="primary" text="Active Button" active />`} 
        title="Active buttons" 
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
          `<Button variant="primary" text="Disabled Button" disabled/> \n` +
          `<Button variant="secondary" text="Disabled Button" disabled />`} 
        title="Disabled buttons" 
      />
      <span class='prose'>  
        <h2>Loading state</h2>
        <p>Convert buttons to a loading state by adding the loading prop.</p>
      </span>
      <br/>
      <Showcase 
        class="w-full p-4 text-center m-auto space-x-2" 
        component={
          <>
            <Button variant="primary" text="Button" loading />
            <Button variant="secondary" text="Button" loading />
          </>
        } 
        syntaxBlock={
          `<Button variant="primary" text="Button" loading /> \n` +
          `<Button variant="secondary" text="Button" loading />`}  
        title="Loading" 
      />
      <span class='prose'>  
        <h2>Icons</h2>
        <p>Add icons to your buttons by adding the icon prop</p>
      </span>
      <br/>
      <Showcase 
        class="w-full p-4 text-center m-auto space-x-2" 
        component={
          <>
            <Button variant="primary" text="Button" icon={<ExclamationIcon/>} />
            <Button variant="secondary" text="Button" icon={<ExclamationIcon/>} />
          </>
        } 
        syntaxBlock={
          `<Button variant="primary" text="Button" icon={<ExclamationIcon/>} /> \n` +
          `<Button variant="secondary" text="Button" icon={<ExclamationIcon/>} />`}
        title="Icon Buttons" 
      />
        <span class='prose'>  
        <h2>Secondary Icons</h2>
        <p>Add secondary icons to your buttons by adding the secondaryIcon prop</p>
      </span>
      <br/>
      <Showcase 
        class="w-full p-4 text-center m-auto space-x-2" 
        component={
          <>
            <Button variant="primary" text="Button" secondaryIcon={<ChevronDownIcon/>} />
            <Button variant="secondary" text="Button" secondaryIcon={<ChevronDownIcon/>} />
          </>
        } 
        syntaxBlock={
          `<Button variant="primary" text="Button" secondaryIcon={<ChevronDownIcon/>} /> \n` +
          `<Button variant="secondary" text="Button" secondaryIcon={<ChevronDownIcon/>} />`}
        title="Secondary Icons" 
      />
      <span class='prose'>  
        <h2>Icon sizes</h2>
        <p>Change the size of button icons by using the iconSize prop. <br/>
        Add iconSize="xs", iconSize="sm", iconSize="lg" iconSize="xl" for additional sizes.</p>

      </span>
      <br/>
      <Showcase 
        class="w-full p-4 text-center m-auto space-x-2" 
        component={
          <>
            <Button variant="primary" text="Icon SM" iconSize="sm" icon={<ExclamationIcon/>} />
            <Button variant="secondary" text="Icon LG" iconSize="lg" icon={<ExclamationIcon/>} />
            <Button variant="secondary" text="Icon XL" iconSize="xl" icon={<ExclamationIcon/>} />
          </>
        } 
        syntaxBlock={
          `<Button variant="primary" text="Icon SM" iconSize="sm" icon={<ExclamationIcon/>} /> \n` +
          `<Button variant="primary" text="Icon LG" iconSize="lg" icon={<ExclamationIcon/>} /> \n` +
          `<Button variant="primary" text="Icon XL" iconSize="xl" icon={<ExclamationIcon/>} />`}
        title="Icon sizes" 
      />
      <span class='prose'>  
        <h2>Icon only buttons</h2>
        <p>Create icon only buttons by removing the text prop.</p>
      </span>
      <br/>
      <Showcase 
        class="w-full p-4 text-center m-auto space-x-2" 
        component={
          <>
            <Button variant="primary" secondaryIcon={<DotsHorizontalIcon/>} />
            <Button variant="secondary" secondaryIcon={<DotsHorizontalIcon/>} />
          </>
        } 
        syntaxBlock={
          `<Button variant="primary" secondaryIcon={<DotsHorizontalIcon/>} /> \n` +
          `<Button variant="secondary" secondaryIcon={<DotsHorizontalIcon/>} />`}
        title="Icon Buttons" 
      />
      <span class='prose'>  
        <h2>Notifications</h2>
        <p>Create notification badges by passing in custom markup.</p>
      </span>
      <br/>
      <Showcase 
        class="w-full p-4 text-center m-auto space-x-2" 
        component={
          <Button variant="outline-light" size="md" icon={<BellIcon/>} iconSize="lg" rounded > 
            <span class="sr-only">View notifications</span>
            <span class="absolute top-0 right-0 block w-2 h-2 bg-red-400 rounded-full ring-2 ring-white"></span>
          </Button>
        } 
        syntaxBlock={
          `<Button variant="outline-light" size="md" icon={<BellIcon/>} iconSize="lg" rounded > \n` +
          `  <span class="sr-only">View notifications</span> \n` +
          `  <span class="absolute top-0 right-0 block w-2 h-2 bg-red-400 rounded-full ring-2 ring-white"></span> \n` +
          `</Button>`}
        title="Notification Button" 
      />
      <span class='prose'>  
        <h2>Avatars</h2>
        <p>Create button backgrounds by passing in custom markup.</p>
      </span>
      <br/>
      <Showcase 
        class="w-full p-4 text-center m-auto space-x-2" 
        component={
          <Button variant="dark" size="md" rounded suffixClasses="overflow-hidden">
            <span className="sr-only">User Profile</span>
            <img src="https://avatars0.githubusercontent.com/u/39002455?v=4" aria-hidden="true" alt="touha98" class="object-cover w-full h-full top-0 absolute bottom-0 left-0 right-0 hover:opacity-80 transition duration-300 ease-in-out"></img>
          </Button>
        } 
        syntaxBlock={
          `<Button variant="dark" size="md" rounded suffixClasses="overflow-hidden"> \n` +
          `  <span className="sr-only">User Profile</span> \n` +
          `  <img src="https://avatars0.githubusercontent.com/u/39002455?v=4" aria-hidden="true" alt="touha98" class="object-cover w-full h-full top-0 absolute bottom-0 left-0 right-0 hover:opacity-80 transition duration-300 ease-in-out"></img> \n` +
          `</Button>`}
        title="Avatar Buttons" 
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
    </span>
  )
}

export default Buttons;